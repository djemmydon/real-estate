import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper";
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

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Thumbs } from "swiper";
import { BiBed } from "react-icons/bi";
import { FaShower, FaToilet } from "react-icons/fa";
function PropertiesDetails({ propertyDetail, trendingProperty }) {
  const [imageActivte, setImageActive] = useState(0);

  return (
    <PropertyBody>
      <PropertyFlex>
        <Property>
          <div className="property_image">
            <img
              src={
                urlFor(propertyDetail.mainImage) &&
                urlFor(propertyDetail.extrasrc[imageActivte])
              }
              alt=""
            />
          </div>

          <div className="property_extraimg">
            {propertyDetail.extrasrc.map((item, i) => (
              <div key={item._id} className="property_img">
                <img
                  src={urlFor(item)}
                  alt=""
                  onClick={() => setImageActive(i)}
                />
              </div>
            ))}
          </div>

          <div className="property_text">
            <h1>{propertyDetail.title}</h1>
            <h4>
              <span>Added By:</span> {propertyDetail.author.name}
            </h4>

            <div className="card_bottom">
              <span>
                <BiBed />
                {propertyDetail.bedroom} Bedroom
              </span>
              <span>
                <FaShower />
                {propertyDetail.bathroom} Bathroom
              </span>
              <span>
                <FaToilet />
                {propertyDetail.bedroom} Toilet
              </span>
            </div>

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
