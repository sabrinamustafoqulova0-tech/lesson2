import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import axios from "axios";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

const App = () => {
  const [data, setData] = useState([]);
  const [inpImg, setInpImg] = useState("");
  const [inpName, setInpName] = useState("");
  const [inpAbout, setInpAbout] = useState("");
  const [inpImgEdit, setInpImgEdit] = useState("");
  const [inpNameEdit, setInpNameEdit] = useState("");
  const [inpAboutEdit, setInpAboutEdit] = useState("");
  const [idx, setIdx] = useState("");
  const [open, setOpen] = useState(false);
  const [openedit, setOpenEdut] = useState(false);

  async function AddAnimals(newAvimals) {
    try {
      await axios.post(Api,newAvimals)
      GetUser()
    } catch (error) {
      console.error(error);
    }
  }

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleCloseEdit = () => setOpenEdut(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    let newAvimals={
      img:inpImg,
      name:inpName,
      about:inpAbout,
    }
    AddAnimals(newAvimals)
  };

  async function EditAnimals(editeduser,idx) {
    let peshina=data.find((e)=>e.id==idx)
    let editshuda={
      ...peshina,
      ...editeduser
    }
    try {
      await axios.put(`${Api}/${idx}`,editshuda)
      GetUser()
    } catch (error) {
      console.error(error);
    }
  }

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    let editeduser={
      img:inpImgEdit,
      name:inpNameEdit,
      about:inpAboutEdit,
      id:idx,
    }
    EditAnimals(editeduser,idx)
  };

  let Api = "http://localhost:3002/data";

  async function GetUser() {
    try {
      let { data } = await axios.get(Api);
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }
   async function DeletAnimals(id) {
    try {
      await axios.delete(`${Api}/${id}`)
      GetUser()
    } catch (error) {
      console.error(error);
    }
   }
   function OpenEditDialog(e) {
      setOpenEdut(true)
      setInpImgEdit(e.img)
      setInpNameEdit(e.name)
      setInpAboutEdit(e.about)
      setIdx(e.id)
}

   async function ChecoutStatus(id) {
    let peshtara=data.find((e)=>e.id==id)
    let EditedStatus={
      ...peshtara,
      status:!peshtara.status
    }
    try {
      await axios.put(`${Api}/${id}`,EditedStatus)
      GetUser()
    } catch (error) {
      console.error(error);
    }
   }

  useEffect(() => {
    GetUser();
  }, []);

  return (
    <>
      <Button variant="outlined" onClick={handleClickOpen}  sx={{ marginTop: 5, marginLeft:20 }}>
        Add Animals
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>
          <form className="flex flex-col gap-5 my-[20px]" onSubmit={handleSubmit} id="subscription-form">
            <input value={inpImg} onChange={(e)=>setInpImg(e.target.value)} className="border p-[10px] rounded-2xl" type="url" placeholder="Img..."/>
            <input value={inpName} onChange={(e)=>setInpName(e.target.value)} className="border p-[10px] rounded-2xl" type="text" placeholder="Name..."/>
            <input value={inpAbout} onChange={(e)=>setInpAbout(e.target.value)} className="border p-[10px] rounded-2xl" type="text" placeholder="About..."/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button  type="submit" form="subscription-form">Add</Button>
        </DialogActions>
      </Dialog>

      
      <Dialog open={openedit} onClose={handleCloseEdit}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>
          <form className="flex flex-col gap-5 my-[20px]" onSubmit={handleSubmitEdit} id="edit-form">
            <input value={inpImgEdit} onChange={(e)=>setInpImgEdit(e.target.value)} className="border p-[10px] rounded-2xl" type="url" placeholder="Img..."/>
            <input value={inpNameEdit} onChange={(e)=>setInpNameEdit(e.target.value)} className="border p-[10px] rounded-2xl" type="text" placeholder="Name..."/>
            <input value={inpAboutEdit} onChange={(e)=>setInpAboutEdit(e.target.value)} className="border p-[10px] rounded-2xl" type="text" placeholder="About..."/>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>
          <Button type="submit" form="edit-form">Eddit</Button>
        </DialogActions>
      </Dialog>

      <div className="flex justify-baseline mx-[150px] my-9 flex-wrap gap-[80px]">
        {data.map((e) => (
          <Card sx={{ maxWidth: 345 }} key={e.id}>
            <CardActionArea>
              <CardMedia component="img" sx={{ height: 180 }} image={e.img} alt={e.name} />
              <CardContent>
                <Typography gutterBottom variant="h5">{e.name}</Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>{e.about}</Typography>
                <span className={`${e.status ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"} px-[5px]`}>
                  {e.status ? "Active" : "Inactive"}
                </span>
              </CardContent>
            </CardActionArea>
            <div className="flex gap-3 p-2">
              <Button onClick={()=>DeletAnimals(e.id)}><DeleteIcon sx={{ color: "red", fontSize: 30 }} /></Button>
              <Button onClick={() => OpenEditDialog(e)}><CreateIcon  variant="outlined" sx={{ color: "blue", fontSize: 30 }} /></Button>
              <Checkbox onChange={()=>ChecoutStatus(e.id)} checked={e.status} color="success" />
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default App;
