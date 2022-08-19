import styled from "styled-components";

export const AllPropertyBody = styled.div`
  padding: 2rem 3rem;
  margin: 0 auto;
  background-color: white;


`;

export const Loading = styled.div`
display: flex;
justify-content: center;
height: 50vh;
`

export const AllPropertyFlex = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;

  @media screen and (max-width: 900px){
    flex-wrap: wrap;
}
`;
export const AllProperty = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AllPropertySideBar = styled.div`
  min-width: 30%;
  background-color: var(--light-green-color);
  border-radius: 5px;
`;
