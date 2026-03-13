import React, { useState } from "react";
import avatar from "../public/avatar.jpg"

const App = () => {
  let [data, SetDate] = useState([
    {
      id: "1",
      name: "Sabrina",
      img: avatar,
      email: "sabrina@gmail.com",
      phone: "918-26-08-17",
      status: true,
      job: "Frontend development",
      age: 17,
    },
    {
      id: "2",
      name: "Pari",
      img: avatar,
      email: "pari@gmail.com",
      phone: "918-26-08-17",
      status: true,
      job: "Backend development",
      age: 17,
    },
  ]);
  let hundelAdd=(event)=>{
    event.preventDefault()
    let obj={
      name:event.target["inpName"].value,
      img:event.target["inpImg"].value,
      email:event.target["inpEmail"].value,
      phone:event.target["inpPhone"].value,
      job:event.target["inpJob"].value,
      age:event.target["inpAge"].value,
    }
    SetDate([...data, obj])
  }

  const [idx,setIdx]=useState("")
  const [editName,setEditName]=useState("")
  const [ediEmail,setEditEmail]=useState("")
  const [editPhone,setEditPhone]=useState("")
  const [editJob,setEditJob]=useState("")
  const [editAge,setEditAge]=useState("")
  const [editImg,setEditImg]=useState("")



  const [seatch,setSeatch]=useState("")
  const [select,setSelect]=useState("")
  
  let hundelEdit=(event)=>{
    event.preventDefault()
    let objedit={
      id:idx,
      name:editName,
      email:ediEmail,
      phone:editPhone,
      age:editAge,
      job:editJob,
      img:editImg,
    }
     SetDate(data.map((e)=>e.id==idx?objedit:e))
     setEditName("")
     setEditEmail("")
     setEditPhone("")
     setEditJob("")
     setEditAge("")
     setEditImg("")
  }
  const ShowEdit=(e)=>{
    setEditName(e.name)
    setEditPhone(e.phone)
    setEditEmail(e.email)
    setEditJob(e.job)
    setEditAge(e.age)
    setEditImg(e.img)
    setIdx(e.id)

  }
  function DeletUser(id){
    SetDate(data.filter((e)=>e.id!=id))
  }
  function Checked(id){
    SetDate(data.map((elem)=>{
     return elem.id==id ?{...elem,status:!elem.status}:elem
    }))
  }


  return (
    <>
    <div className="flex justify-center gap-[100px] mt-[50px]">
      <div>
        <input value={seatch} onChange={(e)=>{setSeatch(e.target.value)}} className="p-[5px] bg-white border rounded-[10px]" type="search" placeholder="Search" />
        <select value={select} onChange={(e)=>{setSelect(e.target.value)}} className="p-[5px] bg-white border rounded-[10px]">
          <option value="">All</option>
          <option value="frue">Active</option>
          <option value="false">Inacrtive</option>
        </select>
      </div>
    <form onSubmit={hundelAdd} className="bg-gray-300 flex flex-col w-[400px] p-[30px] gap-[5px] rounded-2xl" >
      <input className="p-[5px] bg-white rounded-[10px]" name="inpName" type="text" placeholder="Name..."/>
      <input className="p-[5px] bg-white rounded-[10px]" name="inpImg" type="text" placeholder="Img..."/>
      <input className="p-[5px] bg-white rounded-[10px]" name="inpEmail" type="text" placeholder="Email..."/>
      <input className="p-[5px] bg-white rounded-[10px]" name="inpPhone" type="text" placeholder="Phone..."/>
      <input className="p-[5px] bg-white rounded-[10px]" name="inpAge" type="text" placeholder="Age..."/>
      <input className="p-[5px] bg-white rounded-[10px]" name="inpJob" type="text" placeholder="Job..."/>
      <button type="submit" className="p-[5px] bg-gray-500 text-white font-bold text-[18px] rounded-[10px]">Save</button>
    </form>
    
    <form onSubmit={hundelEdit} className="bg-gray-300 flex flex-col w-[400px] p-[30px] gap-[5px] rounded-2xl">
      <input value={editName} onChange={(e)=>{setEditName(e.target.value)}} className="p-[5px] bg-white rounded-[10px]" type="text"/>
      <input value={editImg} onChange={(e)=>{setEditImg(e.target.value)}}  className="p-[5px] bg-white rounded-[10px]" type="text"/>
      <input value={ediEmail} onChange={(e)=>{setEditEmail(e.target.value)}}  className="p-[5px] bg-white rounded-[10px]" type="text"/>
      <input value={editPhone} onChange={(e)=>{setEditPhone(e.target.value)}}  className="p-[5px] bg-white rounded-[10px]" type="text"/>
      <input value={editAge} onChange={(e)=>{setEditAge(e.target.value)}}  className="p-[5px] bg-white rounded-[10px]" type="text"/>
      <input value={editJob} onChange={(e)=>{setEditJob(e.target.value)}}  className="p-[5px] bg-white rounded-[10px]" type="text"/>
      <button type="submit" className="p-2 bg-gray-500 text-white font-bold text-[18px] rounded-[10px]">Eddit</button>
    </form>

    </div>


      <table className="w-[80%] m-auto mt-[50px] border-collapse text-[18px]">
        <thead>
          <tr>
            <th className="border p-[10px] text-start">User</th>
            <th className="border p-[10px] text-start">Phone</th>
            <th className="border p-[10px] text-start">Age</th>
            <th className="border p-[10px] text-start">Job</th>
            <th className="border p-[10px] text-start">Status</th>
            <th className="border p-[10px] text-start">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((e)=>select=="true"?e.status:select=="false"?!e.status:e)
          .filter((e)=>e.name.toLocaleLowerCase().includes(seatch.trim().toLocaleLowerCase()))
          .map((e) => {
            return <>
            <tr>
              <td className="border p-[10px]">
                <div className="flex items-center gap-2">
                  <img className="w-[60px] rounded-[50%]" src={e.img}  />
                  <div>
                    <h3 className="font-bold text-2xl">{e.name}</h3>
                    <p className="text-gray-600">{e.email}</p>
                  </div>
                </div>
              </td>
              <td className="border p-[10px]">
                <p className="text-blue-500">{e.phone}</p>
              </td>
              <td className="border p-[10px]">
                <p>{e.age}</p>
              </td>
              <td className="border p-[10px]">
                <p>{e.job}</p>
              </td>
              <td className="border p-[10px]">
                <p className={`${e.status?"text-emerald-600":"text-red-500"}`}>{e.status?"Active":"Inactive"}</p>
              </td>
              <td className="border p-[10px]">
                <div className="flex gap-3">
                  <button onClick={()=>DeletUser(e.id)}>🗑️</button>
                  <button onClick={()=>ShowEdit(e)}>✒️</button>
                  <input onClick={()=>Checked(e.id)} checked={e.status} type="checkbox" />
                </div>
              </td>
            </tr>
            </>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default App;
