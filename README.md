# 💕 Site Saint-Valentin pour Cinthya

Un site web romantique créé avec amour pour la Saint-Valentin !

## 📁 Fichiers inclus

- `index.html` - Page principale
- `styles.css` - Styles et animations
- `script.js` - Fonctionnalités interactives

## 🚀 Comment déployer sur GitHub Pages

### Étape 1 : Créer un dépôt GitHub
1. Va sur [github.com](https://github.com) et connecte-toi
2. Clique sur "New repository"
3. Nomme le dépôt (ex: `valentin-cinthya`)
4. Coche "Public"
5. Clique "Create repository"

### Étape 2 : Uploader les fichiers
1. Dans ton dépôt, clique sur "uploading an existing file"
2. Glisse-dépose les 3 fichiers : `index.html`, `styles.css`, `script.js`
3. Clique "Commit changes"

### Étape 3 : Activer GitHub Pages
1. Dans ton dépôt, va dans "Settings"
2. Clique sur "Pages" dans le menu de gauche
3. Sous "Build and deployment" > "Source", sélectionne "Deploy from a branch"
4. Sous "Branch", sélectionne "main" (ou "master") et "/ (root)"
5. Clique "Save"
6. Attends 1-2 minutes, puis clique sur le lien affiché en haut

**Ton site sera en ligne à l'adresse :** `https://ton-prenom.github.io/valentin-cinthya/`

## 🎨 Comment personnaliser le site

### Ajouter vos photos
1. Crée un dossier `images` dans ton dépôt
2. Ajoute tes photos (nomme-les `photo1.jpg`, `photo2.jpg`, `photo3.jpg`)
3. Modifie le fichier `index.html` pour remplacer les placeholders :

```
html
<!-- Remplace ceci : -->
<div class="photo-placeholder">...</div>

<!-- Par ceci : -->
<img src="images/photo1.jpg" alt="Notre photo" class="photo">
```

### Modifier le message d'amour
Ouvre le fichier `index.html` et cherche la section "letter-text" pour modifier le message :

```
html
<p class="letter-text">Ton message personnalisé ici...</p>
```

### Changer le prénom
Dans `index.html`, cherche "Cinthya" et remplace par le prénom souhaité.

### Changer la date de rencontre
Dans `script.js`, modifie cette ligne :
```
javascript
const startDate = new Date('2021-09-18T00:00:00');
```

## ✨ Fonctionnalités

- ❤️ Compteur temps ensemble (temps réel)
- 💕 Animation de cœurs qui tombent
- 💌 Lettre d'amour interactive
- 📸 Section photos (placeholders)
- 📜 Citations romantiques
- 🎯 Design responsive (mobile-friendly)

## 🎁 Amuse-toi bien !

Envoie le lien à Cinthya et fais-lui une belle surprise ! 💘

---

Créé avec ❤️ pour Cinthya
Saint-Valentin 2026
