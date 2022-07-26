import React from "react";
import { CardBig } from "./CardStyle";

export function Card(props) {
  return (

      <CardBig>
        <div className="card_image">
          <img src={props.src} alt="" />
        </div>

        <div className="card_text">
          <h1>{props.name}</h1>
          <h5>{props.address}</h5>
          <p>Added :{props.date}</p>
          <h2>Price :{props.price}</h2>
          <span></span>
        </div>

        <div>
          <div></div>
        </div>
      </CardBig>
 
  );
}
