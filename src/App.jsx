import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from '@mui/material'

const App = () => {
  
  let Api='http://37.27.29.18:8001/api/to-dos' 
  let apiImage='http://37.27.29.18:8001/images' 
  let apistatus='http://37.27.29.18:8001' 
    let [data, setData] = useState([])
    let [name, setName] = useState("")
    let [description, setDescription] = useState("")
    let [idx, setIdx] = useState(null)

    async function GetUser() {
    try {
      let { data } = await axios.get(Api);
      setData(data.data);
    } catch (error) {
      console.error(error.response.data.error);
    }
  }

  async function DeletUser(id) {
    try {
      await axios.delete(`${Api}?id=${id}`)
      GetUser()
    } catch (error) {
      console.error(error.response.data.error);
      
    }
  }

  async function CheckedStatus(id) {
    try {
      await axios.put(`${apistatus}/completed?id=${id}`)
      GetUser()
    } catch (error) {
      console.error(error.response.data.error);
    }
  }

  async function AddData(formData) {
    try {
      await axios.post(Api,formData)
      GetUser()
    } catch (error) {
      console.error(error.response.data.error);
      
    }
  }
  let handelAdd=(event)=>{
    event.preventDefault()
    let formData= new FormData()
    formData.append("Images",event.target["images"].files[0])
    formData.append("Name",event.target["name"].value)
    formData.append("Description",event.target["description"].value)

    AddData(formData)
  }

  async function EditData(edited) {
    try {
      await axios.put(Api,edited)
      GetUser()
    } catch (error) {
      console.error(error.response.data.error);
    }
  }

  let handelEdit=(event)=>{
    event.preventDefault()
    let edited={
      name: name,
      description: description,
      id: idx
    }
    EditData(edited,idx)
  }
  let EditedClick=(e)=>{
    setName(e.name),
    setDescription(e.description)
    setIdx(e.id)
  }


  useEffect(() => {
    GetUser();
  }, []);

  return (
    <>
    <form className='flex flex-col gap-3 p-[40px] border-1 w-[300px] border-fuchsia-600 rounded-4xl ' onSubmit={handelAdd}>
      <input className='border p-[10px] rounded-2xl' type="text" name='name' placeholder='Name' />
      <input className='border p-[10px] rounded-2xl' type="text" name='description' placeholder='Description' />
      <input className='border p-[10px] rounded-2xl' type="file" name='images' />
      <button className='border-1  border-fuchsia-600 rounded-4xl' type='submit'>Submit</button>
    </form>
    
    <form className='flex flex-col gap-3 p-[40px] border-1 w-[300px] border-fuchsia-600 rounded-4xl ' onSubmit={handelEdit}>
      <input value={name} onChange={(e)=>{setName(e.target.value)}} className='border p-[10px] rounded-2xl' type="text"  placeholder='Name' />
      <input value={description} onChange={(e)=>{setDescription(e.target.value)}} className='border p-[10px] rounded-2xl' type="text"  placeholder='Description' />
      <button className='border-1  border-fuchsia-600 rounded-4xl' type='submit'>SubmitEdit</button>
    </form>
    <div className='flex gap-5 items-center '>
    {
      data.map((e)=>{
        return(
          <>
          <div className='p-[20px] border rounded-2xl h-[300px]'>
          <p>{e.name}</p>
          <p>{e.isCompleted?"Acnive":"Inactine"}</p>
            {
              e.images.map((img)=>{
                return(
                  <img className='w-[150px] h-[150px]' src={`${apiImage}/${img.imageName}`} alt="" />
                )
              })
            }
            <Button onClick={()=>DeletUser(e.id)} sx={{color:"red"}}>
              Delete
            </Button>
            <Button onClick={()=>EditedClick(e)} sx={{color:"blue"}}>
              Edit
            </Button>
            <input onChange={()=>CheckedStatus(e.id)} checked={e.isCompleted} type="checkbox" />
          </div>
          </>
        )
      })
    }
    </div>
    </>
  )
}

export default App
