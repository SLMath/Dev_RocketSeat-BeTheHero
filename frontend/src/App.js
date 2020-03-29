import React, { useState } from 'react';// sempre obrigatório

import Header from './Header';// Sempre primeira letra maiuscula

// Componente do REACT: funcao que retorna HTML (chamado de JSX = JavaScript XML)
function App() {
  // Estado = variável que representa dado(s) renderizado(s), permitindo atualizaçao automatica da pagina
  // OBS.: Uma variavel usual não altera o valor exibido
  const [counter, setCounter] = useState(0); // retorna [valor, funcao de alteracao]

  function increment(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header prop="Title">
        Subtitle<br/>
        Contador: {counter}
      </Header>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
} 

export default App; 