import React from "react";
import styled from "styled-components";
import Button from "../../../UI/Button/Button";

const Body = styled.div`
  max-width: 100%;
  height: 70vh;
  margin: 2rem 0;
  background-image: url(/Assets/housebg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
`;
const ShadowOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(1, 122, 7, 0.493);
`;

const FlexSide = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  padding:0 1rem;

  @media screen and (max-width: 900px) {
  flex-wrap: wrap;
  }
`;

const TextSide1 = styled.div`
  width: 600px;
  
  h1 {
    font-family: var(--lora-font);
    font-size: 3rem;
    color: white;
  }

  p {
    font-family: var(--karla-font);
    font-size: 1.2rem;
    color: white;
  }

  @media screen and (max-width: 1118px) {
    width: 400px;

    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
`;
const TextSide2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;

  p {
    font-family: var(--karla-font);
    font-size: 1.2rem;
    color: white;
  }

  @media screen and (max-width: 1118px) {
    width: 400px;

    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 900px) {
    max-width: 100%;
  }
`;

function Priority() {
  return (
    <Body>
      <FlexSide>
        <TextSide1>
          <h1>Your Need, Our Priority</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
            porttitor congue massa.
          </p>

          <Button name="Contact Us" />
        </TextSide1>

        <TextSide2>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </TextSide2>
      </FlexSide>
      <ShadowOverlay />
    </Body>
  );
}

export default Priority;
