import React from 'react';
import simplePage from '../../hoc/simplePage';

const content = () => (
  <div>
    <legend>
      Soporte
    </legend>
    <p>Si tienes algun problema al momento de crear tu cuenta nos puedes contactar po Facebook o enviar un <a href="mailto:soporte@educalabs.cl">correo electrónico</a></p>
    <br />
    <p>Si olvidaste tu clave, <a href="#">solicita una nueva</a>.</p>
    <br />
    <p>Gracias por usar los porductios de Educalabs.</p>
  </div>
);

export default simplePage(content);
