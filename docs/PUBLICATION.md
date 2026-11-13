# Publication du portfolio — méthode du cours de Hakim

Préparation locale du 13 novembre 2026. Aucune publication, aucun push et aucune modification du VPS ou du DNS effectués pendant la préparation. Une sauvegarde ZIP et un bundle Git précèdent les changements.

## Architecture retenue

- Bun 1.4.2, déjà présent en local et sur le VPS du cours.
- Astro avec l’adaptateur Node standalone étudié en cours. Les pages de présentation gardent prerender=true ; seule l’API du formulaire et la page d’erreur de repli s’exécutent à la demande.
- Application séparée : /var/www/portfolio, service portfolio.service, port interne proposé 3355, lié à 127.0.0.1. Ce port était libre lors du contrôle préparatoire ; le revérifier avant installation.
- Apache reçoit le domaine public ; Certbot / Let’s Encrypt gère le certificat ; GitHub Actions utilise SSH pour les mises à jour.
- Formulaire vers noah.litzler@gmail.com par SMTP Gmail. Aucun SQLite ou back-office ajouté : les contenus éditoriaux restent ceux du portfolio.

## État observé, à revérifier avant basculement

Connexion connue du cours : ssh -p 23009 etudiant@185.157.244.202. Les lectures SSH ont confirmé MMI2526-vps-9, Bun au chemin /home/etudiant/.bun/bin/bun et Node 22.23.3.

Le DNS de noahlitzler.fr pointait vers 75.2.60.5 ; www vers noahlitzler.netlify.app. En revanche, clients.noahlitzler.fr et tiktak.noahlitzler.fr pointaient vers le VPS, 185.157.244.202. Le MX Infomaniak et le TXT SPF existants n’ont pas à être changés pour cet hébergement.

Sur le VPS, les VirtualHost tiktak.conf et tiktak-le-ssl.conf utilisent actuellement noahlitzler.fr et le port 4321. Les VirtualHost distincts tiktak-sae.conf / tiktak-sae-le-ssl.conf desservent tiktak.noahlitzler.fr. Le portfolio doit remplacer uniquement la destination du domaine racine ; ne pas modifier TiK TaK, son service, son port ou ses sous-domaines, ni les autres TP.

## 1. Validation et installation séparée

Après accord de Noah pour envoyer la version validée sur GitHub, puis installer le portfolio :

```bash
sudo install -d -m 0755 -o etudiant -g etudiant /var/www/portfolio
git clone --branch main https://github.com/noahlitzler/portfolio.git /var/www/portfolio
cd /var/www/portfolio
umask 077
cp .env.example .env
# Garder PUBLIC_CONTACT_ACTIF=false pour la première mise en ligne.
/home/etudiant/.bun/bin/bun install --frozen-lockfile
/home/etudiant/.bun/bin/bun run test
/home/etudiant/.bun/bin/bun run --bun build
sudo install -m 0644 deploy/portfolio.service /etc/systemd/system/portfolio.service
sudo systemctl daemon-reload
sudo systemctl enable --now portfolio.service
systemctl status portfolio.service --no-pager
curl --fail --silent --show-error http://127.0.0.1:3355/ >/dev/null
```

Ne pas lancer le clone si le dossier contient déjà un projet. Les commandes d’administration demandant sudo seront exécutées par Noah ou avec sa validation ; aucun mot de passe administrateur ne doit être communiqué dans le chat.

## 2. Domaine, certificat et basculement

Après validation explicite de Noah : remplacer l’enregistrement A du domaine racine par 185.157.244.202 et le CNAME www par noahlitzler.fr. Préserver MX, TXT SPF, tous les autres sous-domaines et vérifier l’absence d’une ancienne entrée AAAA qui dirigerait encore ces deux noms ailleurs. Conserver les anciennes valeurs pour le retour arrière.

La propagation peut temporairement partager les visiteurs entre les destinations. Ne pas laisser durablement le domaine racine arriver sur l’ancien VirtualHost TiK TaK. Effectuer cette étape et la bascule Apache dans la même intervention.

Obtenir le certificat avec Certbot avant d’activer les nouveaux fichiers HTTPS :

```bash
sudo certbot certonly --apache --cert-name noahlitzler.fr -d noahlitzler.fr -d www.noahlitzler.fr
sudo certbot certificates
```

Certbot doit confirmer que le certificat couvre les deux noms et se trouve dans /etc/letsencrypt/live/noahlitzler.fr/. Ne pas continuer en cas d’échec. Si une acceptation de nouvelles conditions de service est demandée, Noah la traite personnellement.

Sauvegarder les deux fichiers Apache du domaine avant remplacement, avec un dossier daté unique. Puis :

```bash
sudo install -m 0644 deploy/apache/portfolio.conf /etc/apache2/sites-available/portfolio.conf
sudo install -m 0644 deploy/apache/portfolio-le-ssl.conf /etc/apache2/sites-available/portfolio-le-ssl.conf
sudo a2dissite tiktak.conf tiktak-le-ssl.conf
sudo a2ensite portfolio.conf portfolio-le-ssl.conf
sudo apache2ctl configtest
# Recharger seulement si le test indique Syntax OK.
sudo systemctl reload apache2
curl -I https://noahlitzler.fr
curl -I https://www.noahlitzler.fr
curl -I https://tiktak.noahlitzler.fr
```

X-Forwarded-Host et X-Forwarded-Proto sont définis dans le modèle HTTPS ; Astro n’accepte que les domaines prévus. Ce réglage permet de conserver sa protection contre les soumissions provenant d’un autre site. Aucune désactivation du contrôle d’origine n’est prévue.

## 3. Activer Gmail séparément

Noah confirme disposer uniquement de Gmail. Il crée lui-même le mot de passe d’application Google si son compte le permet, puis le saisit directement sur le VPS dans .env, jamais dans GitHub, un commit, une commande affichée ou le chat. Ne pas utiliser son mot de passe Google normal. La [documentation Google](https://support.google.com/accounts/answer/185833?hl=fr) précise les conditions d’accès à cette option.

Réglages préparés : smtp.gmail.com, port 465, SMTP_USER=noah.litzler@gmail.com ; le destinataire est fixé côté serveur à la même adresse. Le visiteur est placé dans Reply-To, jamais dans From ou To. Le mot de passe reste uniquement dans SMTP_PASS du fichier privé.

Avant ouverture du formulaire : compléter les modalités de traitement des messages et les informations d’hébergeur dans les mentions, puis passer PUBLIC_CONTACT_ACTIF=true, reconstruire et redémarrer le seul service portfolio. Avec l’accord de Noah, envoyer un message d’essai, vérifier la réception réelle dans Gmail et le comportement du bouton Répondre. Un test automatisé avec un transport factice ne prouve pas cette réception.

Le formulaire valide les champs et la provenance, limite les tailles et les tentatives, possède un champ leurre et garde les champs saisis en cas d’erreur avec JavaScript. La page de confirmation n’est proposée qu’après acceptation du message par le transport SMTP. Aucune copie persistante n’est enregistrée par l’application.

## 4. Automatisation GitHub Actions

Le job reste désactivé tant que la variable de dépôt DEPLOIEMENT_ACTIF n’est pas true. Cela permet d’envoyer d’abord le code validé sans tentative d’installation incomplète. Après configuration du serveur et des secrets, Noah peut autoriser son activation.

Le fichier .github/workflows/deploy.yml applique le principe du cours : push main ou lancement manuel → SSH → git pull → bun install → tests → build → redémarrage systemd → contrôle HTTP local. L’environnement GitHub production doit être préparé avant le premier déclenchement ; une validation de déploiement par Noah peut y être imposée si le dépôt et l’offre le permettent.

Secrets à renseigner dans le dépôt portfolio : VPS_HOST, VPS_USER, VPS_PORT, VPS_SSH_KEY et VPS_FINGERPRINT. Utiliser une clé de déploiement dédiée au portfolio. Ne pas réutiliser ni publier la clé privée du projet TiK TaK. Vérifier l’empreinte d’hôte avec la connexion déjà approuvée ; ne pas désactiver la vérification du serveur SSH.

La seule permission sudo préparée est le redémarrage de portfolio.service. Faire valider deploy/portfolio.sudoers avec visudo et approuver cette autorisation avant son installation. Ne pas donner un accès sudo sans mot de passe à toutes les commandes. Les mises à jour conservent une copie du dossier dist dans /home/etudiant/portfolio-backups avant le build. Comme dans la procédure simple du cours, le build s’effectue dans le dossier du projet ; prévoir une brève interruption possible des ressources lors d’une mise à jour.

## 5. Contrôles finaux et retour arrière

Après publication : cinq études FR / EN, images et agrandissements, navigation, 404 dans les deux langues, CV, HTTPS / redirection www, sitemap, robots et test réel du formulaire une fois activé. Contrôler également que les autres domaines du VPS répondent toujours.

En cas de problème de bascule : désactiver seulement les deux fichiers portfolio, réactiver les deux anciens fichiers racine TiK TaK, tester Apache puis recharger. Les VirtualHost tiktak-sae et les autres TP restent intacts. Les anciennes valeurs DNS et les sauvegardes locales permettent de revenir à la destination précédente. Ne jamais restaurer un certificat ou supprimer des fichiers au hasard.

## Limites de la préparation

Le VPS a été consulté en lecture seule. Les fichiers systemd/Apache et le workflow sont prêts localement ; leur activation, l’empreinte et la clé GitHub dédiée, le certificat réel à renouveler si nécessaire, les DNS et la réception Gmail attendent l’intervention validée. Aucun résultat de mise en ligne n’est revendiqué à ce stade.


### Accès à rétablir avant installation

Lors des derniers essais du 13 novembre, SSH vers le port 23009 a expiré à deux reprises, alors que https://clients.noahlitzler.fr répondait HTTP 200. Cela ne prouve pas un arrêt du VPS : l’accès SSH ou son réseau doit être vérifié avec Noah. Aucune installation ni modification de configuration n’a été tentée.
