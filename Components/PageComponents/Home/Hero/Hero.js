import React from "react";
import Button from "../../../UI/Button/Button";
import { HeroBody, HeroFLex, HeroImage, HeroText } from "./HeroStyle";

export const Hero = () => {
  return (
    <HeroBody>
      <HeroFLex>
        <HeroText>
          <span>A new way to find Properties</span>
          <h1>The best place to find your dream house</h1>
          <p>
            Huge number of propreties availabe here for buy, and sell, also you
            can find here co-living property, So you have lots of opportunity.
          </p>

          <Button name="Contact Us" />
        </HeroText>

        <HeroImage>
          <img src="/Assets/hero.png" alt="" />
        </HeroImage>
      </HeroFLex>
    </HeroBody>
  );
};

export const Provide = () => {
  return (
    <HeroBody>
      <HeroFLex className="provide__flex">
        <HeroImage className="provide__image">
          <img src="/Assets/provide.png" alt="" />
        </HeroImage>

        <HeroText>
          <span>Why Choose us</span>
          <h1 className="provide_heading">
            We Provide Right Choice of Properties that You need.
          </h1>
          <p>
            Huge number of propreties availabe here for buy, sell and Rent. Also
            you find here co-living property so lots opportunity you have to
            choose here and enjoy huge discount.
          </p>

          <Button name="Contact Us" />
        </HeroText>
      </HeroFLex>
    </HeroBody>
  );
};
