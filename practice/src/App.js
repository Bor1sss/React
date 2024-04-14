import logo from './logo.svg';
import './App.css';
import Task1F from './Task1/Task1F';
import { useState } from 'react';
import Task1C from './Task1/Task1C';
function App() {
  const [isBold, setIsBold] = useState(false);

  function toggleBold() {
    setIsBold(!isBold);
  }

  return (
    <div className="App">
       <Task1F isBold={isBold} func={toggleBold}></Task1F>
        <Task1C  isBold={isBold} func={toggleBold}></Task1C>
    
    </div>
  );
}

export default App;
