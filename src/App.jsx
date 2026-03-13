import React, {  useState } from 'react'

const App = () => {
  const [data,SetData]=useState([
    {
      name:"Samira",
      age:"12",
      id:"1",
      status:true
    },
    {
      name:"Madina",
      age:"18",
      id:"2",
      status:true
    },
    {
      name:"Zarina",
      age:"11",
      id:"3",
      status:true
    },
    {
      name:"Sabrins",
      age:"17",
      id:"4",
      status:true
    }
  ])
  let hendelAdd=(event)=>{
    event.preventDefault()
    let object={
      name:event.target["inpName"].value,
      age:event.target["inpAge"].value
    }
    SetData([...data,object])
  }



  let hendelEdit=(event)=>{
    event.preventDefault()
    let obj={
      id:idx,
      name:nameEdit,
      age:ageEdit,
      status:statusEdit
    }
    SetData(data.map((e)=>e.id==idx?obj:e))
    SetNameEdit("")
    SetAgeEdit("")
  }

  let [idx,SetIdx]=useState(null)
  let [nameEdit,SetNameEdit]=useState("")
  let [ageEdit,SetAgeEdit]=useState("")
  let [statusEdit,SetStatusEdit]=useState("")

  let ShowUser=(e)=>{
    SetIdx(e.id)
    SetNameEdit(e.name)
    SetAgeEdit(e.age)
    SetStatusEdit(e.status)
  }
  
  let [search,SetSearch]=useState("")
  let [select,SetSelect]=useState("")

  function DeletUser(id){
    SetData(data.filter((e)=>e.id!=id))
  }

  function Checkout(id){
    SetData(data.map((e)=>e.id==id?{...e,status:!e.status}:e))
  }



  return (
    <>
    <div className='flex gap-[100px] m-[50px] justify-center'>
      <input value={search} onChange={(e)=>SetSearch(e.target.value)} className='p-2 border rounded-[10px]' type="search" placeholder='Search'/>
    <select value={select} onChange={(e)=>SetSelect(e.target.value)}className='p-2 border rounded-[10px]'>
      <option value="">All</option>
      <option value="true">Active</option>
      <option value="false">Inactive</option>
    </select>
    </div>
    <div className='flex gap-[100px] m-[50px] justify-center'>
    <form onSubmit={hendelAdd} className='flex flex-col gap-2 bg-gray-300 rounded-2xl p-[20px] w-[400px]'>
      <input  className='p-2 border rounded-[10px]' name='inpName' type="text" />
      <input  className='p-2 border rounded-[10px]' name='inpAge' type="text" />
      <button type='submit' className='p-2 border rounded-[10px] font-bold bg-gray-400'>Save</button>
    </form>


    <form onSubmit={hendelEdit} className='flex flex-col gap-2 bg-gray-300 rounded-2xl p-[20px] w-[400px]'>
      <input value={nameEdit} onChange={(e)=>SetNameEdit(e.target.value)} className='p-2 border rounded-[10px]' type="text" />
      <input value={ageEdit} onChange={(e)=>SetAgeEdit(e.target.value)} className='p-2 border rounded-[10px]' type="text" />
      <button type='submit' className='p-2 border rounded-[10px]  bg-gray-400 font-bold'>Edit</button>
    </form>
    </div>



    <table className='border-collapse w-[60%] m-auto '>
      <thead>
        <tr>
          <th className='p-[5px] border'>Name</th>
          <th className='p-[5px] border'>Age</th>
          <th className='p-[5px] border'>Status</th>
          <th className='p-[5px] border'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          data.filter((e)=>select=="true"?e.status:select=="false"?!e.status:e)
          .filter((e)=>e.name.toLocaleLowerCase().includes(search.trim().toLocaleLowerCase()))
          .map((e,i)=>{
            return(
              <tr key={i}>
                <td className='p-[5px] border'>{e.name}</td>
                <td className='p-[5px] border'>{e.age}</td>
                <td className={`${e.status?"text-green-900":"text-red-700"} p-[5px] border`}>{e.status?"Active":"Inactive"}</td>
                <td className='p-[5px] border'>
                  <button onClick={()=>DeletUser(e.id)}>🗑️</button>
                  <button onClick={()=>ShowUser(e)}>✒️</button>
                  <input onClick={()=>Checkout(e.id)} checked={e.status} type="checkbox"  />
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
    </>
  )
}

export default App
