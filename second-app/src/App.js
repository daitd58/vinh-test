import React from 'react';
import { render } from 'react-dom';

import './index.css';

const App = () => {
  const [count, setCount] = React.useState(0);
  const [active, setActive] = React.useState(false);
  const components = [
      <div>question mot</div>,
      <div>question hai</div>,
      <div>question ba</div>,
      <div>question bon</div>,
      <div>question 5</div>,
      <div>question 6</div>,
      <div>question 7</div>,
      <div>question 8</div>,
  ]
  
 console.log('count: ', count)
  return <div style={{width: '100vw', height: '100vh' ,display: 'flex', flexDirection: 'column', justifyContent: ' center', alignItems: 'center'}}>
      <div className='nav-display'>
        
      </div>
      {components[count]}

      <div className='nav-bar' style={{}}>
        {count > 0 && 
            <button onClick={() => setCount(count - 1)}>prev</button>
        }

        {count < components.length - 1 && <button onClick={() => setCount(count + 1)}>next</button>}
      </div>
  </div>
}
export default App