import Link from "next/link";
import React from "react";
import { urlFor } from "../../../../lib/client";
import Button from "../../../UI/Button/Button";
import { Card, Card2, Card3 } from "../../../UI/Card/Card";
import { CardSmall, CardSmall2 } from "../../../UI/Card/CardStyle";
import Heading from "../../../Utils/Heading/Heading";
import { ButtonP, FeatureFlex } from "./FeatureStyle";

export function Feature({ home, category }) {
  return (
    <div>
      <Heading title="Popular Properties." smallTtitle="Best Choice" />

      <FeatureFlex>
        {home?.map((item) => (
          <Card3
            _id={item._id}
            key={item._id}
            src={urlFor(item.mainImage)}
            name={item.title}
            address={item.address}
            price={item.price.toLocaleString("en-US")}
            category={item.categories.title}
          />
        ))}
      </FeatureFlex>

      <ButtonP>
        <Link href="/products">
          <a>
            <Button name="See more" />
          </a>
        </Link>
      </ButtonP>
    </div>
  );
}

export function Cities({ category }) {
  return (
    <div>
      <Heading title="Top Categories" smallTtitle="Explore Categories" />

      <FeatureFlex>
        {category.map((item) => (
          <Card2
            src={urlFor(item.mainImage) ?? "/People Images/user3.jpg"}
            name={item.title}
            key={item._id}
          />
        ))}
      </FeatureFlex>
    </div>
  );
}
