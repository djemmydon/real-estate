import styled from "styled-components";

export const CardBig = styled.div`
  width: 300px;
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
    padding: 20px;

    h1 {
      font-size: 1.2rem;
      color: #01614e;
      font-weight: 400;
      font-family: var(--lora-font);
    }

    h2 {
      font-size: 1.3rem;
      color: #01614e;
      font-weight: 400;
      font-family: var(--lora-font);

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
      transition: all 0.5s;
      height: 200px;
      object-fit: cover;
    }
  }

  &:hover .card_image img {
    transform: scale(1.1);
  }

  @media screen and (max-width: 500px) {
    width: 200px;
    height: 300px;
    

    .card_text {
      padding: 10px;
    
      h1 {
        font-size: 1rem;
        color: #01614e;
        font-weight: 400;
      }
      h2 {
        font-size: 1rem;
        color: #01614e;
        font-weight: 400;
      }

      h5 {
        font-size: 0.7rem;
        font-weight: 400;
        text-decoration: underline;
      }

      p {
        font-size: 0.8rem;
      }
    }

    .card_image {
    max-width: 100%;
    height: 130px;
    transition: all 0.5s;
    img {
      width: 100%;
      
      height: 100%;

    }

  }
    
  }
`;

export const CardSmall = styled.div`
  width: 250px;
  height: 400px;
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

    h2 {
      font-size: 1.3rem;
      color: #01614e;
      font-weight: 400;
    }

    h5 {
      font-size: 1rem;
      font-weight: 400;
      font-family: var(--karla-font);
      color: var(--orange-color);
    }
  }

  .card_image {
    width: 100%;
    height: 300px;
    transition: all 0.5s;
    img {
      width: 100%;
      height: 100%;
      position: relative;
      transition: all 0.2s;
      object-fit: cover;
    }
  }

  @media screen and (max-width: 600px) {
    width: 150px;
    height: 230px;

    .card_image {
      max-width: 100%;
      height: 150px;
      transition: all 0.5s;
      img {
        max-width: 100%;
      }
    }
  }
`;

export const CardSmall2 = styled.div`
  width: 250px;
  height: 270px;
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
    padding: 10px;

    h1 {
      font-size: 1rem;
      color: #01614e;
      font-weight: 400;
      font-family: var(--lora-font);
    }

    h2 {
      font-size: 1rem;
      color: #01614e;
      font-weight: 400;
      font-family: var(--lora-font);
    }

    h5 {
      font-size: 0.7rem;
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
    width: 100%;
    height: 150px;
    transition: all 0.5s;
    img {
      width: 100%;
      height: 100%;
      position: relative;
      transition: all 0.5s;
      
      object-fit: cover;
    }
  }

  &:hover .card_image img {
    transform: scale(1.1);
  }
`;
