import React, { useCallback, useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import axios from "axios";

import { useNavigate } from "react-router";

const Cards = () => {
   let navigate = useNavigate();
  let handleNavigate = (id) => {
    navigate(`/card/${id}`);
  };
  const Api = "http://37.27.29.18:8001/api/to-dos";
  const ApiImage = "http://37.27.29.18:8001/images";
  const ApiCheked = "http://37.27.29.18:8001/completed";

  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [idx, setIdx] = useState(null);

  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpenEdit = (e) => {
    setIdx(e.id)
    setName(e.name)
    setDescription(e.description)
    setOpenEdit(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleCloseEdit = () => {
    setOpenEdit(false);
  };
  let AddUser=useCallback(async(newUser)=> {
    try {
      await axios.post(Api, newUser);
      GetUser();
    } catch (error) {
      console.error(error.response.data.error);
    }
  }
)

  const handleSubmit = (event) => {
    event.preventDefault();

    let newUser = new FormData()
    newUser.append("name", event.target["name"].value)
    newUser.append("description", event.target["description"].value)
    newUser.append("images", event.target["images"].files[0])
    AddUser(newUser);
    handleClose();
  };

  let EditedUser=useCallback(async(editedUser)=>{
    try {
      await axios.put(Api,editedUser)
      GetUser()
    } catch (error) {
      console.error(error?.response.data.error);
    }
  },[]
)
  const handleSubmitEdit = (event) => {
    event.preventDefault();
    let editedUser={
      id:idx,
      name:name,
      description:description
    }
    
    EditedUser(editedUser);
    handleCloseEdit();
  };

  let GetUser = useCallback(async () => {
    try {
      let { data } = await axios.get(Api);
      setData(data.data);
    } catch (error) {
      console.error(error?.response.data.error);
    }
  }, []);

   let DeletUser=useCallback(async(id)=> {
    try {
      await axios.delete(`${Api}?id=${id}`);
      GetUser();
    } catch (error) {
      console.error(error.response.data.error);
    }
  }
)

  let CheckedStatys=useCallback(async(idx)=>{
    try {
      await axios.put(`${ApiCheked}?id=${idx}`)
      GetUser()
    } catch (error) {
      console.error(error?.response.data.error); 
    }
  },[idx]
)
  useEffect(() => {
    GetUser();
  }, []);
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
            We will send updates occasionally.
          </DialogContentText>
          <form className="flex flex-col gap-3" onSubmit={handleSubmit} id="subscription-form" >
            <input className="border p-2 rounded-[10px]" name="name" type="text" placeholder="Name..."/>
            <input className="border p-2 rounded-[10px]" name="description" type="text" placeholder="Description..."/>
            <input type="file" name="images" />
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
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>
          <form className="flex flex-col gap-3" onSubmit={handleSubmitEdit} id="edit-form" >
            <input className="border p-2 rounded-[10px]" value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="Name..."/>
            <input className="border p-2 rounded-[10px]" value={description} onChange={(e)=>setDescription(e.target.value)} type="text" placeholder="Description..."/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button type="submit" form="edit-form">
            Edit
          </Button>
        </DialogActions>
      </Dialog>

      <div className="flex px-[200px] justify-between flex-wrap">
        {data.map((e) => {
          return (
            <Card sx={{ maxWidth: 345, padding: "20px" }}>
              {e.images.map((img) => {
                return (
                  <div key={img.id}>
                    <img
                      className="w-[300px]"
                      src={ApiImage + "/" + img.imageName}
                      alt=""
                    />
                  </div>
                );
              })}
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.name}
                </Typography>
                <p
                  className={`${e.isCompleted ? "text-green-600" : "text-red-600"}`}
                >
                  {e.isCompleted ? "Active" : "Inactive"}
                </p>
                <p className="font-bold">Description: {e.description}</p>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => DeletUser(e.id)} size="small">
                  Delete
                </Button>
                <Button onClick={()=>handleClickOpenEdit(e)} size="small">Edit</Button>
                <Button onClick={() => handleNavigate(e.id)} size="small">Info</Button>
                <input onChange={()=>CheckedStatys(e.id)} checked={e.isCompleted} type="checkbox" />
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
