# Publication et formulaire — préparation locale

État au 12 novembre 2026 : nom de domaine noahlitzler.fr chez Infomaniak, hébergement non configuré, aucun push ni déploiement effectué. Netlify est la piste préparée parce que le formulaire existant utilise Netlify Forms ; aucun compte ou service externe n’a été créé pendant cette intervention.

## Configuration prête à relire

- netlify.toml : npm run build, sortie dist, Node 24, page 404 anglaise pour les chemins inconnus sous /en, en-têtes de type de contenu et de référent.
- .env.example : domaine final et PUBLIC_CONTACT_ACTIF=false.
- Formulaire HTML présent dans les deux langues, même nom contact, honeypot et form-name conservés ; la destination de confirmation suit la langue de la page.
- Bouton d’envoi désactivé tant que PUBLIC_CONTACT_ACTIF n’est pas true. L’email direct reste disponible. La version active conserve un envoi HTML natif sans JavaScript ; avec JavaScript, elle affiche l’attente, limite la durée d’une tentative à 15 secondes et préserve les champs en cas d’erreur.

## Après validation de Noah

1. Choisir et configurer l’hébergement. Si Netlify est retenu, contrôler les conditions du compte et activer la détection des formulaires avant la publication qui doit les détecter.
2. Effectuer une première publication validée avec le formulaire désactivé. Contrôler que contact est détecté et configurer la notification à noah.litzler@gmail.com dans le service. Le destinataire n’est pas une valeur secrète cachée dans le formulaire : il se configure chez l’hébergeur.
3. Compléter les informations de l’hébergeur et les modalités de traitement des messages dans les mentions légales. Confirmer les crédits et licences restants.
4. Activer PUBLIC_CONTACT_ACTIF=true dans l’environnement de production et reconstruire/republier avec l’accord de Noah.
5. Envoyer un message d’essai convenu avec Noah, vérifier sa présence dans le service et la réception dans sa boîte, puis essayer aussi les erreurs réseau. Un simple code HTTP réussi ne prouve pas la réception d’un email.
6. Rattacher noahlitzler.fr au service retenu en suivant ses valeurs DNS actuelles, valider HTTPS, les pages FR / EN, les 404, le CV et le sitemap. Ne pas modifier les DNS sans validation.

Si un autre hébergeur est choisi, adapter le traitement du formulaire avant de l’activer : Netlify Forms ne fonctionne pas sur un simple hébergement statique tiers.

Référence de préparation : [configuration Netlify Forms](https://docs.netlify.com/manage/forms/setup/). Aucun envoi réel n’a été réalisé ici.
