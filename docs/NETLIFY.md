# Publication actuelle : Netlify

État documentaire au 17 novembre 2026. Le site est publié sur https://noahlitzler.fr/ ; le domaine est enregistré chez Infomaniak. Le dépôt GitHub public est noahlitzler/portfolio, branche main. La publication de nouveaux commits reste soumise à la validation de Noah.

## Construction

- netlify.toml : commande bun run build, dossier déclaré dist, Node 22, Bun 1.4.2.
- astro.config.mjs : adaptateur @astrojs/netlify ; l’adaptateur gère les sorties et la fonction serveur.
- PORTFOLIO_SITE : https://noahlitzler.fr, pour les URL canoniques et le sitemap.
- PUBLIC_CONTACT_ACTIF=true est actuellement déclaré dans netlify.toml. Un changement des variables utilisées pendant le build nécessite une reconstruction.
- Le domaine principal est sans www ; HTTPS et redirection www ont été vérifiés lors des contrôles de publication précédents.
- Aucun workflow VPS : la publication passe par Netlify depuis le dépôt GitHub.

## Contact Gmail SMTP

Le formulaire envoie vers /api/contact ; ce n’est pas Netlify Forms. La fonction utilise Nodemailer et les variables SMTP_HOST, SMTP_PORT, SMTP_USER et SMTP_PASS. Pour Gmail : hôte smtp.gmail.com, port 465 avec connexion sécurisée. SMTP_PASS est un mot de passe d’application Google, jamais le mot de passe Gmail habituel. Noah a saisi les valeurs en privé et confirmé une réception le 16 novembre.

Les secrets doivent être disponibles à la fonction en production, jamais préfixés PUBLIC_, copiés dans le dépôt ou affichés dans les logs. Les portées et contextes proposés dépendent du compte Netlify ; ne pas activer les envois SMTP sur des aperçus publics sans besoin. Ne pas consulter ou recopier les valeurs pour documenter le projet.

La route valide les champs, l’origine, la taille de requête et le champ leurre. Une limitation de tentatives existe en mémoire : elle n’est pas distribuée entre instances et se réinitialise au redémarrage d’une fonction. Les tests utilisent un transport factice. Le lien email direct reste disponible en cas d’échec.

## Contrôle après le dernier déploiement

1. Vérifier le succès du build et la version publiée.
2. Ouvrir le domaine et www en HTTPS ; vérifier la destination finale.
3. Parcourir accueil, projets, contact, mentions, CV, sitemap, robots et une URL inconnue.
4. Vérifier le changement FR / EN sur une étude, le menu et la visionneuse.
5. Faire un envoi réel autorisé depuis le formulaire et confirmer sa réception et l’adresse de réponse.
6. Refaire les mesures de performance et dater les résultats dans QUALITE.md.

Les étapes ci-dessus sont une procédure à exécuter, pas une attestation d’exécution de cette finalisation documentaire. La réception déjà confirmée ne remplace pas ce contrôle après publication.

## Nettoyage du dépôt

Les anciennes procédures et configurations du VPS pédagogique ont été retirées du dépôt le 18 novembre, après sauvegarde externe. Elles ne sont plus nécessaires à la publication Netlify. Le journal conserve le récit du changement d’hébergement. Ce nettoyage local ne modifie aucun serveur distant.
