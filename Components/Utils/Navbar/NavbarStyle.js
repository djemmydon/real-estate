import styled from "styled-components";

export const Navbody = styled.div`
  background-color: var(--bg-color);
  width: 100%;
  height: 130px;
`;

export const NavFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 2rem 2rem;
  position: relative;

  .logo {
    width: 90px;

    @media screen and (max-width: 800px) {
      width: 70px;
    }

    img {
      width: 100%;
    }
  }

  .nav_items {
    display: inline-flex;
    gap: 20px;
    align-items: center;

    ul {
      display: flex;
      padding-right: 0px;

      a {
        padding-left: 2rem;
        font-size: 1.2rem;
        font-weight: 200;
        font-family: var(--lora-font);
        transition: all 0.3s;

        &:hover {
          color: var(--orange-color);
        }
      }
    }
  }

  .nav_icons {
    display: none;

    .nav_ico {
      font-size: 300px;
    }
  }

  @media screen and (max-width: 800px) {
    .nav_items {
      display: none;
    }
    .nav_icons {
      display: block;
    }
  }
`;

export const NavMobile = styled.div`
  .not_active.active {
    transform: scaleY(1);
  }

  .not_active {
    transform: scaleY(0);
    display: flex;
    flex-direction: column;
    top: 5rem;
    right: 0;
    width: 250px;
    height: 450px;
    background: var(--bg-color);
    border: 1px solid var(--green-color);
    border-radius: 10px;
    position: absolute;
    z-index: 100;
    transition: all 0.3s;
    margin: 10px;
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    a {
      font-family: var(--lora-font);
      padding-top: 30px;
    }
  }

  .nav_button_mobile {
    padding-left: 15px;
  }

  @media screen and (min-width: 800px) {
    display: none;
  }
`;
