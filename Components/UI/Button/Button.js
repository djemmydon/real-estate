import React from "react";
import { SmallButton } from "./ButtonStyle";

function Button(props) {
  return  <SmallButton>{props.name}</SmallButton>;
}

export default Button;
