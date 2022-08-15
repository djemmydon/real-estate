import Link from "next/link";
import React from "react";
import { CardBig, CardSmall, CardSmall2 } from "./CardStyle";
import { FaShower, FaToilet } from "react-icons/fa";
import { BiBed } from "react-icons/bi";
import moment from "moment";
//FaShower
//FaToilet

export function Card(props) {
  return (
    <CardBig>
      <Link href={`/products/${props._id}`}>
        <a>
          <div className="card_image">
            <img src={props.src} alt="" />
          </div>
          <div className="card_text">
            <h1>{props.name}</h1>
            <h5>{props.address}</h5>
            <p>Added : {props.date}</p>
            <h2>Price : &#x20A6;{props.price}</h2>

            <div className="card_bottom">
              <span>
                <BiBed />
                {props.bedroom} Bedrooms
              </span>
              <span>
                <FaShower />
                {props.bathroom} Bathrooms
              </span>
              <span>
                <FaToilet />
                {props.bedroom} Toilet
              </span>
            </div>

            <div className="purpose_category">
              <p className="green">{props.category}</p>
              <p className="orange">{props.purpose}</p>
            </div>
          </div>
        </a>
      </Link>
    </CardBig>
  );
}
export function Card2(props) {
  return (
    <Link href={`/products/category/${props.name}`}>
      <CardSmall>
        <div className="card_image">
          <img src={props.src} alt="" />
        </div>
        <a className="card_text">
          <h1>{props.name}</h1>
          <h5> Properties</h5>
        </a>
        <div>
          <div></div>
        </div>
      </CardSmall>
    </Link>
  );
}

export function Card3(props) {
  return (
    <CardSmall2>
      <Link href={`/products/${props._id}`}>
        <a>
          <div className="card_image">
            <img src={props.src} alt="" />
          </div>
          <div className="card_text">
            <h1>{props.name}</h1>
            <h5>{props.address}</h5>
            <h2>Price : &#x20A6;{props.price}</h2>
            <span></span>
          </div>
        </a>
      </Link>
    </CardSmall2>
  );
}
