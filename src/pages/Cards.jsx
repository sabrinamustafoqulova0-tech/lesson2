import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useNavigate } from "react-router";

const Cards = () => {
  let Api = "http://37.27.29.18:8001/api/categories";
  let [data, setData] = useState([]);
  let [name, setInpName] = useState("");
  let [idx, setIdx] = useState(null);

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
      await axios.delete(`${Api}?id=${id}`);
      GetUser();
    } catch (error) {
      console.error(error.response.data.error);
    }
  }

  async function AddUser(newObj) {
    try {
      await axios.post(Api, newObj);
      GetUser();
    } catch (error) {
      console.error(error.response.data.error);
    }
  }

  let handelAdd = (event) => {
    event.preventDefault();
    let newObj = {
      name: event.target.inpname.value,
    };
    AddUser(newObj);
    event.target.reset();
  };

  let ClickeEdit = (el) => {
    setInpName(el.name);
    setIdx(el.id);
  };

  async function EditUser(edited, idx) {
    try {
      await axios.put(`${Api}?id=${idx}`, edited);
      GetUser();
      setInpName("");
    } catch (error) {
      console.error(error.response.data.error);
    }
  }

  let handelEdit = (event) => {
    event.preventDefault();
    let edited = {
      name: name,
      id: idx,
    };
    EditUser(edited, idx);
  };

  useEffect(() => {
    GetUser();
  }, []);

  let navigate = useNavigate();
  let handleNavigate = (id) => {
    navigate(`/card/${id}`);
  };

  return (
    <>
      <div className="flex justify-between px-[200px] mt-[40px]">
        <form
          onSubmit={handelAdd}
          className="bg-white flex flex-col gap-6 p-6 rounded-2xl shadow-2xl w-[400px]"
        >
          <input
            type="text"
            name="inpname"
            placeholder="Name..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-2xl"
          />
          <button
            type="submit"
            className="px-6 py-2  bg-green-600 text-white rounded-2xl"
          >
            Add
          </button>
        </form>

        <form
          onSubmit={handelEdit}
          className="bg-white flex flex-col gap-6 p-6 rounded-2xl shadow-2xl w-[400px]"
        >
          <input
            value={name}
            onChange={(e) => setInpName(e.target.value)}
            type="text"
            placeholder="Name..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-2xl"
          />
          <button
            type="submit"
            className="px-6 py-2  bg-green-600 text-white rounded-2xl"
          >
            Edit
          </button>
        </form>
      </div>
      <div className="flex px-[200px] my-[40px] flex-wrap gap-[40px]">
        {data.map((e) => {
          return (
            <Card
              onClick={() => handleNavigate(e.id)}
              sx={{ maxWidth: 345 }}
              key={e.id}
            >
              <CardMedia
                sx={{ height: 200 }}
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={(ev) => {
                    ev.stopPropagation();
                    DeletUser(e.id);
                  }}
                  sx={{ color: "red" }}
                >
                  <DeleteIcon />
                  <p>Delet</p>
                </Button>
                <Button
                  onClick={(ev) => {
                    ev.stopPropagation();

                    ClickeEdit(e);
                  }}
                  sx={{ color: "blue" }}
                >
                  <EditIcon />
                  <p>Edit</p>
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
