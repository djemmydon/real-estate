import React, { useEffect, useState } from "react";
import { urlFor } from "../../../lib/client";
import Button from "../../UI/Button/Button";
import { Card } from "../../UI/Card/Card";
import Heading from "../../Utils/Heading/Heading";
import { ButtonP, FeatureFlex } from "../Home/Feature/FeatureStyle";
import {
  AllProperty,
  AllPropertyBody,
  AllPropertyFlex,
  AllPropertySideBar,
  Loading,
} from "./ProductDetails";
import PulseLoader from "react-spinners/PulseLoader";
import BeatLoader from "react-spinners/BeatLoader";

function ProductPage({ property }) {
  const [more, setMore] = useState(3);
  const [loading, setLoading] = useState(false);

  const load = () => {
    setLoading(true);
    setMore((prevLoad) => prevLoad + 3);
    setLoading(false);
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(true);

  //     setMore();
  //     setLoading(true);
  //   }, 300);
  // }, []);

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
              {property?.slice(0, more).map((item) => (
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

              <ButtonP onClick={load}>
        
                <Button name="Load More" />
              </ButtonP>
            </AllProperty>
            <AllPropertySideBar></AllPropertySideBar>
          </AllPropertyFlex>
        )}
      </AllPropertyBody>
    </div>
  );
}

export default ProductPage;
