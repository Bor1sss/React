import React,{useState} from 'react';

import Show from './Show';



const Math = ({ten,hundr,tf},) => {
    const[value,SetValue]=useState(0);

   

    function Add(val){
        SetValue(value+val);
    }
    function Minus(val){
        SetValue(value-val);
    }
    return (

        <div>
            <Show item={value}></Show>
            <button onClick={()=>Add(1)}>  +1  </button>
            <button onClick={()=>Add(ten)}>  +10  </button>
            <button onClick={()=>Minus(hundr)}>  -100   </button>
            <button onClick={()=>Add(tf)}>  +25   </button>

        </div>

    );
}

export default Math;
