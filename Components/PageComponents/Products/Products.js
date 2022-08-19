import React from "react";
import { urlFor } from "../../../lib/client";
import Button from "../../UI/Button/Button";
import { Card } from "../../UI/Card/Card";
import Heading from "../../Utils/Heading/Heading";
import { FeatureFlex } from "../Home/Feature/FeatureStyle";
import {
  AllProperty,
  AllPropertyBody,
  AllPropertyFlex,
  AllPropertySideBar,
  Loading,
} from "./ProductDetails";
import PulseLoader from "react-spinners/PulseLoader";

function ProductPage({ property }) {
  return (
    <div>
      <Heading title="All Properties." smallTtitle="Best Choice" />

      <AllPropertyBody>
        {property.length == 0 ? (
          <Loading>
            <PulseLoader color="#ff6500" size={10} />
          </Loading>
        ) : (
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
                  bedroom={item.bedroom}
                  bathroom={item.bathroom}
                  date={new Date(item._createdAt).toLocaleDateString()}
                  category={item.categories.title}
                  purpose={item.purposes.title}
                />
              ))}

              
            </AllProperty>
            <AllPropertySideBar></AllPropertySideBar>
          </AllPropertyFlex>
        )}
      </AllPropertyBody>
    </div>
  );
}

export default ProductPage;
