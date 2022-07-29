import styled from "styled-components";

import { keyframes } from 'styled-components'
const breatheAnimation = keyframes`

 
`

export const PropertyBody = styled.div`
  padding: 2rem 5rem;
  margin: 0 auto;
  background-color: white;

  @media screen and (max-width: 600px) {
    padding: 2rem 0.5rem;
  }
`;

export const PropertyFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }
`;

export const Property = styled.div`
  min-width: 70%;

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
  }

  .property_image {
  width: 100%;
  height: 500px;
    overflow: hidden;

    img {
      width: 100%;
      height: 500px;
      border-radius: 5px;
      object-fit: cover;
      transition: all 0.5s;
      animation-name: ${breatheAnimation};
 animation-duration: 8s;
    }
  }

  .property_extraimg {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 1rem 0;

    .property_img {
      width: 90px;
      height: 80px;
      overflow: hidden;
      border-radius: 5px;

      @media screen and (max-width: 600px){
      
        width: 50px;
      height: 50px;
    }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

   .card_bottom{
      display: flex;
      align-items: center;
      gap: 12px;

      margin-top: 1rem;
      span{
        display: flex;
        align-items:center;
        gap: 3px;
        font-size: 1rem;
        font-weight: 400;
        font-family: var(--karla-font);
      }
    }
  .property_text {
    h1 {
      font-size: 3rem;
      font-family: var(--lora-font);
      color: var(--green-color);
      font-weight: 400;

      @media screen and (max-width: 600px) {
        font-size: 1.8rem;
      }
    }

    p {
      font-family: var(--karla-font);
      font-size: 1rem;
      font-weight: 300;
      margin: 0;
    }

    h4 {
      padding: 0.4rem 0;
      font-family: var(--karla-font);
      font-size: 1em;
      font-weight: 300;
      span {
        font-weight: 500;
        color: var(--orange-color);
      }
    }
  }

  .property_amenities {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding-bottom: 2rem ;

    .property_amenity {
      display: flex;
      align-items: center;
      gap: 2px;
      h1 {
        font-family: var(--karla-font);
        font-size: 1rem;
        font-weight: 400;
      }

      img {
        width: 15px;
      }
    }
  }
`;

export const PropertySideBar = styled.div`
  min-width: 30%;
  .property_sidebar{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color:var(--light-green-color);
    padding: 10px;
  }
`;



