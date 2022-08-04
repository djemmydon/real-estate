import Link from 'next/link';
import React from 'react'
import { Card, Card2, Card3 } from '../../../Components/UI/Card/Card';
import { client } from '../../../lib/client';


function Category({allProperty}) {
  return (
    <div>
      {allProperty.map((item) => (

        <Link key={item._id} href={`/products/category/${item.title}`}>
             <h1>{item.title}</h1>
      </Link>

      ))}
    </div>
  )
}

export default Category


export const getStaticProps = async () => {
  const url1 = ` *[_type == 'category' ]`;

  const data = await client.fetch(url1);

  return{
    props :{
    allProperty: data
    }
  }
};
