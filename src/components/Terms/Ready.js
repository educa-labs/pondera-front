import React from 'react';
import simplePage from '../../hoc/simplePage';

const content = () => (
  <div>
    <legend>Listo!</legend>
    <p>Ya estás registrado en <strong>www.pondera.cl</strong>. Para participar deberás iniciar sesión y ponderar con tus puntajes PSU a partir del 26 de Diciembre a las 8:00.</p>
    <br />
    <p> Los ganadores se anunciarán el 3 de enero en el grupo PSU 2017 de Facebook.</p>
    <br />
    <p>¡Mucha suerte!</p>
  </div>
);

export default simplePage(content);
