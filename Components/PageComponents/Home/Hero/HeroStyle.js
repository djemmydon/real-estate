import styled from "styled-components";

export const HeroBody = styled.div`
  width: 100%;
  height: 80vh;
  background-image: url("/Assets/home-banner.jpg.webp");
  background-repeat: no-repeat;
  /* background-size: 100% 100%; */
  background-position: 100%;
  object-fit: cover;
  position: relative;
  background-attachment: fixed;

  /* .overlay {
    height: 7.6rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(17, 27, 27, 0.430),
      #000
    );
    padding-bottom: 30px;
  } */
`;
export const HeroFLex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  z-index: 1;
  position: relative;
  text-align: center;
`;
export const HeroText = styled.div`
  width: 700px;
  color: white;
  padding: 10px;

  @media screen and (max-width: 700px) {
    width: 100%;

    h1 {
      font-size: 1rem;
    }
  }

  span {
    font-size: 0.9rem;
    font-family: var(--karla-font);
    background-color: var(--orange-color);
    padding: 5px 10px;
    border-radius: 100px;
    margin: 15px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 15px;
    font-family: var(--karla-font);
    margin: 15px;
    color: black;
    @media screen and (max-width: 700px) {
      width: 100%;

      font-size: 2rem;
    }
  }

  p {
    font-family: var(--karla-font);
    color: var(--bg-color);
    margin-bottom: 15px;
    color: black;

    @media screen and (max-width: 700px) {
      width: 100%;

      font-size: 1rem;
    }
  }

  .search {
    margin: 10px 0;
    input {
      width: 500px;
      height: 40px;
      border-radius: 100px;
      padding: 10px;
      font-family: var(--karla-font);
      border: none;
      outline: none;
      transition: all 0.3s ease-in-out;
      border: solid 2px #fff;
      font-size: 1rem;

      @media screen and (max-width: 700px) {
        width: 100%;
      }

      &:focus {
        border: solid 2px var(--orange-color);
      }
    }

    input::placeholder {
      font-family: var(--karla-font);
      padding: 10px;
    }
  }
`;

export const HeroImage = styled.div``;
export const HeroImageSmall = styled.div``;
