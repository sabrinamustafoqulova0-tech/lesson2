import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  let Api="http://localhost:3002/user"
  let [data,setData]=useState([])

  async function GetUser() {
    try {
      let {data}=await axios.get(Api)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }
  let [inpImg,setInpImg]=useState("")
  let [inpName,setInpName]=useState("")
  let [inpEmail,setInpEmail]=useState("")
  let [inpnAge,setInpAge]=useState("")
  let [inpJob,setInpJob]=useState("")


  
  let [idx,setIdx]=useState("")
  let [inpImgEdit,setInpImgEdit]=useState("")
  let [inpNameEdit,setInpNameEdit]=useState("")
  let [inpEmailEdit,setInpEmailEdit]=useState("")
  let [inpnAgeEdit,setInpAgeEdit]=useState("")
  let [inpJobEdit,setInpJobEdit]=useState("")


  let [search,setSearch]=useState("")
  let [select,setSelect]=useState("")


  async function AddUser(newUser) {
    try {
      await axios.post(Api,newUser)
      GetUser()
    } catch (error) {
      console.error(error);
    }
  }

  let hundelAdd=(event)=>{
    event.preventDefault()
    let newUser={
      img:inpImg,
      name:inpName,
      email:inpEmail,
      age:inpnAge,
      job:inpJob
    }
    AddUser(newUser)
  }

  async function EditUser(edited,idx){
    let peshina=data.find((e)=>e.id==idx)

    let izminonnoe={
      ...peshina,
      ...edited
    } 

    try {
      await axios.put(`${Api}/${idx}`,izminonnoe)
      GetUser()
    } catch (error) {
      console.error(error);
    }
  }
  let EditClickUser=(e)=>{
    setIdx(e.id)
    setInpAgeEdit(e.age)
    setInpNameEdit(e.name)
    setInpEmailEdit(e.email)
    setInpJobEdit(e.job)
    setInpImgEdit(e.img)
  }

  let hundelEddit=(event)=>{
    event.preventDefault()
    let edited={
      img:inpImgEdit,
      name:inpNameEdit,
      email:inpEmailEdit,
      age:inpnAgeEdit,
      job:inpJobEdit,
      id:idx
    }
    EditUser(edited,idx)
  }

  async function DeletUser(id) {
    try {
      await axios.delete(`${Api}/${id}`)
      GetUser()
    } catch (error) {
      console.error(error); 
    }
  }

  async function CheckedStatus(id) {
    let peshina=data.find((e)=>e.id==id)
    
    let izminonnoe={
      ...peshina,
      status:!peshina.status
    } 
    try {
      await axios.put(`${Api}/${id}`,izminonnoe)
      GetUser()
    } catch (error) {
      console.error(error);
    }
  }


  async function SearchUser(search) {
    if(search==""){
      GetUser()
    }
    else{
    try {
      let {data}=await axios.get(`${Api}?name=${search}`)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }
  }

  
  async function SelectStatus(select) {
    if(select==""){
      GetUser()
    }
    else{
    try {
      let {data}=await axios.get(`${Api}?status=${select}`)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }
  }



   useEffect(()=>{
    GetUser()
  },[])
  




  return (
    <>
    <div className='flex justify-center gap-20 my-[10px]'>
      <input value={search} onChange={(e)=>{setSearch(e.target.value);SearchUser(e.target.value);}} className='border p-[10px]  bg-gray-200 rounded-[5px]' type="search" placeholder='🔎 Search' />
      <select value={select} onChange={(e)=>{setSelect(e.target.value);SelectStatus(e.target.value)}} className='border p-[10px]  bg-gray-200 rounded-[5px]'>
        <option value="">All</option>
        <option value="true">Active</option>
        <option value="false">Inactive</option>
      </select>
    </div>
    <div className='flex justify-center gap-20'>
    <form onSubmit={hundelAdd} className='flex flex-col p-[20px] rounded-2xl bg-cyan-900 w-[300px] gap-3 '>
      <input value={inpImg} onChange={(e)=>setInpImg(e.target.value)} className='border p-[10px]  bg-gray-200 rounded-[5px]' type="text" placeholder='Img...' />
      <input value={inpName} onChange={(e)=>setInpName(e.target.value)} className='border p-[10px]  bg-gray-200 rounded-[5px]' type="text" placeholder='Name...' />
      <input value={inpEmail} onChange={(e)=>setInpEmail(e.target.value)} className='border p-[10px]  bg-gray-200 rounded-[5px]' type="text" placeholder='Email...' />
      <input value={inpnAge} onChange={(e)=>setInpAge(e.target.value)} className='border p-[10px]  bg-gray-200 rounded-[5px]' type="text" placeholder='Age...' />
      <input value={inpJob} onChange={(e)=>setInpJob(e.target.value)} className='border p-[10px]  bg-gray-200 rounded-[5px]' type="text" placeholder='Job...' />
      <button className='border p-[10px] bg-gray-700 rounded-[5px] text-white font-bold' type='submit'>Add</button>
    </form>

    
    <form onSubmit={hundelEddit} className='flex flex-col p-[20px] rounded-2xl bg-cyan-900 w-[300px] gap-3'>
      <input value={inpImgEdit} onChange={(e)=>setInpImgEdit(e.target.value)} className='border p-[10px]  bg-gray-200 rounded-[5px]' type="text" placeholder='Img...' />
      <input value={inpNameEdit} onChange={(e)=>setInpNameEdit(e.target.value)} className='border p-[10px]  bg-gray-200 rounded-[5px]' type="text" placeholder='Name...' />
      <input value={inpEmailEdit} onChange={(e)=>setInpEmailEdit(e.target.value)} className='border p-[10px]  bg-gray-200 rounded-[5px]' type="text" placeholder='Email...' />
      <input value={inpnAgeEdit} onChange={(e)=>setInpAgeEdit(e.target.value)} className='border p-[10px]  bg-gray-200 rounded-[5px]' type="text" placeholder='Age...' />
      <input value={inpJobEdit} onChange={(e)=>setInpJobEdit(e.target.value)} className='border p-[10px]  bg-gray-200 rounded-[5px]' type="text" placeholder='Job...' />
      <button className='border p-[10px] bg-gray-700 rounded-[5px] text-white font-bold' type='submit'>Edit</button>
    </form>
    </div>


    <table className='w-[80%] m-auto mt-[10px] border-collapse  mb-[40px]'>
      <thead className='bg-cyan-900 text-white'>
        <tr>
          <th className='p-[10px] text-[18px] border-black border-1 border-solid text-start'>User</th>
          <th className='p-[10px] text-[18px] border-black border-1 border-solid text-start'>Name</th>
          <th className='p-[10px] text-[18px] border-black border-1 border-solid text-start'>Age</th>
          <th className='p-[10px] text-[18px] border-black border-1 border-solid text-start'>Job</th>
          <th className='p-[10px] text-[18px] border-black border-1 border-solid text-start'>Status</th>
          <th className='p-[10px] text-[18px] border-black border-1 border-solid text-start'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((user)=>{
            return(
            <tr>
              <td className='border p-2 bg-gray-200'>
                <div className='flex gap-3 items-center'>
                <img className='rounded-[50%] w-[50px]' src={user.img} alt="" />
                <p className='text-gray-600'>{user.email}</p>
                </div>
              </td>
              <td className='border p-2 bg-gray-200'>{user.name}</td>
              <td className='border p-2 bg-gray-200'>{user.age}</td>
              <td className='border p-2 bg-gray-200'>{user.job}</td>
              <td className={`${user.status?"text-green-600":"text-red-600"} bg-gray-200 border-1 border-black p-2`}>{user.status?"Active":"Inactive"}</td>
              <td className='border p-2 bg-gray-200'>
                <div className='flex gap-3 items-center'>
                <button onClick={()=>DeletUser(user.id)} >🗑️</button>
                <button onClick={()=>EditClickUser(user)}>✒️</button>
                <input onChange={()=>CheckedStatus(user.id)} checked={user.status} type="checkbox" />
                </div>
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
