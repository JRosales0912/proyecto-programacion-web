# proyecto-programacion-web (Frontend)
## Catalogo de Relojes
Esta aplicación fue desarrollada completamente en React, implementando Office UI para la interfaz de usuario. 

### Funcionalidades

Este proyecto corresponde al curso de Programación Web, consiste en una pagina web de relojes. Esta contiene información acerca de la historia de los relojes y un catálogo de los mismos. Incluye las funcionalidades de CREAR, BORRAR y MODIFICAR registros. Cada registro consiste de un reloj con: 
- Imagen
- Marca
- Año de fabricación
- Tipo de reloj
- Diametro

Toda esta información es proveida por el usuario, ingresada en una pantalla de agregar reloj o modificada en la pantalla del catálogo.  

### Instalación

Para instalar:
1. Descargar el repositorio en una carpeta
2. Descargar `npm`
3. Abrir la consola y dirigirse a la carpeta donde se descargo el repositorio.
4. Ir a la carpeta Watches.
5. Correr el comando `npm install`

### Correr el programa

A continuación se descargaran todas las dependencias y paquetes necesarios. Se debe poder correr el proyecto después de lo anterior con el comando `npm start`. Esto inciara el proyecto en el servidor de desarrollo, en el puerto 3000.

### Genera imagen de Docker

Si desea genera una imagne de docker del programa este ya cuenta con un Dockerfile que sirve para este proposito por lo que unicamente debe seguir los siguientes pasos.

1. Instalar Docker
2. Abrir una consola y colocarse en la ruta del proyecto en la carpeta watches
3. Correr `docker build .`

Esto generara la imagen de Docker del proyecto exponiendo el puerto 5000.

### Notas
- La imagen consiste en un link a la imagen que se desea usar.
- Este repositorio contienen unicamente el frontend del poryecto, para acceder a todas las funcionalidades es necesario instalar el backend, el cual contiene el API y la base de datos necesaria para el proyecto. Puede encontrar el respositorio en [Backend Watches](https://github.com/JRosales0912/programacion-web-lab5-express)
