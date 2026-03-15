import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  let Api="http://localhost:3001/data"
  const [data,setData]=useState([])
  async function GetUser() {
    try {
      const {data}=await axios.get(Api)
      setData(data)
    } catch (error) {
      console.error(error);
      
    }
  }
  async function DeletUser(id) {
    try {
      await axios.delete(`${Api}/${id}`)
      GetUser()
    } catch (error) {
      console.error(error);
      
    }
  }
 async function ChecoutStatus(id) {

  let user=data.find((e)=>e.id==id)
  let updatedUser={
    ...user,
    status:!user.status
  }

  try {
    await axios.put(`${Api}/${id}`, updatedUser)
    GetUser()
  } catch (error) {
    console.error(error)
  }
}
let [nameAdd,setNameAdd]=useState("")
let [ageAdd,setAgeAdd]=useState("")



let [nameAdit,setNameAdit]=useState("")
let [ageAdit,setAgeAdit]=useState("")
let [idx,setIdx]=useState("")


let [search,setSearch]=useState("")
let [select,setSelect]=useState("")


async function AddUser(newUser) {
  try {
    await axios.post(Api,newUser)
    GetUser()
  } catch (error) {
    console.error(error)
  }
}

let hendelAdd=(event)=>{
  event.preventDefault()

  let newUser={
    name:nameAdd,
    age:ageAdd,
    status:false
  }

  AddUser(newUser)
}

async function EditUser(editUser,idx) {

  let user = data.find((e)=>e.id==idx)

  let updatedUser = {
    ...user,
    ...editUser
  }
  try {
    await axios.put(`${Api}/${idx}`,updatedUser)
  } catch (error) {
    console.error(error);
  }
}

let hendelEdit=(event)=>{
  event.preventDefault()
  let editUser={
    name:nameAdit,
    age:ageAdit,
    id:idx
  }
  EditUser(editUser,idx)
}


let EditedUser=(e)=>{
  setNameAdit(e.name)
  setAgeAdit(e.age)
  setIdx(e.id )
}


  useEffect(()=>{
    GetUser()
  },[])


  async function SearchUser(search) {
    try {
      let {data}=await axios.get(`${Api}?name=${search}`)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }

  async function SelectStatus(select) {
    try {
      if(select==""){
        GetUser()
      }
      else{
      let {data}=await axios.get(`${Api}?status=${select}`)
      setData(data)
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <div className='bg-gray-600 pt-10 pb-10'>
    <div className='flex justify-center gap-20'>
      <input value={search} onChange={(e) => {setSearch(e.target.value);SearchUser(e.target.value);}}className='bg-gray-300 rounded-2xl p-[10px]'type="text"placeholder="Search..."/>
  <select value={select} onChange={(e)=>{setSelect(e.target.value);SelectStatus(e.target.value)}} className='bg-gray-300 rounded-2xl p-[10px]'>
        <option value="">All</option>
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>
    </div>
    <div className='flex justify-center gap-[100px]'>
    <form onSubmit={hendelAdd} className='bg-gray-400 p-[20px] m-[20px] flex flex-col rounded-2xl gap-[20px] w-[300px]'>
      <input value={nameAdd} onChange={(e)=>setNameAdd(e.target.value)} className='bg-gray-300 rounded-2xl p-[10px]' type="text" placeholder='Name...' />
      <input value={ageAdd} onChange={(e)=>setAgeAdd(e.target.value)} className='bg-gray-300 rounded-2xl p-[10px]' type="text" placeholder='Age...' />
      <button type='submit' className='bg-gray-600 text-white rounded-2xl p-[10px]'>Add</button>
    </form>

    <form onSubmit={hendelEdit} className='bg-gray-400 p-[20px] m-[20px] flex flex-col rounded-2xl gap-[20px] w-[300px]'>
      <input value={nameAdit} onChange={(e)=>setNameAdit(e.target.value)} className='bg-gray-300 rounded-2xl p-[10px]' type="text" placeholder='Name...' />
      <input value={ageAdit} onChange={(e)=>setAgeAdit(e.target.value)} className='bg-gray-300 rounded-2xl p-[10px]' type="text" placeholder='Age...' />
      <button type='submit' className='bg-gray-600 text-white rounded-2xl p-[10px]'>Edit</button>
    </form>
    </div>

      <div className='flex justify-center flex-wrap gap-[40px] mx-[100px]'>
        {
          data.map((e)=>{
            return(
              <div key={e.id}  className='w-[300px] p-[20px] bg-gray-300 border-2 rounded-2xl border-gray-400' >
                <h1 className='text-2xl'>{e.name}</h1>
                <h1>{e.age}</h1>
                <p className={`${e.status?"text-green-700":"text-orange-600"}`}>{e.status?"Active":"Inactive"}</p>
                <button onClick={()=>DeletUser(e.id)} >🗑️</button>
                <button onClick={()=>EditedUser(e)} >✒️</button>
                <input onChange={()=>ChecoutStatus(e.id)} checked={e.status} type="checkbox" />
              </div>
            )
          })
        }
      </div>
      </div>
    </>
  )
}

export default App
