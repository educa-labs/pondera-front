## Pondera frontend

Bienvenidos al repo de pondera frontend, lo mejor que Educalabas alguna vez haya hecho.

Para ejecutar la aplicación encesitas tener installado **Node 8.4.0** en adelante. Para manejar los paquetes y scripts usamos **Yarn** (npm ya paso al olvido :cry:). 

### Development
Antes de hacer cualquier cosa, debemos instalar las dependencias
```
yarn
```
Ahora para correr la aplicación en local ejecutamos
```
yarn run:dev
````
El servidor cuenta con HMR así que no es necesario recargar la página cuando cambiamos algún componente :sunglasses:

### Production
Para crear el paquete de producción ejecutamos
```
yarn build
```
Se crea un directorio `/dist` que contiene todo lo necesario para ser distribuido. Para probar como se vería la app en producción el comando
```
yarn run:prod
```
ejecuta un servidor simple de contenido estatico.

### Deploy
Para hacer el deploy a beta es necesario que tengas instalado `s3cmd`. Para eso ejecutamos
```
pip3 install s3cmd
```
En la raíz del directorio, debes tener un archivo llamado `.env` que exporte las llaves que necesitamos en el deploy.
```
export educalabs_aws_key="EDUCALABAS_ES"
export educalabs_aws_secret="EL_FUTURO"
```
Finalmente ejecutamos el comando
```
yarn deploy:beta
```
Y en beta.tuniversidad.cl encontrarás lo último que se esta desarrollando.
