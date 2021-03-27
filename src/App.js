import React, {useState} from 'react';
import './App.css'

const App = () => {
  const [count, setCount] = useState(0)
  return(
    <div className="App">
    <header>
    <h1>Counter App using State/Hooks</h1>
    </header>
    <h2>Current value of Count is: {count}</h2>
    <button onClick={() => (setCount(0))}>Reset</button>
    <button onClick={() => (setCount(count+1))}>Increase</button>
    <button onClick={() => (setCount(count-1))}>Decrease</button>
    </div>
  )
}
export default App;