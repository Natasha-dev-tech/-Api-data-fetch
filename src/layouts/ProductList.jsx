import React from 'react'
import Container from '../components/Container'
import Image from '../components/Image'
import Button from '../components/Button'
import { useEffect, useState } from 'react'
const ProductList = ({ product }) => {
    return (
      <div className="border p-4 shadow-lg rounded-md flex flex-col items-center h-[320px]">  
        <img src={product.image} alt={product.title} className="h-40 w-auto mx-auto" />
        <h2 className="text-lg font-bold text-center mt-2 h-[60px] overflow-hidden">{product.title.lenght>20?`${product.title.slice(0,20)}...`:product.title}</h2>
        <p className="text-gray-700">Price: ${product.price}</p>
        <button className="bg-orange-500 text-white px-4 py-2 mt-auto">Add to Cart</button> 
      </div>
    );
  };
  
  
  export default ProductList;
  