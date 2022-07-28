import React from "react";
import {  HeadingStyleSmall } from "./HeadingStyle";

function HeadingSmall(props) {
  return (
    <HeadingStyleSmall>
      <h6 className="text">{props.title}<span>.</span></h6>
    </HeadingStyleSmall>
  );
}

export default HeadingSmall;
