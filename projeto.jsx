import React, { useState } from 'react';

function Counter() {
  // Definindo o estado 'count' com valor inicial 0 e a função para atualizá-lo 'setCount'
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)}>Incrementar</button>
      <button onClick={() => setCount(count - 1)}>Decrementar</button>
    </div>
  );
}

export default Counter;
