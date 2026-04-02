import { Button } from '@mui/material'
import React, { useReducer } from 'react'

const initialState={
  data:[
    {
      id:1,
      name:"Fotima",
      age:"16",
      status:true,
      job:"Frontend"
    },
    {
      id:2,
      name:"Madina",
      age:"16",
      status:false,
      job:"Backend"
    },
    {
      id:3,
      name:"Zarina",
      age:"16",
      status:true,
      job:"Fullstack"
    }
  ],
  setName:"",
  setAge:"",
  setJob:"",
  Idx:null
}

function reduser (state, action){
  if(action.key=="delete"){
     return { data: state.data.filter((e) => e.id != action.value) };
  }
  if(action.key=="checkedStatus"){
     return { ...state, data:state.data.map((e)=>e.id==action.value?{...e,status:!e.status}:e)};
  }
  if(action.key=="handelAdd"){
    action.value.preventDefault()
    let newObj={
      id:Date.now(),
      name:action.value.target["name"].value,
      age:action.value.target["age"].value,
      job:action.value.target["job"].value
    }
     return { 
      data: [...state.data, newObj]
     };
  }
  if(action.key=="editClick") {
    const user = state.data.find((e) => e.id == action.value);

    return {
      ...state,
      setName: user.name,
      setAge: user.age,
      setJob:user.job,
      Idx: user.id,
    };
  }
   
  if(action.key=="handelEdit"){
    action.value.preventDefault()
    return{
      ...state,
      data: state.data.map((e)=>e.id==state.Idx?{...e, name: state.setName, age: state.setAge,job:state.setJob}:e)
    }
  }
  if(action.key=="name"){
    return{
      ...state,
      setName:action.value
    }
  }
  if(action.key=="age"){
    return{
      ...state,
      setAge:action.value
    }
  }
  if(action.key=="job"){
    return{
      ...state,
      setJob:action.value
    }
  }
  }


const App = () => {
  const [state, dispash]=useReducer(reduser,initialState)
  return (
    <>

    <div className='px-[380px] flex justify-between'>
      <form onSubmit={(event)=>dispash({key:"handelAdd",value:event})} className='flex flex-col w-[300px] p-[20px] gap-3 border rounded-2xl'>
      <input className='p-[10px] border rounded-[10px]' type="text" name='name' placeholder='Name...' />
      <input className='p-[10px] border rounded-[10px]' type="text" name='age' placeholder='Age...' />
      <input className='p-[10px] border rounded-[10px]' type="text" name='job' placeholder='Job...' />
      <button  className='bg-green-600 text-white p-[10px] rou'>Add</button>
    </form>
      <form onSubmit={(event)=>dispash({key:"handelEdit",value:event})} className='flex flex-col w-[300px] p-[20px] gap-3 border rounded-2xl'>
      <input value={state.setName} onChange={(event)=>dispash({key:"name",value:event.target.value})} className='p-[10px] border rounded-[10px]' type="text"  placeholder='Name...' />
      <input value={state.setAge} onChange={(event)=>dispash({key:"age",value:event.target.value})} className='p-[10px] border rounded-[10px]' type="text"  placeholder='Age...' />
      <input value={state.setJob} onChange={(event)=>dispash({key:"job",value:event.target.value})} className='p-[10px] border rounded-[10px]' type="text"  placeholder='Job...' />
      <button className='bg-blue-600 text-white p-[10px] rou'>Edit</button>
    </form>
    </div>
      <table className='w-[90%] border-collapse m-auto mt-10'>
        <thead>
          <tr>
          <td className='border p-[10px] font-bold'>Name</td>
          <td className='border p-[10px] font-bold'>Age</td>
          <td className='border p-[10px] font-bold'>Status</td>
          <td className='border p-[10px] font-bold'>Job</td>
          <td className='border p-[10px] font-bold'></td>
          </tr>
        </thead>
        <tbody>
          {state.data.map((e)=>{
            return(
              <tr>
                <td className='p-[10px] border'>
                  <p>{e.name}</p>
                </td>
                <td className='p-[10px] border'>
                  <p>{e.age}</p>
                </td>
                <td className='p-[10px] border'>
                  <p className={`${e.status?"text-green-500":"text-red-500"}`}>{e.status?"Active":"Inactive"}</p>
                </td>
                <td className='p-[10px] border'>
                  <p>{e.job}</p>
                </td>
                <td className='p-[10px] border'>
                  <div className='flex gap-2'>
                    <Button onClick={() => dispash({ key: "delete", value: e.id })} sx={{backgroundColor:"red"}} variant='contained'>Delete</Button>
                    <Button onClick={() => dispash({ key: "editClick", value: e.id })} sx={{backgroundColor:"blue"}} variant='contained'>Edit</Button>
                    <Button sx={{backgroundColor:"black"}} variant='contained'>Info</Button>
                    <input onChange={() => dispash({ key: "checkedStatus", value: e.id })} type="checkbox" checked={e.status} />
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default App
