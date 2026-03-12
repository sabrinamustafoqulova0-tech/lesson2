import React, { useState } from 'react'

const App = () => {
let [data,setData]=useState([
  {
    id:"1",
    name:"Sabrina",
    age:17,
    status:false,
  },
  {
    id:"2",
    name:"Pari",
    age:17,
    status:true,
  } 
])

const [search, Setsearch]=useState("")
const [select, Setselect]=useState("")
const [nameEdit, SetNameEdit]=useState("")
const [ageEdit, SetAgeEdit]=useState("")
const [idx, SetIdx]=useState(null)
const [statusEdit, SetStatusEdit]=useState(null)
const hundelSubmit=(event)=>{
  event.preventDefault()
  const obj={
    name:nameEdit,
    id:idx,
    age:ageEdit,
    status:statusEdit
  }
  setData(data.map((e)=>e.id==idx?obj:e))
  SetNameEdit("")
  SetAgeEdit("")
}
let ShowEdit=(e)=>{
  SetNameEdit(e.name)
  SetAgeEdit(e.age)
  SetIdx(e.id)
  SetStatusEdit(e.status)
}
function DeletUser(id){
  setData(data.filter((e)=>e.id!=id))
}
function Checked(id){
  setData(
    data.map((elem) =>
      elem.id==id ? { ...elem, status: !elem.status } : elem)
)
}



  return (
    <>
    <select value={select} onChange={(e)=>Setselect(e.target.value)}>
      <option value="">All</option>
      <option value="true">Active</option>
      <option value="false">Inacrive</option>
    </select>
    <input value={search} onChange={(e)=>Setsearch(e.target.value)} type="search" className='border p-2 rounded-2xl'/>
  <form onSubmit={hundelSubmit} className='flex flex-col w-[300px] p-[30px] gap-[10px]'>
    <input value={nameEdit} onChange={(e)=>SetNameEdit(e.target.value)} className='border p-2 rounded-2xl' type="text"  />
    <input value={ageEdit} onChange={(e)=>SetAgeEdit(e.target.value)} className='border p-2 rounded-2xl' type="text"  />
    <button>Submit</button>
  </form>

      <table className='w-[80%] m-auto border-collapse'>
        <thead>
          <tr>
            <th className='border p-[10px] text-start'>Id</th>
            <th className='border p-[10px] text-start'>Name</th>
            <th className='border p-[10px] text-start'>Age</th>
            <th className='border p-[10px] text-start'>Status</th>
            <th className='border p-[10px] text-start'>Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            
            data.filter((e)=>select=="true"?e.status:select=="false"?!e.status:e)
            .filter((e)=>e.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))
            .map((e,i)=>{
              return(

              <>

              <tr>
              <td className='border p-[10px]'>{i+1}</td>
              <td className='border p-[10px]'>{e.name}</td>
              <td className={`${e.status?"text-green-700":"text-rose-700"} border p-[10px]`}>{e.status?"Active":"Inactive"}</td>
              <td className='border p-[10px]'>{e.age}</td>
              <td className='border p-[10px]'>
              <button onClick={()=>DeletUser(e.id)}>🗑️</button>
              <button onClick={()=>ShowEdit(e)}>✏️</button>
              <input onClick={()=>Checked(e.id)} checked={e.status} type="checkbox" name="" id="" />
              </td>
              </tr>
              </>
              )
              
            })
          }
        </tbody>
      </table>


      
    </>
  )
}

export default App
