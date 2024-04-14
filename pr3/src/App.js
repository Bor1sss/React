import logo from './logo.svg';
import React,{useState} from 'react';
import './App.css';
import Item1 from './TaskIf/Item1';
import Item2 from './TaskIf/Item2';
import Item3 from './TaskIf/Item3';
import Receipt from './Receipt/Receipt';
function App() {
  const [showFirst, setShowFirst] = useState(true);
const [showSecond, setShowSecond] = useState(false);
const [showThird, setShowThird] = useState(true);



const toggleFirst = () => { setShowFirst(!showFirst); };
const toggleSecond = () => { setShowSecond(!showSecond); };
const toggleThird = () => { setShowThird(!showThird); };

let f;
if (showFirst) {
  f = <Item1 onClick={showFirst} />;
}
  return (
    <div className="app-container">

        <Receipt />
        
        {f}
        <div>
 
        <button className="btn" onClick={toggleFirst}>Переключить первое</button>
      </div>
      <div >
      {showSecond ? <Item2 /> : null}
        <button className="btn" onClick={toggleSecond}>Переключить второе</button>
      </div>
      <div >
        {showThird && <Item3 />}
        <button className="btn" onClick={toggleThird}>Переключить третье</button>
      </div>
    </div>
  );
}

export default App;
