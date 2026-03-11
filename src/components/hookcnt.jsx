import React, { useState } from 'react'


const Hookcnt = () => {
const [cnt, setCnt]=useState(0)
const [text, setText]=useState("")
const [data, setData]=useState([cnt])

const hunderPlus=()=>{
    setCnt(cnt+1)

    setData([...data,cnt+1])
}

const hunderMinus=()=>{
    setCnt(cnt-1)
    
    setData([...data,cnt-1])
}
const TextOnchange=(e)=>{
    setText(e.target.value)
}
  return (
    <div className='ml-[40%] text-4xl p-[20px]'>
        <h1 className={`${cnt > 0?"text-emerald-900":"text-red-800"} font-bold`}>{cnt}</h1>
        <button className='border rounded-2xl m-[auto] w-[100px]'
        onClick={hunderPlus}>+</button>
        <button className='border rounded-2xl m-[auto] w-[100px]'
        onClick={hunderMinus}>-</button>
        <input className='border block' type="text"
        onChange={TextOnchange}/>
        <h2>{text}</h2>
        {
        data.map((e)=>{
            return(
                <h1>{e}</h1>
            )
        })
    }
    </div>

  )
}

export default Hookcnt
