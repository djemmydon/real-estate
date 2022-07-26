import React from "react";
import { Card } from "../../../UI/Card/Card";
import Heading from "../../../Utils/Heading/Heading";
import { FeatureFlex } from "./FeatureStyle";

function Feature() {
  return (
    <div>
      <Heading title="Popular Properties." smallTtitle="Best Choice" />

      <FeatureFlex>
        <Card
          src="/House Images/home1.jpg"
          name="Three bedrooms Flat"
          address="253 Montril Street, New York "
          date="March 8, 2022"
          price="$20,000"
          consist=""
        />

        <Card
          src="/House Images/home2.jpg"
          name="Three bedrooms Flat"
          address="253 Montril Street, New York "
          date="March 8, 2022"
          price="$30,000"
          consist=""
        />

        <Card
          src="/House Images/home1.jpg"
          name="Three bedrooms Flat"
          address="253 Montril Street, New York "
          date="March 8, 2022"
          price="$25,000"
          consist=""
        />
      </FeatureFlex>
    </div>
  );
}

export default Feature;
