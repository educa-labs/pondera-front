import React from 'react';
import simplePage from '../../hoc/simplePage';

const content = () => (
  <div>
    <legend>Bienvenido a pondera.cl</legend>
    <p>
      Te agradecemos que uses los productos servicios (en adelante, “servicios”) de Soluciones Educativas Educalabs Ltda. (En adelante “Educalabs”), cuyo domicilio social está ubicado en Col y Pi 124-A, Providencia, Santiago, Chile.
    </p>
    <br />
    <p>
      El uso de nuestros servicios implica la aceptación de las siguientes condiciones. El uso de nuestros servicios no te convierte en titular de ninguno de los derechos de propiedad intelectual de los mismos ni del contenido al que accedas. No se te otorga el derecho de usar marcas ni logotipos pertenecientes a nuestros servicios. No elimines ni alteres los avisos legales que se muestran en nuestros. Este contenido es responsabilidad exclusiva de la entidad que lo haya puesto a disposición. En relación con nuestros servicios, podemos enviarte avisos de servicio, mensajes administrativos y otros tipos de información.
    </p>
    <legend>
      Políticas de privacidad
    </legend>
    <p>
      Las políticas de privacidad explican el tratamiento de los datos personales y la protección de la privacidad al usar nuestros servicios. Al ingresar contenido dentro de nuestros servicios, sigues siendo el titular de los derechos de propiedad intelectual que tengas sobre ese contenido. Al aceptar estos términos y condiciones, Educalabs puede utilizar de diversas maneras tanto la información personal que proporciones al crear tu cuenta como la información que ingreses una vez dentro de alguno de nuestros servicios. Es decir, que nos concedes una licencia para usar, alojar, almacenar, reproducir, modificar o vender dicha información y contenidos. El uso de esta información será netamente con el fin de mejorar los servicios ya disponibles y hacer de ellos una mejor experiencia.
    </p>
    <legend>Acerca de estas condiciones</legend>
    <p>
      Educalabs puede modificar estas condiciones en cualquier momento, siempre que notifique a los usuarios de los servicios sobre dichos cambios. Todo lo anterior aplica únicamente en Chile y no a nivel global. Para mayor información contáctanos al +56977170168 o a contacto@educalabs.cl.
    </p>
  </div>
);

export default simplePage(content);
