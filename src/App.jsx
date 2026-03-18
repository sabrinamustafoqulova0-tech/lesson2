import React, { useEffect, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem
} 
from "@mui/material";
import axios from 'axios';
import Checkbox from '@mui/material/Checkbox';

import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


let Api = "http://localhost:3001/data"

function App() {
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [inpImg, setInpImg]=useState("")
  const [inpName, setInpName]=useState("")
  const [inpNumber, setInpNumber]=useState("")
  const [inpAge, setInpAge]=useState("")

  const [inpImgEdit, setInpImgEdit]=useState("")
  const [inpNameEdit, setInpNameEdit]=useState("")
  const [inpNumberEdit, setInpNumberEdit]=useState("")
  const [inpAgeEdit, setInpAgeEdit]=useState("")
  const [idx,setIdx]=useState(null)

  async function AddUser(newUser) {
    try {
      await axios.post(Api,newUser)
      GetUser()
    } 
    catch (error) {
      console.error(error);
    }
  }

  async function EditUser(editedUser,idx) {
    let peshina=data.find((e)=>e.id==idx)
    let izmenonoe={
      ...peshina,
      ...editedUser
    }
    try {
      let {data}=await axios.put(`${Api}/${idx}`,izmenonoe)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let newUser={
      img:inpImg,
      name:inpName,
      number:inpNumber,
      age: inpAge
    }

    AddUser(newUser)
    
    handleClose();
  };

  const handelSubmiEdit=(event)=>{
    event.preventDefault()
    let editedUser={
      img:inpImgEdit,
      name:inpNameEdit,
      number:inpNumberEdit,
      age: inpAgeEdit,
      id:idx
    }
    EditUser(editedUser,idx)

     handleCloseEdit();
  }

  async function DeletUser(id) {
    try {
      await axios.delete(`${Api}/${id}`)
      GetUser()
    } 
    catch (error) {
      console.error(error);
      
    }
  }
  function EditClick(e){
    setOpenEdit(true);
    setInpImgEdit(e.img)
    setInpNameEdit(e.name)
    setInpNumberEdit(e.number)
    setInpAgeEdit(e.age)
    setIdx(e.id)
  }


  




  async function GetUser() {
    try {
      let { data } = await axios.get(Api)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }

  async function CheckedStatus(idx) {
      let peshina=data.find((e)=>e.id==idx)
      let izmenonoe={
        ...peshina,
        status:!peshina.status
      }
      try {
      let {data}=await axios.put(`${Api}/${idx}`,izmenonoe)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }
  async function Search(text) {
    try {
    let {data}=await axios.get(`${Api}?name=${text}`)
    setData(data)
    } catch (error) {
      console.error(error);
    }
  }

  async function FilterStatus(textstatus) {
    try {
    if (textstatus == "") {
      GetUser()
    } else {
      let { data } = await axios.get(`${Api}?status=${textstatus}`)
      setData(data)
    }
  }catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    GetUser()
  }, [])
  

  return (
    <>
    <div className='flex gap-9 ml-[100px] mt-[50px]'>
      <Button sx={{ marginBottom:5, border:'1px solid blue'}} onClick={handleClickOpen}>
        Add New User
      </Button>
      <TextField onChange={(e)=>Search(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />
        <FormControl className='w-[200px]'>
        <InputLabel  id="demo-simple-select-label">All</InputLabel>
        <Select onChange={(e)=>FilterStatus(e.target.value)}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value={true}>Active</MenuItem>
          <MenuItem value="false">Inactive</MenuItem>
        </Select>
        </FormControl>
      </div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your img, name, number,age here. We
            will send updates occasionally.
          </DialogContentText>
          <form className='flex flex-col gap-3' onSubmit={handleSubmit} id="subscription-form">
            <input value={inpImg} onChange={(e)=>setInpImg(e.target.value)} className='border p-[10px] rounded-2xl' type="url" placeholder='Img...' />
            <input value={inpName} onChange={(e)=>setInpName(e.target.value)} className='border p-[10px] rounded-2xl' type="text" placeholder='Name...' />
            <input value={inpNumber} onChange={(e)=>setInpNumber(e.target.value)} className='border p-[10px] rounded-2xl' type="text" placeholder='Number...' />
            <input value={inpAge} onChange={(e)=>setInpAge(e.target.value)} className='border p-[10px] rounded-2xl' type="text" placeholder='Age...' />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">
            Add
          </Button>
        </DialogActions>
      </Dialog>


      
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your img, name, number,age here. We
            will send updates occasionally.
          </DialogContentText>
          <form className='flex flex-col gap-3' onSubmit={handelSubmiEdit} id="edit-form">
            <input value={inpImgEdit} onChange={(e)=>setInpImgEdit(e.target.value)} className='border p-[10px] rounded-2xl' type="url" placeholder='Img...' />
            <input value={inpNameEdit} onChange={(e)=>setInpNameEdit(e.target.value)} className='border p-[10px] rounded-2xl' type="text" placeholder='Name...' />
            <input value={inpNumberEdit} onChange={(e)=>setInpNumberEdit(e.target.value)} className='border p-[10px] rounded-2xl' type="text" placeholder='Number...' />
            <input value={inpAgeEdit} onChange={(e)=>setInpAgeEdit(e.target.value)} className='border p-[10px] rounded-2xl' type="text" placeholder='Age...' />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button type="submit" form="edit-form">
            Edit
          </Button>
        </DialogActions>
      </Dialog>





    <Table sx={{width:1300,  border: '2px solid black', borderCollapse:'collapse', margin:'auto'}}>
      <TableHead>
        <TableRow sx={{backgroundColor:"gray"}}>
          <TableCell>Img</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Number</TableCell>
          <TableCell>Age</TableCell>
          <TableCell>Status</TableCell>
          <TableCell>Actions</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {data.map((el) => (
          <TableRow key={el.id}>
            <TableCell><img src={el.img} /></TableCell>
            <TableCell>{el.name}</TableCell>
            <TableCell>{el.number}</TableCell>
            <TableCell>{el.age}</TableCell>
            <TableCell sx={`${el.status?"color:green":"color:red"}`} >{el.status?"Active":"Inactive"}</TableCell>
            <TableCell>
              <Button onClick={()=>DeletUser(el.id)}><DeleteIcon sx={{color:"red"}} /></Button>
              <Button onClick={()=>EditClick(el)}><EditIcon /></Button>
              <Checkbox
              onChange={()=>CheckedStatus(el.id)}
                checked={el.status}
                slotProps={{
              input: { 'aria-label': 'controlled' },}}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>




    </>
  )

}

export default App;

