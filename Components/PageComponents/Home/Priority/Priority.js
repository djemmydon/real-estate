import React from "react";
import styled from "styled-components";
import Button from "../../../UI/Button/Button";

const Body = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 2rem 0;
  background-image: url(/Assets/housebg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;
  position: relative;
  padding: 7.5rem 0rem;
`;
const ShadowOverlay = styled.div`
  height: 7.6rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  padding-bottom: 30px;
`;

const FlexSide = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0 1rem;

  @media screen and (max-width: 900px) {
    flex-wrap: wrap;
  }
`;

const TextSide1 = styled.div`
  width: 600px;
  height: 100%;
  padding: 7.5rem 4rem;

  /* From https://css.glass */
  background: rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  h1 {
    font-family: var(--lora-font);
    font-size: 3rem;
    color: black;
  }

  p {
    font-family: var(--karla-font);
    font-size: 1.2rem;
    color: black;
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

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 1.5rem;
    }

    p {
      font-size: 0.8rem;
      font-family: var(--karla-font);
    }
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
    color: black;
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
      </FlexSide>
      <ShadowOverlay />
    </Body>
  );
}

export default Priority;
