
import { useState } from "react"
import './index.css'


const NameMaker = () => {


    const [color, setColor] = useState("");
    const [count, setCount] = useState(0);
    const [highScore, setHighScore] = useState(25)
    const [newName, setNewName] = useState('')
    
    const handelChange = (e)=>{
        // e.target.value
        setNewName(e.target.value);

   }
   
   
    // if(count > highScore){
    //     setHighScore(count)
    // }

  return (
    <div>
        <button onClick={()=>setColor("blue")}>Blue</button>
        <button onClick={()=>setColor("red")}>Red</button>
        <button onClick={()=>setColor("green")}>Green</button>
        <p className={color}>The curretn color is {color}</p>
        <p>The count is {count}</p>
        <button onClick={()=> setCount(count+1)}> Add +1</button>
        <p>The score is {highScore} clicks!</p>
        {
            count > highScore ? <p>You beat the high score</p> :<></>
        }
        <input value={newName} onChange={(e)=> handelChange(e)} type="text" />
    </div>
  )
}

export default NameMaker