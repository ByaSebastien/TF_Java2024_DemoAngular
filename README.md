# Installer NodeJs et Angular
## Installer NodeJS
Nous allons nous servir de NodeJs pour son gestionnaire de packages (npm). Il faudra donc télécharger la dernière version stable (LTS) de Node <a href="https://nodejs.org/fr">en cliquant ici.</a>

## Installer Angular
Une fois que Node est installé, pour installer <a href="https://angular.dev/">Angular</a>, il faudra taper dans la console de votre choix :
```
npm i -g @angular/cli
```
* i -> install (permet d'installer un package)
* -g -> global (permet d'installer ce package globalement sur la machine et pas juste dans le projet/dossier)

Une fois que Angular est installé, vous pouvez taper
```
ng version
```
pour voir quelle version est installée.

<hr>

# Créer son projet Angular
## Créer le projet :
Pour créer un projet en Standalone, c'est simple. Comme Angular force le standalone, rien de spécial à rajouter, il faudra faire la commande :
```
ng new NomDuProjet
```

Si vous souhaitez créer un projet en Modules, il faudra rajouter une option :
```
ng new NomDuProjet --no-standalone
```
Il existe plein d'autres options, pour par exemple, désactiver le routing, désactiver les tests etc

## Lancer le projet :
En mode dev, on peut lancer le projet en local. Le projet recompile à chaque sauvegarde, vous n'avez pas besoin de relancer le projet à chaque fois.
```
ng s -o
```
* s -> serve (permet de lancer le serveur)
* -o -> open (pour lancer le projet dans votre navigateur préféré)

Pour couper le serveur, se placer dans la console et appuyer sur :
```
CTRL + C
```

## Arborescence d'un projet Module
Premier plan (sera globalement pareil en Standalone) :
* node_modules : **Ne pas toucher** C'est ici que se trouvent tous les packages dont l'application a besoin pour fonctionner
* public : Tous les fichiers media publiques (favicon, police etc)
* src : Contient votre projet, c'est là dedans qu'on va coder
* angular.json : fichier de configuration de votre projet angular
* package.json : fichier de configuration contenant la liste de tous les packages nécessaires au bon fonctionnement du projet avec leurs versions
* tsconfig.json : fichier de configuration du typeScript

Dans le dossier src (C'est ici que ce sera différent en Standalone) :
* app : C'est dans ce dossier que ce trouve notre application
* index.html : Point d'entrée, c'est la page html chargée dans laquelle on va avoir le composant app, dans lequel on mettra nos futurs composants
* main.ts : Indique que le module d'amorçage du projet est AppModule (qui se trouve dans le dossier app)
* styles.scss : C'est ici qu'on met le style global à toute l'application

Pour l'instant, dans app, il y a :
* routingModule : C'est ici qu'on va définir toutes les routes (url) de notre projet et quoi faire quand on accède à telle route
* appModule : Module de l'application
  - declarations : Les composants, pipes etc contenus dans ce module
  - imports : Ce dont le module a besoin pour fonctionner
  - exports : (souvent utilisé dans le cas de module partagé) Sert à rendre exportable des fonctionnalités
  - providers : utilisé pour provide des services (notamment l'Interceptor)
  - bootstrap : Si un module est relié à un component, permet de renseigner lequel
* appComponent.html : le fichier html du composant app
* appComponent.scss : le fichier scss du composant app
* appComponent.ts : le fichier ts (la logique du composant) du composant app
* appComponent.spec.ts : le fichier test du composant app

<hr>

# Créer des choses dans son projet Angular
## Créer des composants
Pour créer un composant :
```
ng g c cheminVers/NomComposant
```
* g -> generate
* c -> component

## Créer un module :
Créer un module tout simple (sans composant et sans routing) :
```
ng g m cheminVers/nomModule
```
* g -> generate
* m -> module
  Créer un module avec un routing
```
ng g m cheminVers/nomModule --routing
```
Créer un module avec un composant d'amorçage
```
ng g c cheminVers/nomComposant -m cheminVers/nomModule
```
Malheureusement, on ne peut pas créer un module avec routing et avec composant. Le plus simple est de créer un module avec routing et ensuite d'y ajouter un composant
