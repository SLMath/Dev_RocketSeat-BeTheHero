import React from 'react'; // sempre obrigatório

function Header(props) { // para usar propriedades, prop children automática para coletar dados entre tags
  return (
  <header>{props.prop} - {props.children}</header>
  );
}

export default Header; 