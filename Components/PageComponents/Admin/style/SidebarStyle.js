import styled from "styled-components";

export const SideBarBody = styled.div`
  position: fixed;
  width: 250px;
  height: 100vh;
  background-color: var(--bg-color);
  transition: all 0.2s;
  border-top: 1px solid var(--green-color);

  @media screen and (max-width: 900px) {
    width: 70px;
  }
`;
export const SideNav = styled.div`
  display: flex;
  flex-wrap: nowrap;

  flex-direction: column;
`;

export const SideNavItem = styled.a`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 5px;
  padding: 20px 10px;
  cursor: pointer;
  transition: all 0.2s;
  :hover {
    background-color: var(--light-green-color);
  }

  h5 {
    font-family: var(--karla-font);
    color: var(--green-color);
    font-size: 1rem;
    transition: 0.3s;

    @media screen and (max-width: 900px) {
      display: none;
    }
  }

  @media screen and (max-width: 900px) {
  }
`;
