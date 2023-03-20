import React from "react";
import Button from "../../../UI/Button/Button";
import {
  HeroBody,
  HeroFLex,
  HeroImage,
  HeroImageSmall,
  HeroText,
} from "./HeroStyle";

export const Hero = () => {
  return (
    <HeroBody>
      <HeroFLex>
        <HeroText>
          <span>A new way to find Properties</span>
          <h1>Delivering High Quality Projects Property Valuation</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>

          {/* <div className="search">
            <input
              type="text"
              placeholder="Address, School, City, Zip or Neighborhood
"
            />
          </div> */}
          {/* <Button name="Contact Us" /> */}
        </HeroText>

        <HeroImage></HeroImage>
      </HeroFLex>
      <div className="overlay"></div>
    </HeroBody>
  );
};

export const Provide = () => {
  return (
    <div>
      {/* <HeroFLex className="provide__flex">
        <HeroImage className="provide__image">
          <img src="/Assets/provides.jpg" alt="" />
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

          <Button name="Explore" />
        </HeroText>
      </HeroFLex> */}
    </div>
  );
};
