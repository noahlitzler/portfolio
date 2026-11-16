## État actuel — 16 novembre 2026

Le portfolio est publié sur https://noahlitzler.fr via Netlify, domaine enregistré chez Infomaniak. Le domaine sans www est principal ; la configuration canonique est alignée dans cette correction. Le workflow de publication vers le VPS du cours est désactivé. Les sections datées antérieures décrivent les étapes historiques, pas l’état actuel.

Noah confirme le 16 novembre les droits de publication des ressources des cinq projets et la mise à jour de LinkedIn et de son second réseau. Ces confirmations ne remplacent pas une copie des licences des ressources tierces.

Le contact utilise l’API serveur et Gmail SMTP ; la configuration privée et le test de réception restent à effectuer avant ouverture. Le lien email direct reste disponible. Aucun secret dans Git, le chat ou le navigateur public.

Le retour arrière Apache sur le VPS pédagogique reste bloqué par la fermeture SSH avant identification. DNS racine et www restaurés le 14 novembre ; aucune réparation de TiK TaK n’est prétendue.

## Configuration du contact

Dans Netlify, Project configuration → Environment variables : SMTP_HOST=smtp.gmail.com, SMTP_PORT=465, SMTP_USER=noah.litzler@gmail.com, SMTP_PASS=mot de passe d’application saisi par Noah uniquement. Portée Functions pour les secrets ; ne pas exposer SMTP_PASS aux builds ni aux Deploy Previews. Si le compte ne propose pas les portées, saisir les variables sans les afficher et ne jamais les inclure dans les logs.

PUBLIC_CONTACT_ACTIF reste false dans netlify.toml jusqu’au test privé. Pour l’essai initial, activer seulement l’API via une variable runtime, puis effectuer un POST de test réel autorisé, vérifier Gmail et Répondre. Après réussite, passer PUBLIC_CONTACT_ACTIF=true pour le build et la fonction puis reconstruire. Ne pas annoncer la réception réelle sur la seule base des tests factices.

## Avant soutenance

Relecture personnelle de toutes les pages et textes ; essais sur téléphone et clavier/zoom ; compléter QUALITE.md avec les mesures réellement obtenues. La préférence de Noah pour les animations permanentes reste en place et la limite d’accessibilité est déclarée. Ne pas revendiquer une conformité WCAG complète.
