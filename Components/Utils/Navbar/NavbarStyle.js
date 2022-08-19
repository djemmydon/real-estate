import styled from "styled-components";

export const Navbody = styled.div`
  background-color: var(--bg-color);
  width: 100%;
  height: 120px;
  padding: 0 0 20px;
`;
export const NavTop = styled.div`
  background-color: var(--green-color);
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  color: white;
  font-family: var(--karla-font);

  p {
    font-size: 1rem;

    @media screen and (max-width: 600px) {
      font-size: 0.7rem;
    }
  }

  a {
    transition: 0.3s;
    &:hover {
      color: var(--orange-color);
    }
  }
`;

export const NavFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  padding: 0.4rem 2rem;
  position: relative;

  @media screen and (max-width: 800px) {
    padding: 0.4rem 0.6rem;
  }
  .logo {
    width: 50px;
    margin: 10px;

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
        font-size: 0.9rem;
        font-weight: 200;
        font-family: var(--lora-font);
        transition: all 0.3s;
        position: relative;

        &:hover {
          color: var(--orange-color);
        }
      }

      a:hover > .sub_nav {
        display: block;
        perspective: 100%;
      display: flex;

      }
    }

    .sub_nav {
      position: absolute;
      display: flex;
      flex-direction: column;
      background-color: var(--bg-color);
      height: 100px;
      width: 200px;
      gap: 12px;
      justify-content: center;
      display: none;
      transition: all 0.3s;

      a {
        padding: 3px 20px;
        color: black;
        font-size: 1rem;

        &:hover {
          color: var(--orange-color);
          background-color: white;
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
    transform: scale(1);
  }

  .not_active {
    overflow: hidden;
    transform: scale(0);
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
