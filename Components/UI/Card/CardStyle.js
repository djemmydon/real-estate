import styled from "styled-components";

export const CardBig = styled.div`
  height: 200px;
  width: 100%;

  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 15px 0 rgb(0 0 0 / 10%);
  overflow-y: hidden;
  margin: 10px;
  transition: all 0.5s;
  @media screen and (max-width: 700px) {
    height: 23rem;
    width: 350px;
  }
  @media screen and (max-width: 370px) {

    width: 250px;
  }
  a {
    display: flex;
    flex-direction: row;

    .card_text {
      display: flex;
      flex-direction: column;

      background-color: white;
      z-index: 10;
      position: relative;
      padding: 10px;

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

      @media screen and (max-width:370px) {

        
      h1 {
        font-size: 0.7rem;
       
      }

      h2 {
        font-size: 1rem;
       
      }
      }
    }

    .card_image {
      max-width: 200px;
      transition: all 0.5s;
      img {
        width: 200px;
        height: 100%;
        position: relative;
        height: 200px;
        object-fit: cover;
      }
    }

    .card_bottom {
      display: flex;
      align-items: center;
      gap: 4px;

      margin-top: 1rem;
      span {
        display: flex;
        align-items: center;
        gap: 2px;
        font-size: 0.8rem;
        font-weight: 400;
        font-family: var(--karla-font);
      }

      @media screen and (max-width:350px) {
        span {
        display: flex;
        align-items: center;
        gap: 2px;
        font-size: 0.6rem;
        font-weight: 400;
        font-family: var(--karla-font);
      }
      }
    }

    .purpose_category {
      display: flex;
      font-size: 0.8rem;
      gap: 10px;

      p {
        color: white;
        padding: 0.3rem 0.93rem;
        border-radius: 5px;
      font-family: var(--karla-font);

      }
      .orange {
        background-color: var(--orange-color);
      }
      .green {
        background-color: var(--green-color);
      }
    }
    @media screen and (max-width: 700px) {
      width: 100%;
      height: 300px;
      flex-direction: column;

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
        height: 170px;
        transition: all 0.5s;
        img {
          width: 100%;

          height: 100%;
        }
      }
    }
  }
`;

export const CardSmall = styled.div`
  width: 250px;
  height: 300px;
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
    margin-top: 10px;
    background-color: white;
    overflow: hidden;
    z-index: 10;
    position: relative;

    h1 {
      font-size: 1.1rem;
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
    height: 200px;
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

  @media screen and (max-width: 600px) {
    width: 200px;
    height: 220px;

    .card_image {
      max-width: 100%;
      height: 150px;
      transition: all 0.5s;
      img {
        max-width: 100%;
      }
    }
  }

  &:hover .card_image img {
    transform: rotate(5deg) scale(1.2);
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
