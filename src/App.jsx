import React, { useState } from 'react'
const App = () => {
  
let [data,SetData]=useState([
  {
    id:"1",
    name:"Ahdiya",
    age:13,
    status:true,
    job:"Frondtend"
  },
  {
    id:"2",
    name:"Safiya",
    age:16,
    status:true,
    job:"Backend"
  },
  {
    id:"3",
    name:"Zevara",
    age:19,
    status:true,
    job:"Fullsrack"
  }
])
let hemdelAdd=(event)=>{
  event.preventDefault()
  let obj={
    name:event.target["inpName"].value,
    age:event.target["inpAge"].value,
    job:event.target["inpJob"].value
  }
  SetData([...data,obj])
}
let ShowUser=(e)=>{
  SetIdx(e.id)
  SetNameEdit(e.name)
  SetAgeEdit(e.age)
  SetJobEdit(e.job)
  SetStatusEdit(e.status)
}

let [idx,SetIdx]=useState("")
let [nameEdit,SetNameEdit]=useState("")
let [ageEdit,SetAgeEdit]=useState("")
let [jobEdit,SetJobEdit]=useState("")
let [statusEdit,SetStatusEdit]=useState("")
let [search,SetSearch]=useState("")
let [select,SetSelect]=useState("")

let hundelEdd=(event)=>{
  event.preventDefault()
  let object={
    id:idx,
    name:nameEdit,
    age:ageEdit,
    job:jobEdit,
    status:statusEdit
  }
  SetData(data.map((e)=>e.id==idx?object:e))
  SetIdx("")
  SetNameEdit("")
  SetAgeEdit("")
  SetJobEdit("")
  SetStatusEdit("")
}
function DeletUser(id){
  SetData(data.filter((e)=>e.id!=id))
}
function Checkbox(id){
  SetData(data.map((e)=>e.id==id?{...e, status:!e.status}:e))
}
  return (
    <>
    <div className='flex justify-center gap-[100px]'>
      <input value={search} onChange={(e)=>SetSearch(e.target.value)} className='border p-[6px] rounded-[10px] bg-white' type="search" />
      <select value={select} onChange={(e)=>SetSelect(e.target.value)} className='border p-[6px] rounded-[10px] bg-white'>
        <option value="">All</option>
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>
    </div>
    <div className='flex justify-center gap-[100px] m-[20px]'>
      <form onSubmit={hemdelAdd} className='flex flex-col gap-[10px] p-[30px] rounded-2xl bg-blue-300'>
        <input name='inpName' className='border p-[6px] rounded-[10px] bg-white' type="text"  />
        <input name='inpAge' className='border p-[6px] rounded-[10px] bg-white' type="text"  />
        <input name='inpJob' className='border p-[6px] rounded-[10px] bg-white' type="text"  />
        <button type='submit' className=' p-[6px] rounded-[10px] bg-blue-500 text-white' >Add</button>
      </form>
      
      <form onSubmit={hundelEdd} className='flex flex-col gap-[10px] p-[30px] rounded-2xl bg-blue-300'>
        <input value={nameEdit} onChange={(e)=>SetNameEdit(e.target.value)} className='border p-[6px] rounded-[10px] bg-white' type="text"  />
        <input value={ageEdit} onChange={(e)=>SetAgeEdit(e.target.value)} className='border p-[6px] rounded-[10px] bg-white' type="text"  />
        <input value={jobEdit} onChange={(e)=>SetJobEdit(e.target.value)} className='border p-[6px] rounded-[10px] bg-white' type="text"  />
        <button type='submit' className=' p-[6px] rounded-[10px] bg-blue-500 text-white' >Edit</button>
      </form>
    </div>


    <table className='w-[60%] m-auto border border-collapse' >
      <thead>
        <tr>
          <th className='border p-[10px]'>Name</th>
          <th className='border p-[10px]'>Age</th>
          <th className='border p-[10px]'>Status</th>
          <th className='border p-[10px]'>Job</th>
          <th className='border p-[10px]'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          data.filter((e)=>select=="true"?e.status:select=="false"?!e.status:e)
          .filter((e)=>e.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
          .map((e)=>{
            return <>
            <tr>
              <td className='border p-[5px]'>{e.name}</td>
              <td className='border p-[5px]'>{e.age}</td>
              <td className={`${e.status?"text-emerald-600":"text-red-600"} border border-black p-[5px]`}>{e.status?"Active":"Inactive"}</td>
              <td className='border p-[5px]'>{e.job}</td>
              <td className='border p-[5px]'>
                <button onClick={()=>DeletUser(e.id)} >🗑️</button>
                <button  onClick={()=>ShowUser(e)}>✒️</button>
                <input checked={e.status} onClick={()=>Checkbox(e.id)} type="checkbox" />
              </td>
            </tr>
            </>
          })
        }
      </tbody>
    </table>
  </>
  )
}

export default App
