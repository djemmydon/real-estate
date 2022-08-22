import React from "react";
import styled from "styled-components";

const Body = styled.div`
  position: relative;
  width: 450px;
  max-height: 300px;
  margin: 4rem auto;

  @media screen and (max-width: 500px) {
    width: 100%;
    max-height: 400px;
  }
`;
const TextSide = styled.div`
  height: 120px;
  width: 100%;
  padding: 0 10px;
  background: var(--bg-color);
  border-radius: 10px;

  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 4rem 0;
    max-height: 100%;
    padding: 5px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-size: 0.8rem;
    padding: 10px;
    font-family: var(--karla-font);
  }
`;

const Avatar = styled.div`
  position: absolute;
  top: 5rem;
  width: 60px;
  height: 60px;
  border: 3px solid var(--orange-color);
  border-radius: 10rem;

  @media screen and (max-width: 500px) {
    top: 8rem;
  }

  img {
    width: 100%;
    object-fit: cover;
    border-radius: 10rem;
  }
`;

const NameAbout = styled.div`
  width: 120px;
  height: 50px;
  box-shadow: 0 2px 15px 0 rgb(0 0 0 / 10%);
  position: absolute;
  right: 0;
  top: 5rem;
  background-color: white;
  border-radius: 10px;
  padding: 5px 10px;
  font-family: var(--karla-font);
  @media screen and (max-width: 500px) {
    top: 8rem;
  }

  p {
    margin: 0;
  }

  span {
    font-size: 10px;
    color: var(--orange-color);
    font-style: italic;
  }
`;

function Person(props) {
  return (
    <Body>
      <TextSide>
        <p>
          Real estate festival is one of the famous feval for explain to you how
          all this mistaolt deand praising pain wasnad I will give complete
        </p>
      </TextSide>

      <Avatar>
        <img src="/People Images/user1.jpg" alt="" />
      </Avatar>

      <NameAbout>
        <p>User Name</p>
        <span>Digital Agency</span>
      </NameAbout>
    </Body>
  );
}

export default Person;
