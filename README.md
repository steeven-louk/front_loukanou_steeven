# Projet de Gestion de Vols

Ce projet a pour but de Recréer et déployer une barre de recherche le plus proche possible de celle de Omio.

## Installation

Pour installer et exécuter l'application localement, suivez les étapes suivantes :

1. Clonez le dépôt GitHub du projet.

git clone https://github.com/steeven-louk/front_loukanou_steeven.git


2. Accédez au répertoire du projet.

cd front_loukanou_steeven


3. Installez les dépendances à l'aide de npm ou yarn.

npm install ou yarn install


4. Démarrez l'application en mode de développement.

npm run dev ou yarn run dev


L'application sera accessible à l'adresse http://127.0.0.1:5173/ dans votre navigateur.

5. Pour lancer les test

npm run test


## Architecture et Structure du Code

Le projet suit une architecture basée sur les composants, utilisant React.js et TypeScript. Voici la structure générale du code :

src
├── components # Composants réutilisables
├── services # Services pour les appels à l'API
├── styles # Fichiers de styles CSS/Sass se trouvant dans les dossiers de composants
└── App.tsx # Point d'entrée de l'application et page unique



- Le répertoire `components` contient des composants réutilisables tels que la barre de navigation, le formulaire de recherche, etc.
- Le répertoire `services` contient les fichiers pour les appels à l'API.
- Le répertoire `styles` contient les fichiers de styles CSS ou Sass pour l'application.

## Fonctionnalités Principales

- Recherche de vols : Les utilisateurs peuvent rechercher des vols en spécifiant une destination, une date de départ et une date de retour.
- Sélection de vols : Les utilisateurs peuvent sélectionner un vol spécifique parmi les résultats de recherche.

## Temps Mis à Finir le Projet

- Le projet a été réalisé en 5 jours, avec une charge de travail estimée à environ 9 heures par jour.

## Difficultés Rencontrées

Pendant le développement du projet, j'ai rencontré certaines difficultés, notamment :

- Apprentissage de React avec TypeScript.
- Gestion des types dans les composants React avec TypeScript.
- La communication avec l'API a nécessité une compréhension approfondie de sa structure et de ses endpoints. J'ai dû m'assurer de bien comprendre le fonctionnement des API et de gérer les éventuelles erreurs de réponse.
- Écrire des tests unitaires complets et efficaces pour couvrir toutes les fonctionnalités de l'application a été un défi. J'ai dû me familiariser avec Jest et m'assurer d'atteindre un bon niveau de couverture des tests.

Cependant, grâce à la documentation et aux ressources disponibles, j'ai pu surmonter ces difficultés et les considérer comme des opportunités d'apprentissage.

## Choix Techniques

Dans le cadre du projet de gestion de vols, j'ai fait les choix techniques suivants :

- Utilisation de React.js pour la construction de l'interface utilisateur.
- Utilisation de TypeScript pour ajouter des types statiques au code.
- Utilisation d'Axios pour effectuer des appels à l'API de gestion de vols.
- Utilisation d'Ant Design pour les composants d'interface utilisateur.
- Utilisation de React Icons et Font Awesome pour les icônes.
- Utilisation de Sass pour la gestion des styles CSS.
- Utilisation de Jest pour les tests unitaires.
-utilisation de Swiper.js pour implementer le carrousel d'images

## Remarques

L'application a été conçue en gardant à l'esprit la scalabilité et la maintenabilité du code. J'ai utilisé des principes de conception propres, tels que la séparation des responsabilités et la réutilisation des composants.