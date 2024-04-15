import logo from './logo.svg';
import './App.css';
import Task1F from './Task1/Task1F';
import { useState } from 'react';
import Task1C from './Task1/Task1C';
import Math from './Task2/Math';
import './Task1/Style.css'
function App() {
  const [isUnder, setIsUnder] = useState(false);
  const [isTT, setIsTT] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isBold, setIsBold] = useState(false);

  function toggleTT(){
    setIsTT(!isTT);
  }
  function toggleItalic(){
    setIsItalic(!isItalic);
  }
  function toggleUnder(){
    setIsUnder(!isUnder);
  }
  function toggleBold() {
    setIsBold(!isBold);
  }
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    const body = document.querySelector('body');
    if (darkMode) {
        body.style.backgroundColor = 'rgb(255, 255, 255)';
        body.style.color = 'rgb(0, 0, 0)';
    } else {
        body.style.backgroundColor = 'rgb(30, 30, 30)';
        body.style.color = 'rgb(255, 255, 255)';
    }
};

 
  return (
    <div className="App">
       <Task1F isBold={isBold} ></Task1F>
       <Task1C isBold={isBold} isItalic={isItalic} isTT={isTT} isUnder={isUnder} funcB={toggleBold} funcI={toggleItalic} funcTT={toggleTT} funcU={toggleUnder}></Task1C>

        <br>
        </br>
        <Math ten={10} hundr={100} tf={25}></Math>

        <button onClick={toggleTheme}> </button>
    </div>
  );
}

export default App;
