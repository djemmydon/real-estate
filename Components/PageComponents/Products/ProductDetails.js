import styled from "styled-components";

export const AllPropertyBody = styled.div`
  padding: 2rem 3rem;
  margin: 0 auto;
  background-color: white;


`;

export const AllPropertyFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media screen and (max-width: 900px){
    flex-wrap: wrap;
}
`;
export const AllProperty = styled.div`
  min-width: 20%;
`;
export const AllPropertySideBar = styled.div`
  min-width: 30%;
  background-color: var(--light-green-color);
  border-radius: 5px;
`;
