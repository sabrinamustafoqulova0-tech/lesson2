import axios from 'axios'
import React, { useEffect, useState } from 'react'


const App = () => {
  let Api="http://localhost:3003/user"

  let [data,setData]=useState([])
  async function GetUser() {
    try {
      let {data}=await axios.get(Api)
      setData(data)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(()=>{
    GetUser()
  },[])
  return (
    <>





    <table className='w-[80%] border-collapse m-auto'>
      <thead>
        <tr>
          <th className='border p-[10px] text-start'>Name</th>
          <th className='border p-[10px] text-start'>Age</th>
          <th className='border p-[10px] text-start'>Status</th>
          <th className='border p-[10px] text-start'>Action</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e)=>{
            return(
              <>
              <tr>
                <td className='border p-[10px]'>{e.name}</td>
                <td className='border p-[10px]'>{e.age}</td>
                <td className='border p-[10px]'>{e.status?"Activa":"Inactive"}</td>
                <td className='border p-[10px]'>
                  <button>🗑️</button>
                  <button>✒️</button>
                  <input checked={e.status} type="checkbox" />
                </td>
              </tr>
              </>
            )
          })
        }
      </tbody>
    </table>
    </>
  )
}

export default App
