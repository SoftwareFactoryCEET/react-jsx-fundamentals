import { useState } from 'react'
import MyButton from "./components/MyButton.jsx";
import './App.css'

function App(){
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return(
      <>
        <h1>Counters that update together</h1>
          <MyButton count={count} onClick={handleClick}/>
          <MyButton count={count} onClick={handleClick}/>
      </>
    );
}

export default App
