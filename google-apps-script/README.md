# Connexion MoroBest → Google Sheets

1. Connectez-vous avec `tecommerce1@gmail.com` et créez une feuille Google nommée **Commandes MoroBest**.
2. Copiez son identifiant depuis l'URL, entre `/d/` et `/edit`.
3. Ouvrez **Extensions → Apps Script**, remplacez le contenu de `Code.gs` par celui de ce dossier.
4. Dans **Paramètres du projet → Propriétés du script**, ajoutez :
   - `SPREADSHEET_ID` : l'identifiant copié à l'étape 2 ;
   - `WEBHOOK_SECRET` : une longue valeur aléatoire privée.
5. Sélectionnez **Déployer → Nouveau déploiement → Application Web** :
   - Exécuter en tant que : **Moi** ;
   - Qui a accès : **Tout le monde**.
6. Dans Vercel, ajoutez les variables d'environnement :
   - `GOOGLE_SHEETS_WEB_APP_URL` : l'URL `/exec` du déploiement ;
   - `GOOGLE_SHEETS_WEBHOOK_SECRET` : la même valeur privée qu'à l'étape 4.
7. Redéployez le site et envoyez une commande de test depuis chaque landing page.

L'URL et le secret restent uniquement côté serveur. Ne les ajoutez jamais au code client ni au dépôt Git.
