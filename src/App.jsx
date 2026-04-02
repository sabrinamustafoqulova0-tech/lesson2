import { Button } from "@mui/material";
import React, { useReducer } from "react";

const initialState = {
  data: [
    {
      id: 1,
      name: "asdfgh",
      status: false,
      about: "asdfghjkl;p[oiuytrewqasdfgh",
    },
    {
      id: 2,
      name: "asdfgh",
      status: true,
      about: "asdfghjkl;p[oiuytrewqasdfgh",
    },
  ],
  open: false,
  openEdit: false,
  openInfo: false,
  infoData: null,
  setName: "",
  setAbout: "",
  setIdx: null,
};

function reducer(state, action) {
  if (action.key == "delete") {
    return { data: state.data.filter((e) => e.id != action.value) };
  }
  if (action.key == "add") {
    action.value.preventDefault();
    let obj = {
      id: Date.now(),
      name: action.value.target["name"].value,
      about: action.value.target["about"].value,
    };
    return { data: [...state.data, obj] };
  }
  if (action.key == "openModal") {
    return { ...state, open: true };
  }
  if (action.key == "cencel") {
    return { ...state, open: false };
  }
  if (action.key === "checkbox") {
    return {
      ...state,
      data: state.data.map((e) =>
        e.id == action.value ? { ...e, status: !e.status } : e,
      ),
    };
  }
  if (action.key == "cencelEdit") {
    return { ...state, openEdit: false };
  }
  if (action.key == "openEditUser") {
    const user = state.data.find((e) => e.id == action.value);

    return {
      ...state,
      openEdit: true,
      setName: user.name,
      setAbout: user.about,
      setIdx: user.id,
      znacheniaInfo: null,
    };
  }
  if (action.key == "edit") {
    action.value.preventDefault();
    return {
      ...state,
      data: state.data.map((e) =>
        e.id == state.setIdx
          ? { ...e, name: state.setName, about: state.setAbout }
          : e,
      ),
      openEdit: false,
      setName: "",
      setAbout: "",
      setIdx: null,
    };
  }
  if (action.key == "name") {
    return { ...state, setName: action.value };
  }

  if (action.key == "about") {
    return { ...state, setAbout: action.value };
  }

  if (action.key == "Info") {
    return { ...state, openInfo: true, infoData: action.value };
  }

  if (action.key == "cencelInfo") {
    return { ...state, openInfo: false };
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Button
        onClick={() => dispatch({ key: "openModal" })}
        sx={{ backgroundColor: "green", margin: "20px" }}
        variant="contained"
      >
        Add
      </Button>
      <dialog open={state.open} className="m-auto z-10 shadow-2xl">
        <form
          onSubmit={(event) => dispatch({ key: "add", value: event })}
          className="flex flex-col w-[300px] gap-4 border rounded-2xl p-[20px]"
        >
          <input
            className="border p-[5px] rounded-[10px]"
            name="name"
            type="text"
            placeholder="Name..."
          />
          <input
            className="border p-[5px] rounded-[10px]"
            name="about"
            type="text"
            placeholder="About..."
          />
          <button
            className="bg-red-500  text-white p-[10px] rounded-[10px]"
            type="button"
            onClick={() => dispatch({ key: "cencel" })}
          >
            Cencel
          </button>
          <button
            className="bg-blue-700 text-white  p-[10px] rounded-[10px]"
            type="submit"
          >
            SubmitEdit
          </button>
        </form>
      </dialog>
      <dialog open={state.openEdit} className="m-auto z-10 shadow-2xl">
        <form
          onSubmit={(event) => dispatch({ key: "edit", value: event })}
          className="flex flex-col w-[300px] gap-4 border rounded-2xl p-[20px]"
        >
          <input
            className="border p-[5px] rounded-[10px]"
            onChange={(e) => dispatch({ key: "name", value: e.target.value })}
            name="name"
            type="text"
            value={state.setName}
            placeholder="Name..."
          />
          <input
            className="border p-[5px] rounded-[10px]"
            name="about"
            type="text"
            onChange={(e) => dispatch({ key: "about", value: e.target.value })}
            value={state.setAbout}
            placeholder="About..."
          />
          <button
            className="bg-red-500  text-white p-[10px] rounded-[10px]"
            type="button"
            onClick={() => dispatch({ key: "cencelEdit" })}
          >
            Cencel
          </button>
          <button
            className="bg-blue-700 text-white  p-[10px] rounded-[10px]"
            type="submit"
          >
            Submit
          </button>
        </form>
      </dialog>
      <div className="flex gap-2 m-[20px]">
        {state.data.map((e) => {
          return (
            <>
              <div className="p-[30px] border rounded-2xl mt-[30px]">
                <h1>{e?.name}</h1>
                <h1>{e?.about}</h1>
                <p
                  className={`${e?.status ? "text-green-800" : "text-red-800"}`}
                >
                  {e?.status ? "Active" : "Inactive"}
                </p>
                <div className="flex gap-1 mt-[10px]">
                  <Button
                    sx={{ backgroundColor: "red" }}
                    variant="contained"
                    onClick={() => dispatch({ key: "delete", value: e.id })}
                  >
                    Delete
                  </Button>
                  <Button
                    sx={{ backgroundColor: "blue" }}
                    variant="contained"
                    onClick={() =>
                      dispatch({ key: "openEditUser", value: e.id })
                    }
                  >
                    Edit
                  </Button>
                  <Button
                    sx={{ backgroundColor: "black" }}
                    variant="contained"
                    onClick={() => dispatch({ key: "Info", value: e })}
                  >
                    Info
                  </Button>
                  <dialog
                    open={state.openInfo}
                    className="m-auto z-10 border p-[20px] rounded-2xl w-[300px] shadow-2xl"
                  >
                    <h1 className="text-xl font-bold">User Info</h1>
                    <p>
                      <span>Name:</span> {state?.infoData?.name}
                    </p>
                    <p>
                      <span>About:</span> {state?.infoData?.about}
                    </p>
                    <p>
                      <span>Status:</span> {state?.infoData?.status ? "Active" : "Inactive"}
                    </p>
                    <button
                      type="button"
                      onClick={() => dispatch({ key: "cencelInfo" })}
                      className="bg-red-500  text-white p-[10px] rounded-[10px]"
                    >
                      {" "}
                      Cencel
                    </button>
                  </dialog>
                  <input
                    onChange={() => dispatch({ key: "checkbox", value: e.id })}
                    checked={e.status}
                    type="checkbox"
                  />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default App;
