import { Button, Typography } from "@mui/material";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const CardById = () => {
  const Api = "http://37.27.29.18:8001/api/to-dos";
  const ApiImage = "http://37.27.29.18:8001/images";
  const ApiDelete = "http://37.27.29.18:8001/api/to-dos/images";
  
  const { categoryId } = useParams();

  const [data, setData] = useState({});
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const GetUser = useCallback(async () => {
    try {
      let { data } = await axios.get(`${Api}/${categoryId}`);      
      setData(data?.data);
    } catch (error) {
      console.error( error?.response?.data?.error);
    }
  }, [Api, categoryId]);

  
  let AddUser=useCallback(async(newUser)=> {
    try {
      await axios.post(`${Api}/${categoryId}/images`,newUser);
      GetUser();
    } catch (error) {
      console.error(error?.response?.data?.error);
    }
  }
)
let DeletUser=useCallback(async(id)=>{
    try {
        await axios.delete(`${ApiDelete}/${id}`)
        GetUser()
    } catch (error) {
      console.error(error?.response?.data?.error);
        
    }
})

  const handleSubmit = (event) => {
    event.preventDefault();

    let newUser = new FormData()
    newUser.append("images", event.target["images"].files[0])
    AddUser(newUser);
    handleClose();
  };

  useEffect(() => {
    GetUser();
  }, [GetUser]);

  return (
    <>
      <Button
        sx={{
          marginLeft: "200px",
          marginBottom: "20px",
          backgroundColor: "green",
        }}
        variant="contained"
        onClick={handleClickOpen}
      >
        Add User
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
          </DialogContentText>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit} id="subscription-form">
            <input type="file" name="images" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit" form="subscription-form">Add</Button>
        </DialogActions>
      </Dialog>

      <div style={{ padding: "0 200px" }}>
        <Typography variant="h4">{data?.name}</Typography>
        <div className="flex gap-4 flex-wrap mt-4">
          {data?.images?.map((img) => (
            <div key={img.id}>
              <img
                className="w-[300px] rounded"
                src={`${ApiImage}/${img.imageName}`}
                alt=""
              />
                <Button onClick={()=>DeletUser(img.id)} color="error" variant="outlined" sx={{ mt: 2 }}>DELETE</Button>
            </div>
          ))}
        </div> 
      </div>
    </>
  );
};

export default CardById;