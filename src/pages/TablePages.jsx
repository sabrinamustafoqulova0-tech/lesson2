import React, { useEffect, useState } from 'react'
import {Box, Button, Modal, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import axios from 'axios';



import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from 'react-router';




const TablePages = () => {
  let Api="http://37.27.29.18:8001/api/to-dos"
   let Apistatus='http://37.27.29.18:8001' 
  let ApiImg="http://37.27.29.18:8001/images"
   let [data, setData]=useState([])
   let [name, setName]=useState("")
   let [description, setDescription]=useState("")
   let [idx, setIdx]=useState(null)

   async function GetUser() {
    try {
      let {data}=await axios.get(Api)
      setData(data.data)
    } catch (error) {
      console.error(error.response.data.error);
    }
   }


   
  useEffect(() => {
    GetUser();
  }, []);



  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClickOpenEdit = (e) => {
    setName(e.name)
    setDescription(e.description)
    setIdx(e.id)
    setOpenEdit(true);
  };

  const handleCloseEdit = () => {
    setOpenEdit(false);
  };


  const [openModal, setOpenModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  async function AddData(formData) {
    try {
      await axios.post(Api,formData)
    } catch (error) {
      console.error(error.response.data.error);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData= new FormData()
    formData.append("Images",event.target["images"].files[0])
    formData.append("Name",event.target["name"].value)
    formData.append("Description",event.target["description"].value)

    AddData(formData)
    console.log(email);
    handleClose();
  };

  async function Edit(edited) {
    try {
      await axios.put(Api,edited)
    } catch (error) {
      console.error(error.response.data.error);
    }
  }


  const handleSubmitEdit = (event) => {
    event.preventDefault();
    let edited={
      name:name,
      description:description,
      id:idx
    }


    Edit(edited)
    console.log(email);
    handleCloseEdit();
  };

  

  async function CheckedStatus(id) {
    try {
      await axios.put(`${Apistatus}/completed?id=${id}`)
      GetUser()
    } catch (error) {
      console.error(error.response.data.error);
    }
  }


  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setOpenModal(false);
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${Api}?id=${selectedItem.id}`);
      setData(data.filter((item) => item.id !== selectedItem.id));
      handleCloseModal();
    } catch (error) {
      console.error(error.response.data.error);
    }
  };


  let navigate = useNavigate();
  let handleNavigate = (id) => {
    navigate(`/table/${id}`);
  };


  return (
    <>

    
      <Button sx={{marginLeft:"5%", marginTop:"5%", bgcolor:"green", color:"white"}} variant="outlined" onClick={handleClickOpen}>
        Add
      </Button>

    
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmit} className='flex flex-col gap-4' id="subscription-form">
            <input name='name' className='p-2 border rounded-[10px]' type="text" placeholder='Name...' />
            <input name='description' className='p-2 border rounded-[10px]' type="text" placeholder='Description...' />
            <input name='images' className='p-2 border rounded-[10px]' type="file" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose} type="submit" form="subscription-form">
            Add
          </Button>
        </DialogActions>
      </Dialog>

      
    
      <Dialog open={openEdit} onClose={handleCloseEdit}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <form onSubmit={handleSubmitEdit} className='flex flex-col gap-4' id="Edit-form">
            <input value={name} onChange={(e)=>setName(e.target.value)} className='p-2 border rounded-[10px]' type="text" placeholder='Name...' />
            <input value={description} onChange={(e)=>setDescription(e.target.value)} className='p-2 border rounded-[10px]' type="text" placeholder='Description...' />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button onClick={handleCloseEdit} type="submit" form="Edit-form">
            Edit
          </Button>
        </DialogActions>
      </Dialog>


    <Table sx={{width:"90%", margin:"5%"}}>
          
          <TableHead>
            <TableRow>
              <TableCell sx={{fontSize:"20px"}}>Images</TableCell>
              <TableCell sx={{fontSize:"20px"}}>Name</TableCell>
              <TableCell sx={{fontSize:"20px"}}>Description</TableCell>
              <TableCell sx={{fontSize:"20px"}}>Status</TableCell>
              <TableCell sx={{fontSize:"20px"}} align="right">Actions</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
              {
                data.map((e)=>{
                  return(
                    <>
            <TableRow>
                  <TableCell>
                    <div className='flex gap-2'>
                      {
                        e.images.slice(0,1).map((img)=>{
                          return(
                            <>
                              <img className='w-[50px] h-[50px]' src={`${ApiImg}/${img.imageName}`} alt="" />
                            </>
                          )
                        })
                      }
                    </div>
                  </TableCell>
                  <TableCell><p>{e.name}</p></TableCell>
                  <TableCell><p>{e.description}</p></TableCell>
                  <TableCell><p className={`${e.isCompleted?"text-green-600":"text-red-600"}`}>{e.isCompleted?"Active":"Inacrive"}</p></TableCell>
                    <TableCell align="right">
                    <input onChange={()=>CheckedStatus(e.id)} checked={e.isCompleted} type="checkbox" />
                    <Button onClick={() => handleOpenModal(e)} sx={{color:"red"}}>
                    <DeleteIcon/>
                    </Button>
                    <Button onClick={() => handleClickOpenEdit(e)} sx={{color:"blue"}}>
                    <EditIcon/>
                    </Button>
                    <Button onClick={() => handleNavigate(e.id)} sx={{color:"black"}}>
                    <InfoOutlineIcon/>
                    </Button>
                  </TableCell>
                </TableRow>
              </>
                  )
                })
              }
          </TableBody>
        </Table>

        <Modal open={openModal} onClose={handleCloseModal}>
        <Box sx={{position: 'absolute',top: '50%',left: '50%',transform: 'translate(-50%, -50%)',width: 400, bgcolor: 'background.paper',borderRadius: 2,boxShadow: 24,p: 4,textAlign: 'center'}}>
          <Typography variant="h6" mb={2}>
            Вы точно хотите удалить?
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{ mr: 2 }}
            onClick={handleDelete}
          >
            Удалить
          </Button>
          <Button variant="outlined" onClick={handleCloseModal}>
            Отмена
          </Button>
        </Box>
      </Modal>
    </>
  )
}

export default TablePages
