import React from 'react'
import { client } from '../../lib/client';
import dynamic from "next/dynamic";

const ProductPage = dynamic(
  () => import("../../Components/PageComponents/Products/Products"),
  { ssr: false }
);
function Products({allProperty}) {
  return (
    <div>
      
      <ProductPage  property={allProperty}/>
    </div>
  )
}

export default Products


export const getStaticProps = async () => {
  const url1 = ` *[_type == 'post'] {

    title,
    price,
    extrasrc,
    mainImage,
    description,
    bathroom,
    bedroom,
    _createdAt,

    author -> {
      name,
      image,
    },
    _id,
  
   
    amenities[] -> {
      title,
    },

    categories -> {
      title,
    },

    purposes-> {
      title,
    },
  }`;

  const data = await client.fetch(url1);

  return{
    props :{
    allProperty: data
    }
  }
};
