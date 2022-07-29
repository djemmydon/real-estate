import Link from "next/link";
import React from "react";
import { CardBig, CardSmall, CardSmall2 } from "./CardStyle";
import {FaShower, FaToilet} from "react-icons/fa"
import {BiBed} from "react-icons/bi"
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
            <p>Added :{props.date}</p>
            <h2>Price : &#x20A6;{props.price}</h2>
            <span>{new Date(props.date).toString()}</span>
          
          <div className="card_bottom">
            <span><BiBed/>{props.bedroom} Bedroom</span>
            <span><FaShower/>{props.bathroom} Bathroom</span>
            <span><FaToilet/>{props.bedroom} Toilet</span>
          </div>
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
