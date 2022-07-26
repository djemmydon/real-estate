import Link from "next/link";
import React from "react";
import { urlFor } from "../../../../lib/client";
import { Card, Card2 } from "../../../UI/Card/Card";
import Heading from "../../../Utils/Heading/Heading";
import { FeatureFlex } from "./FeatureStyle";

export function Feature({ home }) {
  return (
    <div>
      <Heading title="Popular Properties." smallTtitle="Best Choice" />

      <FeatureFlex>
        {home?.map((item) => (

     
         <Card
         _id={item._id}
            src={urlFor(item.mainImage)}
            name={item.title}
            address={item.address}
            price={item.price.toLocaleString("en-US")}
          />
      
         
        ))}
      </FeatureFlex>
    </div>
  );
}

export function Cities() {
  return (
    <div>
      <Heading title="Find Your Neighborhood." smallTtitle="Explore Cities" />

      <FeatureFlex>
        <Card2 src="/House Images/home2.jpg" name="John Doe" property="3" />
        <Card2 src="/House Images/home2.jpg" name="John Doe" property="3" />
        <Card2 src="/House Images/home2.jpg" name="John Doe" property="3" />
        <Card2 src="/House Images/home2.jpg" name="John Doe" property="3" />
      </FeatureFlex>
    </div>
  );
}
