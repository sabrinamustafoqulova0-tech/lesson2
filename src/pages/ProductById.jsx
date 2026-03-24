import React, { useState } from 'react'
import { useParams } from 'react-router';

const ProductById = () => {
    const [products, setProduct] = useState([
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
  
    const {productId}=useParams()
    const product=products.find((e)=>e.id==productId)

  return (
    <div>
        <div>
          <h1>{product.name}</h1>
          <h1>{product.price}</h1>
          <h1>{product.date}</h1>
          <h1>{product.rating}</h1>
          <h1>{product.wight}</h1>
        </div>
    </div>
  )
}

export default ProductById
