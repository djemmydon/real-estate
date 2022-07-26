import React, { useRef } from "react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

import { Pagination, Navigation } from "swiper";
import Person from "./Person";
import styled from "styled-components";
import Heading from "../../../Utils/Heading/Heading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Body = styled.div`
  padding: 10px;

  @media screen and (max-width: 500px) {
    max-width: 100%;
  }
`;

const NextPrev = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  position: absolute;
  top: 0;
  margin-top: 10px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  background-color: var(--orange-color);
  display: flex;
  align-items: center;
  justify-content: center;
`;


function Testimonial() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Body>
      <Heading
        title="What People Says."
        smallTtitle=" People Says About Walls Property."
      />

      <Carousel
      responsive={responsive}
      rewind={true}
      >
        <Person />

        <Person />
        <Person />
        <Person />

        <Person />
      </Carousel>
    </Body>
  );
}

export default Testimonial;
