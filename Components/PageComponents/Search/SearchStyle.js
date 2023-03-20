import styled from "styled-components";

export const SearchBody = styled.div`
  padding: 3rem 4rem;

  @media screen  and (max-width:700px){
    padding: 3rem 0rem;
  }


  .search_heading{
    width: 100%;
    margin: 1rem 0rem;
    text-align: center;

    h1{
        font-size: 1.4rem;
        font-family: var(--lora-font);
        font-weight: 400;
        color:var(--green-color);
    }
  }
`;

export const SearchFLex = styled.div`
  display: flex;
  justify-content: center;
  gap:1rem;
  flex-wrap: wrap;
`;

export const SearchSelect = styled.div`

  select{
    width:100px;
    height: 30px;
    font-family: var(--karla-font);
    font-size: 1;
    outline: none;
    border:1px solid var(--orange-color) ;
    border-radius:5px
  }
`;

export const NotFound = styled.div`
  padding: 10px;

  select{
    width:130px;
    height: 30px;
    font-family: var(--karla-font);
    font-size: 1;
    border-radius: 10px;
    outline: none;
    border:1px solid var(--orange-color) ;
    padding-inline: 5px;
  }
`;
