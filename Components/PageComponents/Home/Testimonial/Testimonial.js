import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import SwiperCore from 'swiper'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import Person from "./Person";
import styled from "styled-components";
import Heading from "../../../Utils/Heading/Heading";

const Body = styled.div`
  height: 300px;
  margin: 0 2rem;

  @media screen and (max-width:500px) {
    max-width: 100%;
  }

  
`;

const NextPrev = styled.div`
display: flex;
justify-content:space-between;
gap: 10px;
position: absolute;
top: 0;
margin-top: 10px;


`;

const Icon = styled.div`
width: 40px;
height: 40px;
background-color:var(--orange-color);
display: flex;
align-items:center;
justify-content: center;


`;


SwiperCore.use([Navigation])
function Testimonial() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <Body>
        <Heading title="What People Says." smallTtitle=" People Says About Walls Property." />
   
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        navigation={{
            // Both prevEl & nextEl are null at render so this does not work
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
           <NextPrev>
        <Icon className=".prev">
          <GrLinkPrevious />
        </Icon>

        <Icon >
          <GrLinkNext />
        </Icon>
      </NextPrev>
        <SwiperSlide>
          <Person />
        </SwiperSlide>
        <SwiperSlide>
          <Person />
        </SwiperSlide>
        <SwiperSlide>
          <Person />
        </SwiperSlide>
      </Swiper>
    </Body>
  );
}

export default Testimonial;
