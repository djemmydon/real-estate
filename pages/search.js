import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import SearchFilter from "../Components/PageComponents/Search/SearchFilter";
import { Card } from "../Components/UI/Card/Card";
import { client, urlFor } from "../lib/client";

const prices = [
  {
    name: "$1 to $50",
    value: "1-50",
  },
  {
    name: "$51 to $200",
    value: "51-200",
  },
  {
    name: "$201 to $1000",
    value: "50000-300000",
  },
];

const ratings = [1, 2, 3, 4, 5];

function Search({ allProperty }) {
  const router = useRouter();

  return <div>{SearchFilter && <SearchFilter property={allProperty} />}</div>;
}

export default Search;

export const getServerSideProps = async ({ query }) => {
  const purpose = query.purpose || "For Rent";
  // const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.price || 0;
  const maxPrice = query.maxPrice || 1000000;

  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  // const areaMax = query.areaMax || '35000';
  // const locationExternalIDs = query.locationExternalIDs || '5002';
  // const categoryExternalID = query.categoryExternalID || '4';

  const url1 = ` *[_type == 'post'  && price >= ${minPrice} && price <= ${maxPrice} && bedroom >= ${roomsMin}  && bathroom >=${bathsMin}  ] {
    
    title,
    extrasrc,
    mainImage,
    description,
    price,
    bathroom,
    bedroom,
    address,
 _id,
  

    author -> {
      name,
      image,
    },
   
   
      category[] -> {
        title,
      },

      
      purposes[] -> {
        title,
      },


      amenities[] -> {
        title,
      },

     


  
  }`;

  const data = await client.fetch(url1);

  return {
    props: {
      allProperty: data,
    },
  };
};
