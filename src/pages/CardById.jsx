import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const CardById = () => {
  
  let Api='http://37.27.29.18:8001/api/categories'

    const {categoryId}=useParams()

    let [data,setData]=useState([])
    const card=data?.find((e)=>e.id==categoryId)

    

  async function GetUser() {
    try {
      let {data}=await axios.get(Api)
    setData(data.data)
    } catch (error) {
      
      console.error(error.response.data.error);
    } 
  }

    
      useEffect(()=>{
        GetUser()
      },[])
    
  return (
    <div>
      <p>{card?.name}</p>
    </div>
  )
}

export default CardById
