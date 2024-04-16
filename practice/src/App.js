import logo from './logo.svg';
import './App.css';
import Task1F from './Task1/Task1F';
import { useState } from 'react';
import Task1C from './Task1/Task1C';
import Math from './Task2/Math';
import './Task1/Style.css'
import Form1 from './TASKPRACTICE2/Form1';
import Posts from './TASKPRACTICE2/Posts';



function App() {
  const [isUnder, setIsUnder] = useState(false);
  const [isTT, setIsTT] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isBold, setIsBold] = useState(false);

  const [darkTheme, setDark] = useState(false);
  const handleCheck = () => {
    setDark(!darkTheme);
    toggleTheme();
  };


  


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


  
  const toggleTheme = () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    body.classList.toggle('dark-mode');
};

 
  return (
    <div className="App" >
       {/* <Task1F isBold={isBold} ></Task1F> */}
        <Task1C isBold={isBold} isItalic={isItalic} isTT={isTT} isUnder={isUnder} funcB={toggleBold} funcI={toggleItalic} funcTT={toggleTT} funcU={toggleUnder}></Task1C>

        <br>
        </br>
        <Math ten={10} hundr={100} tf={25}></Math>


{/* <Posts></Posts> */}
        {/* <button onClick={toggleTheme}>darkMode </button>
         */}

                
        <div class="checkbox-wrapper-5">
          <div class="check">
            <input id="check-5" type="checkbox"   
            checked={darkTheme}
            onChange={handleCheck}/>
            <label for="check-5"></label>
          </div>
        </div>

         <Form1></Form1>
    </div>
  );
}

export default App;
