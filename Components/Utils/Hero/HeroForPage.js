import React from "react";
import styled from "styled-components";

const Body = styled.div`
  max-width: 100%;
  height: 200px;
  background-image: url(/Assets/city.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 100% 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1{
    font-size: 3rem;
    color: white;
    font-family: var(--karla-font);
    padding: 0;

  }

  p {
    color: white;
    font-family: var(--karla-font);
    font-size: 1rem;
    color: white;
    padding: 0;
    margin: 0;
    text-align: center;
  }
`;

function HeroForPage(props) {
  return (
    <Body>
      <h1>{props.title}</h1>
      <p>{props.name}</p>
    </Body>
  );
}

export default HeroForPage;
