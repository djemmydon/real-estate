import styled from "styled-components";

export const CardBig = styled.div`
  width: 350px;
  height: 450px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 15px 0 rgb(0 0 0 / 10%);
  overflow: hidden;
  margin: 10px;
  transition: all 0.5s;



  .card_text {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 5px;
    background-color: white;
    overflow: hidden;
    z-index: 10;
    position: relative;

    h1 {
      font-size: 1.5rem;
      color: #01614e;
      font-weight: 400;
      font-family: var(--lora-font);
    }

    h2{
        font-size: 1.3rem;
      color: #01614e;
      font-weight: 400;
    }

    h5 {
      font-size: 1rem;
      font-weight: 400;
      text-decoration: underline;
      font-family: var(--karla-font);
    }

    p {
      font-size: 0.8rem;
      font-family: var(--lora-font);
    }
  }

  .card_image {
    max-width: 100%;
    transition: all 0.5s;
    img {
      max-width: 100%;
      height: 100%;
      position: relative;
    transition: all 0.2s;

    }
  }

&:hover{
    transform: translateY(-5px );
}
  &:hover .card_image img {
    transform: scale(1.1);
  }

  @media screen and (max-width: 500px) {
    width: 250px;
  height: 350px;

  .card_text {
    

    h1 {
      font-size: 1.2rem;
      color: #01614e;
      font-weight: 400;

    }
    h2 {
      font-size: 1.3rem;
      color: #01614e;
      font-weight: 400;
    }

    h5 {
      font-size: .8rem;
      font-weight: 400;
      text-decoration: underline;
    }

    p {
      font-size: 0.8rem;
    }
  }
  }
`;
