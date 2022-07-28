import React from "react";
import { urlFor } from "../../../lib/client";
import { Card, Card2, Card3 } from "../../UI/Card/Card";
import { HeadingStyleSmall } from "../../Utils/Heading/HeadingStyle";
import HeadingSmall from "../../Utils/Heading/HeadSmall";
import {
  Property,
  PropertyBody,
  PropertyFlex,
  PropertySideBar,
} from "./PropertyStyle";

function PropertiesDetails({ propertyDetail, trendingProperty }) {
  return (
    <PropertyBody>
      <PropertyFlex>
        <Property>
          <div className="property_image">
            <img src={urlFor(propertyDetail.mainImage)} alt="" />
          </div>

          <div className="property_extraimg">
            {propertyDetail.extrasrc.map((item) => (
              <div key={item._id} className="property_img">
                <img src={urlFor(item)} alt="" />
              </div>
            ))}
          </div>

          <div className="property_text">
            <h1>{propertyDetail.title}</h1>
            <h4>
              <span>Added By:</span> {propertyDetail.author.name}
            </h4>

            <HeadingSmall title="Description" />
            <h5>{propertyDetail.address}</h5>

            <p>{propertyDetail.description}</p>
          </div>
          <HeadingSmall title="Property Amenities" />

          <div className="property_amenities">
            {propertyDetail.amenities.map((item) => (
              <div key={item._id} className="property_amenity">
                <img src="/Assets/mark.png" alt="" />
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
        </Property>

        <PropertySideBar>
          <div className="property_sidebar">
            {trendingProperty?.map((item) => (
              <div className=" " key={item._id}>
                <Card3
                  _id={item._id}
                  key={item._id}
                  src={urlFor(item.mainImage)}
                  name={item.title}
                  address={item.address}
                  price={item.price.toLocaleString("en-US")}
                  className="property_card"
                />
              </div>
            ))}
          </div>
        </PropertySideBar>
      </PropertyFlex>
    </PropertyBody>
  );
}

export default PropertiesDetails;
