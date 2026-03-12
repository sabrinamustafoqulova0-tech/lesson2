import React, { useState } from 'react'
import Table from './components/table'
import Adduser from './components/adduser'

const App = () => {
const [data,setData]=useState([
  {
    id: Date.now(),
    name:"Parirukh",
    email:"parirukh@gmail.com",
    job:"IT-Spezialist",
    status:true,
    age:17
  }

])

const [editInputName,setEditInputName]=useState("")
const [editInputAge,setEditInputAge]=useState("")
const [editInputEmail,setEditInputEmail]=useState("")
const [editInputJob,setEditInputJob]=useState("")

const Delete=(id)=>{
  {
    setData(data.filter((elem)=>elem.id!=id))
  }
}
const Checkout = (id) => {
  setData(
    data.map((elem) =>
      elem.id==id ? { ...elem, status: !elem.status } : elem
    )
  )
}


  return (
    <>
      <Adduser data={data} setData={setData}
        editInputAge={editInputAge}
        setEditInputName={setEditInputName}
        editInputName={editInputName}
        setEditInputAge={setEditInputAge}
        editInputEmail={editInputEmail}
        setEditInputEmail={setEditInputEmail}
        editInputJob={editInputJob}
        setEditInputJob={setEditInputJob}
      />

      <table className='w-[80%] m-auto border-collapse'>
        <thead>
          <tr>
            <th className='text-start border p-[10px]'>№</th>
            <th className='text-start border p-[10px]'>Name</th>
            <th className='text-start border p-[10px]'>Age</th>
            <th className='text-start border p-[10px]'>Email</th>
            <th className='text-start border p-[10px]'>Status</th>
            <th className='text-start border p-[10px]'>Job</th>
            <th className='text-start border p-[10px]'>Action</th>
          </tr>
        </thead>

        <tbody>
          <Table setEditInputName={setEditInputName} 
          setEditInputAge={setEditInputAge}
          setEditInputEmail={setEditInputEmail}
          setEditInputJob={setEditInputJob}
          data={data}
           Delete={Delete} 
           Checkout={Checkout}/>
        </tbody>

      </table>
    </>
  )
}

export default App
