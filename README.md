# GraphQL Workshop for Best Of Web

![alt Logo Best of Web](./docs/bow-logo.png)

## Introduction

Ce workshop préparé au sein de [JS-Republic](http://js-republic.com/) par [Michael Romain](http://twitter.com/michaeldotjs) et [Mathieu Breton](https://twitter.com/matbreton) a pour but de vous apprendre à utiliser [GraphQL](https://graphql.org/).

D'une durée approximative de 3h, ce workshop vous guide pas à pas dans la migration d'un CMS basique fait avec une API Rest vers une implémentation full GraphQL. Chaque étape vous démontrera les avantages (et inconvénients) de GraphQL comparé à Rest pour les mêmes besoins. Ce workshop est conçu pour des développeurs JavaScript, débutant avant GraphQL.

## Pré-requis

Pour suivre ce workshop, vous aurez besoin :

* De connaissances confirmées dans le langage [JavaScript](https://developer.mozilla.org/fr/docs/Web/JavaScript), en [NodeJS](https://nodejs.org/en/) et en développement Front-End.
* D'une prémière expérience avec les [API Rest](https://openclassrooms.com/courses/utilisez-des-api-rest-dans-vos-projets-web).
* De [NodeJS](https://nodejs.org/en/) installé en version **6.14.2 et plus**. Dans un soucis de compatibilité, l'implémentation back-end fonctionne avec la version 6.\* de Node, version la plus vielle actuellement encore maintenue. Si vous utilisez [nvm](https://github.com/creationix/nvm), vous pouvez faire un `nvm use` à la racine du projet pour passer directement dans la bonne version de NodeJS.
* D'un éditeur de code. [Visual Studio Code](https://code.visualstudio.com/) fait désormais référence.

## Installation

Une fois n'est pas coutume, nous récupérons ce projet depuis Github et installerons ses dépendances :

```bash
git clone https://github.com/js-republic/graphql-workshop.git
cd graphql-workshop
npm install
```

Il ne reste plus qu'à le démarrer :

```bash
npm start
```

Votre navigateur s'ouvre à l'adresse <http://localhost:3000>, vous devriez découvrir cette interface :

![alt Interface du blog](./docs/blog-screenshot.png)

## Description du projet :

Le projet est organisé comme suit :

```
.
├── blog.sqlite                   <-- Fichier de base de données SQlite du blog
├── docs                          <-- Dossier de documentation
├── migrations                    <-- Dossier contenant les scripts d'initialisation SQL
├── package.json
├── public                        <-- Dossier publique exposé sur localhost:3000
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── server                        <-- Sources du serveur en NodeJS exposant les données
│   ├── index.js                  <-- Script d'entré, configurant et démarrant le serveur
│   ├── logger-conf.js            <-- Script de configuration de logging serveur
│   ├── route                     <-- Dossier contenant les routes exposées par le serveur
│   │   ├── graphql.js            <-- Script pour exposer les données en GraphQL (à modifier pendant le workshop)
│   │   ├── rest.js               <-- Script pour exposer les données en REST
│   │   └── rest-utils.js
│   └── service
│       └── index.js              <-- Service qui permet d'accéder et modifier les données en base
└── src                           <-- Sources du front en React (architecture create-react-app)
    ├── ...
    ├── components
    │   └── ...
    ├── rest-client.js            <-- Script permettant la récupération et manipulation des données via REST
    └── graphq-client.js          <-- Script permettant la récupération et manipulation des données via GraphQL (à modifier pendant le workshop)
```

Quand le projet est démarré (via `npm start`) deux tâches sont lancées en parallèle :

* Un webpack-dev-server avec hot reload qui compile les sources du front en React (dans le dossier `/src`) et les expose sur l'adresse <http://localhost:3000>. Se webpack-dev-server fait aussi proxy pour envoyer les requêtes XHR vers le serveur.
* Un serveur NodeJS qui expose une api REST sur <http://localhost:3001/rest> et une api GraphQL sur <http://localhost:3001/graphql>

## Premier exercice : Familliarisation avec GraphQL
