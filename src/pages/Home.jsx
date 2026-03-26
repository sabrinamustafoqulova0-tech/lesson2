import axios from "axios";
import React, { useEffect, useState } from "react";
let Api = "http://37.27.29.18:8001/api/categories";

const Home = () => {
  let [data, setData] = useState([]);

  async function GetUser() {
    try {
      let { data } = await axios.get(Api);
      setData(data.data);
    } catch (error) {
      console.error(error.response.data.error);
    }
  }
 let handelSubmit = (event) => {
  event.preventDefault();

  let obj = {
    name: event.target.name.value
  };

  AddUser(obj);
  event.target.reset();
};

  async function AddUser(obj) {   
    try {
      await axios.post(Api,obj)
      GetUser()
    } catch (error) {
      console.error(error.response.data.error);
    }
  }

  useEffect (() => {
    GetUser();
  }, []);

  return (
    <>
    <form className="p-[20px] bg-blue-500 flex flex-col w-[300px] gap-3" onSubmit={handelSubmit}>
        <input  className="p-[10px] rounded-2xl bg-white" type="text" name="name" placeholder="Name..." />
        <button className="p-[10px] rounded-2xl bg-white" type="submit">Submit</button>
      </form>
    <div className="flex flex-wrap px-[100px] gap-[30px]">
      {data.map((e) => {
        return <div className="p-[20px] border"><p>{e.name}</p></div>;
      })}
    </div>
    </>
  );
};

export default Home;
