import React, { useEffect, useState } from 'react'
import Getproductos from '../../components/Getproductos'

export default async function Products_G() {
const [prod, setProd] =useState([]);

const funcionproductos= async () => {
    const products = await Getproductos();
    setProd(products);
  };
const productMa = prod.map((item)=>{
return(item)
})
  useEffect(()=>{
    funcionproductos();
  }) 



  return (
    <div>
        <img src= {Image} alt="" />
        <p>{price}</p>
    </div>
  )
}
