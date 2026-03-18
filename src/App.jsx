import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import Checkbox from '@mui/material/Checkbox';



import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';




import axios from 'axios';

let Api="http://localhost:3002/data"


const App = () => {
  let [data,setData]=useState([])

  let [inpImg,setInpImg]=useState("")
  let [inpName,setInpName]=useState("")
  let [inpAge,setInpAge]=useState("")
  let [inpJob,setInpJob]=useState("")

  let [inpImgEdit,setInpImgEdit]=useState("")
  let [inpNameEdit,setInpNameEdit]=useState("")
  let [inpAgeEdit,setInpAgeEdit]=useState("")
  let [inpJobEdit,setInpJobEdit]=useState("")
  let [idx,setIdx]=useState(null)


  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);



  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  


  async function AddUser(newUser) {
    try {
      await axios.post(Api,newUser)
      GetUser()
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let newUser={
      img:inpImg,
      name:inpName,
      age:inpAge,
      job:inpJob
    }
    AddUser(newUser)
    handleClose();
  };

  async function EditUser(editedUser,idx) {
    let peshina=data.find((e)=>e.id==idx)
    let izmenitkardagi={
      ...peshina,
      ...editedUser
    }
    try {
      await axios.put(`${Api}/${idx}`,izmenitkardagi)
      GetUser()
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmitEdit=(event)=>{
    event.preventDefault();
    let editedUser={
      img:inpImgEdit,
      name:inpNameEdit,
      age:inpAgeEdit,
      job:inpJobEdit,
      id:idx
    }
    EditUser(editedUser,idx)
  }



async function GetUser() {
  try {
    let {data}=await axios.get(Api)
    setData(data)
  } catch (error) {
    console.error(error);
  }
}

async function InfoUser(e) {
  let peshinaUser=data
}

let EditedUser=(e)=>{
  setInpImgEdit(e.img),
  setInpNameEdit(e.name),
  setInpAgeEdit(e.age),
  setInpJobEdit(e.job),
  setIdx(e.id)
  setOpenEdit(true)
}

async function DeletUser(id) {
  try {
    await axios.delete(`${Api}/${id}`)
    GetUser()
  } catch (error) {
    console.error(error);
  }
}

async function ChechboxStatus(idx) {
    let peshina=data.find((e)=>e.id==idx)
    let izmenitstatus={
      ...peshina,
      status:!peshina.status
    }
  try {
    await axios.put(`${Api}/${idx}`,izmenitstatus)
    GetUser()
  } catch (error) {
    console.error(error);
  }
}

async function Search(text) {
  try {
    if(text==""){
      GetUser()
    }
    else{
    let {data}=await axios.get(`${Api}?name=${text}`)
    setData(data)
    }
  } catch (error) {
    console.error(error);
  }
}

async function SelectStatus(textstatus) {
  try {
    let {data}=await axios.get(`${Api}?status=${textstatus}`)
    setData(data)
  } catch (error) {
    console.error(error);
  }
}

useEffect(()=>{
  GetUser()
},[])

  return (
    <>
    <div className='flex mx-[300px] mt-[40px] gap-7'>
     <Button variant="outlined" onClick={handleClickOpen}>
        AddUser
      </Button>
      <TextField onChange={(e)=>Search(e.target.value)} label="Search"  />
        <Select
          onChange={(e)=>SelectStatus(e.target.value)}
          label="Age"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value={true}>Active</MenuItem>
          <MenuItem value="false">Inacrive</MenuItem>
        </Select>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your img, name, age, job address here. We
            will send updates occasionally.
          </DialogContentText>
          <form className='flex flex-col gap-2' onSubmit={handleSubmit} id="subscription-form">
            <input className='border p-[10px] rounded-2xl' value={inpImg} onChange={(e)=>setInpImg(e.target.value)} type="text" placeholder='Img...'/>
            <input className='border p-[10px] rounded-2xl' value={inpName} onChange={(e)=>setInpName(e.target.value)} type="text" placeholder='Name...'/>
            <input className='border p-[10px] rounded-2xl' value={inpAge} onChange={(e)=>setInpAge(e.target.value)} type="text" placeholder='Age...'/>
            <input className='border p-[10px] rounded-2xl' value={inpJob} onChange={(e)=>setInpJob(e.target.value)} type="text" placeholder='Job...'/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Add
          </Button>
        </DialogActions>
      </Dialog>



      
      <Dialog open={openEdit} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your img, name, age, job address here. We
            will send updates occasionally.
          </DialogContentText>
          <form className='flex flex-col gap-2' onSubmit={handleSubmitEdit} id="edit-form">
            <input className='border p-[10px] rounded-2xl' value={inpImgEdit} onChange={(e)=>setInpImgEdit(e.target.value)} type="text" placeholder='Img...'/>
            <input className='border p-[10px] rounded-2xl' value={inpNameEdit} onChange={(e)=>setInpNameEdit(e.target.value)} type="text" placeholder='Name...'/>
            <input className='border p-[10px] rounded-2xl' value={inpAgeEdit} onChange={(e)=>setInpAgeEdit(e.target.value)} type="text" placeholder='Age...'/>
            <input className='border p-[10px] rounded-2xl' value={inpJobEdit} onChange={(e)=>setInpJobEdit(e.target.value)} type="text" placeholder='Job...'/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="edit-form">
            Edit
          </Button>
        </DialogActions>
      </Dialog>




    <TableContainer sx={{ width:1000 , margin:"auto", marginTop:10}} component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Img</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Job</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((e) => (
            <TableRow
              key={e.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell><img src={e.img}  /></TableCell>
              <TableCell>{e.name}</TableCell>
              <TableCell>{e.age}</TableCell>
              <TableCell>{e.job}</TableCell>
              <TableCell sx={{color:`${e.status?"green":"red"}`}}>{e.status?"Active":"Inactive"}</TableCell>
              <TableCell>
                <Button onClick={()=>DeletUser(e.id)} sx={{color:"red"}} >
                  <DeleteIcon/>
                </Button>
                <Button onClick={()=>EditedUser(e)} sx={{color:"black"}} >
                  <EditIcon/>
                </Button>
                <Button onClick={()=>InfoUser(e)} sx={{color:"blue"}} >

                
                  <InfoIcon/>
                </Button>
                <Checkbox onClick={()=>ChechboxStatus(e.id)} checked={e.status} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default App
