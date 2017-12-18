import React from 'react';
import simplePage from '../../hoc/simplePage';

const content = () => (
  <div>
    <legend>
      Soporte
    </legend>
    <p>Si tienes algun problema al momento de crear tu cuenta nos puedes contactar por Facebook o enviar un <a href="mailto:soporte@educalabs.cl">correo electrónico</a>.</p>
    <br />
    <p>Gracias por usar los productos de Educalabs.</p>
  </div>
);

export default simplePage(content);
