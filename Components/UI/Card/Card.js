import Link from "next/link";
import React from "react";
import { CardBig, CardSmall } from "./CardStyle";

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
            <p>Added :{props.date}</p>
            <h2>Price : &#x20A6;{props.price}</h2>
            <span></span>
          </div>
          <div>
            <div></div>
          </div>
        </a>
      </Link>
    </CardBig>
  );
}
export function Card2(props) {
  return (
    <CardSmall>
      <div className="card_image">
        <img src={props.src} alt="" />
      </div>

      <div className="card_text">
        <h1>{props.name}</h1>
        <h5>{props.property} Properties</h5>
      </div>

      <div>
        <div></div>
      </div>
    </CardSmall>
  );
}
