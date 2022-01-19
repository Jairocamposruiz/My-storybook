# jcoder-my-storybook

https://www.npmjs.com/package/jcoder-my-storybook

Este paquete cuenta con diferentes componentes de React en TypesScript

## Funcionamiento del Package

---

### Instalación

```
npm install jcoder-my-storybook
```

```
yarn add jcoder-my-storybook
```

### Enlace a storybook con los componentes

https://jcoder-my-storybook.netlify.app

## Comandos

---

### ```npm start```

Levanta servidor con storybook

### ```npm run build```

- Elimina la carpeta dist
- La vuelve a crear por medio de tsc
- Copiamos los archivos css del directorio src al directorio dist

### ```npm run build-storybook```

Crea archivos estáticos de storybook

### ```npm run chromatic```

Sube cambios a chromatic y detecta cambios con los test que pasa, solo detecta cambios visuales

### ```npm run clean```

Por medio del paquete rimraf elimina el directorio dist

### ```npm run copy-files```

Por medio del paquete copyfiles copiamos los archivos css de src al directorio dist, esto se podría mejorar con una
configuración de webpack y añadiendo mimificación de archivos.

## Chromatic

---

Se conecta con el repositorio de git y cuando ejecutamos ```npm run chromatic``` este coge los últimos cambios del
mismo, si vamos a la cuenta nos muestra los cambios y podremos aceptarlos o no y desde la misma podremos ver la última
versión aceptada del storybook.
https://chromatic.com

## Semantic Release

---

El proyecto cuenta con semantic release automático lo cual nos permite que cuando hacemos un commit este cambie la
versión de manera automática según el comentario que pongamos en el mismo.

- fix: Indicamos que es un bug fix con lo cual solo cambiará el último número
- feat: Indicamos que es una feature con lo cual cambia el número central
- BREAKING CHANGE o perf: Indica que es una nueva versión con lo cual cambia el número principal

Ejemplo: **fix: reparando bug**

## Tokens

---

Este proyecto está configurado con github actions para manejo de semantic versioning automático y despliegue en NPM Para
ello es necesario mantener los tokens.

- Un token de GitHub para las developers settings el cual tiene una expiración de 90 días. The token will expire on Tue,
  Apr 19 2022
- Un token de NPM para el despliegue automático, sin expiración.

Estos tokens están configurados en el ámbito de repositorio en GitHub. Settings/secrets/actions.

- GH_TOKEN
- NPM_TOKEN



