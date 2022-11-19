

import React from 'react';
import { render } from 'react-dom';



const Question = () => {
  const [count, setCount] = React.useState(0);

  const components = [
      <div>question 1</div>,
      <div>question 2</div>,
      <div>question 3</div>,
      <div>question 4</div>
  ]

  return <div>
      {
          components[count]
      }

      {count > 0 && 
          <button onClick={() => setCount(count - 1)}>prev</button>
      }

      {count < components.length - 1 && <button onClick={() => setCount(count + 1)}>next</button>}
  </div>
}

export default Question