import React from 'react'
import ProductPage from '../../Components/PageComponents/Products/Products';
import { client } from '../../lib/client';

function Products({allProperty}) {
  return (
    <div>
      
      <ProductPage  property={allProperty}/>
    </div>
  )
}

export default Products


export const getStaticProps = async () => {
  const url1 = ` *[_type == 'post']`;

  const data = await client.fetch(url1);

  return{
    props :{
    allProperty: data
    }
  }
};
