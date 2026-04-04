import { Button } from "@mui/material";
import React, { useReducer } from "react";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import InfoIcon from "@mui/icons-material/Info";

import img1 from "../images/Mask Group (1).png";
import img2 from "../images/Mask Group (3).png";
import img3 from "../images/Mask Group (4).png";
import img4 from "../images/Mask Group (5).png";
import img5 from "../images/Mask Group (2).png";

import { useNavigate } from "react-router";

const initialState = {
  data: [
    {
      id: 1,
      name: "Sun-Glass",
      status: false,
      img: img1,
      price: "$ 1.75",
    },
    {
      id: 2,
      name: "Sun-Glass",
      status: true,
      img: img2,
      price: "$ 1.75",
    },
    {
      id: 3,
      name: "Sun-Glass",
      status: true,
      img: img3,
      price: "$ 1.75",
    },
    {
      id: 4,
      name: "NuEvey",
      status: true,
      img: img4,
      price: "$1.25",
    },
    {
      id: 5,
      name: "Sun-Glass",
      status: true,
      img: img5,
      price: "$1.75",
    },
    {
      id: 6,
      name: "NuEvey",
      status: true,
      img: img1,
      price: "$1.25",
    },
    {
      id: 7,
      name: "Sun-Glass",
      status: true,
      img: img4,
      price: "$1.75",
    },
    {
      id: 8,
      name: "NuEvey",
      status: true,
      img: img3,
      price: "$1.25",
    },
  ],
  open: false,
  openEdit: false,
  setName: "",
  setprice: "",
  setIdx: null,
  search: "",
};

function reducer(state, action) {
  if (action.key == "delete") {
  return {
    ...state,
    data: state.data.filter((e) => e.id != action.value)
  };
}
  if (action.key == "add") {
    action.value.preventDefault();
    let obj = {
      id: Date.now(),
      name: action.value.target["name"].value,
      price: action.value.target["price"].value,
    };
    return {
      ...state,
      data: [...state.data, obj],
      open: false,
    };
  }
  if (action.key == "openModal") return { ...state, open: true };
  if (action.key == "cencel") return { ...state, open: false };

  if (action.key == "checkbox") {
    return {
      ...state,
      data: state.data.map((e) =>
        e.id == action.value ? { ...e, status: !e.status } : e,
      ),
    };
  }

  if (action.key == "cencelEdit") return { ...state, openEdit: false };

  if (action.key == "openEditUser") {
    const user = state.data.find((e) => e.id == action.value);
    return {
      ...state,
      openEdit: true,
      setName: user.name,
      setprice: user.price,
      setIdx: user.id,
    };
  }

  if (action.key == "edit") {
    action.value.preventDefault();
    return {
      ...state,
      data: state.data.map((e) =>
        e.id == state.setIdx
          ? { ...e, name: state.setName, price: state.setprice }
          : e,
      ),
      openEdit: false,
      setName: "",
      setprice: "",
      setIdx: null,
    };
  }

  if (action.key == "name") return { ...state, setName: action.value };
  if (action.key == "price") return { ...state, setprice: action.value };

  if (action.key == "search") {
    return { ...state, search: action.value };
  }
}

const CardToDo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  let navigate = useNavigate();
  let handleNavigate = (id) => {
    navigate(`/card/${id}`);
  };

  return (
    <>
      <div className="flex justify-center gap-5 items-center">
        <Button
          onClick={() => dispatch({ key: "openModal" })}
          sx={{ backgroundColor: "green", margin: "20px" }}
          variant="contained"
        >
          Add
        </Button>
        <input
          type="search"
          placeholder="Search..."
          className="bg-[#EDEDED] rounded-[8px] w-[348.45px] text-[#a5a5a5] p-2"
          value={state.search}
          onChange={(e) => dispatch({ key: "search", value: e.target.value })}
        />
      </div>

      <dialog open={state.open} className="m-auto z-10 shadow-2xl">
        <form
          onSubmit={(event) => dispatch({ key: "add", value: event })}
          className="flex flex-col w-[280px] md:w-[300px] gap-4 border rounded-2xl p-[20px]"
        >
          <input
            className="border p-[5px] rounded-[10px]"
            name="name"
            placeholder="Name..."
          />
          <input
            className="border p-[5px] rounded-[10px]"
            name="price"
            placeholder="price..."
          />

          <button
            type="button"
            onClick={() => dispatch({ key: "cencel" })}
            className="bg-red-500 text-white p-[10px] rounded-[10px]"
          >
            Cancel
          </button>

          <button className="bg-blue-700 text-white p-[10px] rounded-[10px]">
            Add
          </button>
        </form>
      </dialog>

      <dialog open={state.openEdit} className="m-auto z-10 shadow-2xl">
        <form
          onSubmit={(event) => dispatch({ key: "edit", value: event })}
          className="flex flex-col w-[280px] md:w-[300px] gap-4 border rounded-2xl p-[20px]"
        >
          <input
            className="border p-[5px] rounded-[10px]"
            value={state.setName}
            onChange={(e) => dispatch({ key: "name", value: e.target.value })}
          />
          <input
            className="border p-[5px] rounded-[10px]"
            value={state.setprice}
            onChange={(e) => dispatch({ key: "price", value: e.target.value })}
          />

          <button
            type="button"
            onClick={() => dispatch({ key: "cencelEdit" })}
            className="bg-red-500 text-white p-[10px] rounded-[10px]"
          >
            Cancel
          </button>

          <button type="submit" className="bg-blue-700 text-white p-[10px] rounded-[10px]">
            Edit
          </button>
        </form>
      </dialog>

      <div className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-6 lg:gap-10 px-[20px] md:px-[40px] lg:px-[70px] m-[20px]">
        {state.data
          .filter((e) =>
            e.name.toLowerCase().includes(state.search.toLowerCase()),
          )
          .map((e) => (
            <div className="bg-white rounded-4xl p-[10px] md:p-[15px] w-full sm:w-[48%] md:w-[300px] shadow-2xl relative">
              <img
                className="w-full h-[200px] md:h-[260px] lg:h-[320px] rounded-4xl object-cover"
                src={e.img}
                alt=""
              />

              <span className="bg-[#1C1D2059] text-[10px] md:text-[12px] p-[5px] md:p-[7px] rounded-[10px] absolute top-4 right-4 md:top-7 md:right-7 text-white">
                07h 09m 12s
              </span>

              <p className="text-[18px] md:text-[20px] lg:text-2xl font-bold">
                {e.name}
              </p>

              <div className="flex items-center justify-between">
                <div>
                  <p className={e.status ? "text-green-800" : "text-red-800"}>
                    {e.status ? "Active" : "Inactive"}
                  </p>
                  <p>{e.price}</p>
                </div>

                <div className="flex gap-2 mt-[10px]">
                  <button
                    className="text-red-500"
                    onClick={() => dispatch({ key: "delete", value: e.id })}
                  >
                    <DeleteIcon />
                  </button>

                  <button
                    className="text-blue-500"
                    onClick={() =>
                      dispatch({ key: "openEditUser", value: e.id })
                    }
                  >
                    <EditIcon />
                  </button>

                  <button
                    onClick={() => handleNavigate(e.id)}
                    className="text-black"
                  >
                    <InfoIcon />
                  </button>

                  <input
                    type="checkbox"
                    checked={e.status}
                    onChange={() => dispatch({ key: "checkbox", value: e.id })}
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default CardToDo;
