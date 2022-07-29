import React from "react";
import { urlFor } from "../../../lib/client";
import { Card } from "../../UI/Card/Card";
import Heading from "../../Utils/Heading/Heading";
import { FeatureFlex } from "../Home/Feature/FeatureStyle";
import { AllProperty, AllPropertyBody, AllPropertyFlex, AllPropertySideBar } from "./ProductDetails";

function ProductPage({ property }) {
  return <div>
  <Heading title="All Properties." smallTtitle="Best Choice" />

<AllPropertyBody>
  <AllPropertyFlex>

<AllProperty>
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
  </AllProperty>

  <AllPropertySideBar>
    
  </AllPropertySideBar>

  </AllPropertyFlex>


</AllPropertyBody>
  
  </div>;
}

export default ProductPage;