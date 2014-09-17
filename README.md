# node-express-react-boilerplate

### Requisitos
- [Node.js](http://nodejs.org/)
- [MongoDB](http://www.mongodb.org/)
- [bower](http://bower.io/)
- [gulp](http://gulpjs.com/)

### Instalación

```sh
git clone git@github.com:archr/node-express-react-boilerplate.git
npm install
bower install
gulp build
```

### Uso

```sh
node index.js
```

Ir a [localhost:3000](https://localhost:3000)

### Configuración

Tenemos dos carpetas en las cuales se define nuestro desarrollo:
- client: web app programada con **react**
- server: aplicación general en **express**

El el cliente en React usa 'require' con browserify por lo cual podemos usar cualquier libreria que utilice npm como por ejemplo _debug_.

En el server se tiene una configuración en las carpetas de la siguiente forma:
- assets: Todo lo relaciónado con el css, se utiliza bootstrap-less y font-awesome administrados por bower, style.less es el archivo base a configurar.
- config:
  - index.js: tiene las las variables de entorno si se necesitan agregar algunas keys de twitter, facebook ó otra esta deberia estar aquí.
  - express.js: configuración de express.
- models: contiene todos los modelos que usa la app los cuales son cargan dinamicamente al iniciarse esta.
- public: incluye todos los archivos estaticos que se usan.
- routes: configura las rutas, en index.js se middlewares y paths.
- index.js: inicia el web server

Se usa gulp para generar un solo archivo js App.js que incluye toda la web app y para procesar less.

Se usa bower para nuestras dependencias del lado del cliente.