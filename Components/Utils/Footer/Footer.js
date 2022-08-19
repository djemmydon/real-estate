import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

const Body = styled.div`
  height: 150px;
  max-width: 100%;


`;

const FlexSiide = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 600px){
   flex-direction: column;
  }
`;

const Image = styled.div`
  width: 70px;

  img {
    width: 100%;
    width: 70%;
  }
`;

const Text = styled.div`
p{
    font-size: 1rem;
    font-family: var(--karla-font);
}

`;

const Icon = styled.div`
display: flex;
gap: 10px;

a{
    transition: all 0.2s;

    &:hover{
transform: scale(1.2);
}
}


`;

function Footer() {
  return (
    <Body>
      <FlexSiide>
        <Image>
          <img src="/Assets/logo1.png" alt="" />
        </Image>

        <Text>
          <p>©2022 Peculiar. All Rights Reserved.</p>
        </Text>

        <Icon>
          <Link href="https://www.instagram.com">
            <a>
              <AiFillInstagram color="#ff6500" size="25" />
            </a>
          </Link>

          <Link href="https://www.facebook.com">
            <a>
              <BsFacebook  color="#ff6500" size="25" />
            </a>
          </Link>

          <Link href="https://wa.me" >
            <a>
              <IoLogoWhatsapp  color="#ff6500" size="25"/>
            </a>
          </Link>
        </Icon>
      </FlexSiide>
    </Body>
  );
}

export default Footer;
