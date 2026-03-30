import { Button } from '@mui/material'
import React, { useCallback, useState } from 'react'
import Card from './pages/Card'

const App = () => {
  const [count,setCount]=useState(0)
  const [count2,setCount2]=useState(0)

  const handelClick=useCallback(()=>{
    console.log("Clicked");
    
  },[])
  console.log("Parent render");
  
  return (
    <>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>Incremedent1</button>
      <p>{count2}</p>
      <button onClick={()=>setCount2(count2+1)}>Incremedent2</button>
      <Card onnClick={handelClick} count={count}/>
    </>
  )
}

export default App
