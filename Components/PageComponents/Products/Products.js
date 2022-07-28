import React from "react";
import { urlFor } from "../../../lib/client";
import { Card } from "../../UI/Card/Card";
import Heading from "../../Utils/Heading/Heading";
import { FeatureFlex } from "../Home/Feature/FeatureStyle";

function ProductPage({ property }) {
  return <div>
  <Heading title="All Properties." smallTtitle="Best Choice" />

  <FeatureFlex>
    {property?.map((item) => (
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
  </div>;
}

export default ProductPage;
