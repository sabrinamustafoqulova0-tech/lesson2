import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios' 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { Pagination } from 'swiper/modules';

import 'swiper/css';

const TableById = () => {
    let Api = `http://37.27.29.18:8001/api/to-dos`
    let ApiImage = `http://37.27.29.18:8001/images`
    let ApiDelete="http://37.27.29.18:8001/api/to-dos/images"
    const { categoryId } = useParams()
    const [data, setData] = useState([]) 

    async function GetUser() {
        try {
            let { data } = await axios.get(Api)
            setData(data?.data)
        } catch (error) {
            console.error(error.respons?.data.error)
        } 
    }
    
      const [open, setOpen] = useState(false);
      const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    
  async function AddData(formData) {
    try {
      await axios.post(`${Api}/${categoryId}/images`,formData)
      GetUser()
    } catch (error) {
      console.error(error.response?.data.error);
    }
  }
  async function DeleteUser(id) {
    try {
      await axios.delete(`${ApiDelete}/${id}`)
      GetUser()
    } catch (error) {
            console.error(error.respons?.data.error)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let formData= new FormData()
    formData.append("Images",event.target["images"].files[0])


    AddData(formData)
    handleClose();
  };

    useEffect(() => {
        GetUser()
    }, [])

    const table = data?.find((e) => e.id == categoryId)


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
        <div className="max-w-4xl mx-auto m-10 p-6 bg-white shadow-xl rounded-2xl border border-gray-100">
    
    <div className="space-y-4 mb-8">
        <div className="flex items-center gap-2">
            <span >Name:</span>
            <p >{table?.name}</p>
        </div>
        
        <div >
            <span>Description:</span>
            <p >
                {table?.description}
            </p>
        </div>
    </div>

    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {table?.images?.map((img) => (
                <SwiperSlide>
                  <div className='p-[20px] border rounded-2xl'>
                    <img 
                        src={`${ApiImage}/${img?.imageName}`} 
                        alt="" 
                        className="w-[300px]"
                    />
                    <Button onClick={()=>DeleteUser(img.id)} variant='contained'>Delete</Button>
                    </div>
                </SwiperSlide>
            ))}
      </Swiper>
    </div>
</div>
</>
    )
}

export default TableById