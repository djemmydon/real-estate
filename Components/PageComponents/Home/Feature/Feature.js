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
            key={item._id}
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
      <Heading title="Top Agencies" smallTtitle="Explore Agencies" />

      <FeatureFlex>
        <Card2 src="/People Images/user3.jpg" name="John Doe" property="3" />
        <Card2 src="/People Images/user1.jpg" name="Mathew Biodun" property="5" />
        <Card2 src="/People Images/user2.jpg" name="Ada Baby" property="7" />
        <Card2 src="/People Images/user3.jpg" name="Sam Loko" property="10" />
      </FeatureFlex>
    </div>
  );
}
