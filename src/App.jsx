import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData]=useState([])
  const [trigget, setTrigger]=useState(false)
  let Api="http://localhost:3003/data"

  async function GetUser() {
    try {
      let {data}=await axios.get(Api)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    if(trigget){
      GetUser()
    }
    return()=>{
      setTrigger(true)
    }
  },[trigget])
  return (
    <>
    <div className='flex mx-[100px] flex-wrap gap-14'>
      {
        data.map((e)=>{
          return(
            <div className='p-[20px] text-2xl bg-blue-200 w-[200px] rounded-2xl border-2 border-solid border-blue-400'>
              <h1>{e.name}</h1>
              <h1>{e.age}</h1>       
            </div>
          )
        })
      }
    </div>
    </>
  )
}

export default App
