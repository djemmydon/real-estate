import styled from "styled-components";

export const HeroBody = styled.div`
  width: 100%;
  min-height: 100%;

  background-color: var(--bg-color);

  .provide__flex {
    gap: 50px;
  }
`;
export const HeroFLex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  gap: 30px;

  @media screen and (max-width: 800px) {
    flex-wrap: wrap;
    padding: 1rem 1rem;
  }
`;
export const HeroText = styled.div`
  display: inline;
  padding-top: 10px;
  flex-direction: column;
  span {
    font-size: 1rem;
    font-family: var(--karla-font);
    color: var(--orange-color);
  }

  h1 {
    font-size: 4rem;
    font-weight: 400;
    font-family: var(--lora-font);
    color: var(--green-color);
  }

  .provide_heading {
    font-size: 2.5rem;
  }

  p {
    font-size: 1rem;
    font-family: var(--karla-font);
  }

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap;

    h1 {
      font-size: 2.5rem;
      font-family: var(--lora-font);
      color: var(--green-color);
    }
  }
  @media screen and (max-width: 500px) {
   

    h1 {
      font-size: 1.5rem;
   
    }

    .provide_heading{
      font-size: 1.5rem;

    }

    p {
    font-size: 0.8rem;
    font-family: var(--karla-font);
  }
  }
`;

export const HeroImage = styled.div`
  max-width: 100%;
  border-radius: 10px;
  position: relative;

  img {
    max-width: 100%;
    border-radius: 10px;
  }
`;
export const HeroImageSmall = styled.div`
  max-width: 300px;
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;

  img {
    max-width: 300px;
    border-radius: 10px;
  }
`;
