import React, { useState } from 'react'
import { useNavigate } from 'react-router';

const Home = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      name: "Shampun",
      price: 100,
      date: "10/02/27",
      rating: "5",
      wight: "10kg",
    },
    {
      id: 2,
      name: "Tolo",
      price: 1.5,
      date: "10/02/26",
      rating: "6",
      wight: "100g",
    },
    {
      id: 3,
      name: "Snickers",
      price: 7,
      date: "10/02/27",
      rating: "10",
      wight: "150g",
    },
  ]);
  let navigate=useNavigate()
  let handleNavigate=(id)=>{
    navigate(`/product/${id}`)
  }
  return (
    <div className='flex justify-center gap-8'>
      {
        product.map((e)=>{
          return(
            <div 
            onClick={()=>handleNavigate(e.id)}
            className='bg-blue-200 p-[20px] rounded-2xl w-[300px] border-2 border-blue-500 border-solid'>
              <h1>{e.name}</h1>
              <h1>{e.price}</h1>
            </div>
          )
        })
      }
    </div>
  )
}

export default Home
