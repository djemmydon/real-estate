import styled from "styled-components";



export const HeadingStyle = styled.div`
display: flex;
justify-content: space-between;
padding: 2rem 7rem;
align-items: center;

h1{
    color: var(--green-color);
    font-family: var(--lora-font);
    font-weight: 400;
}
p{
    margin: 0;
    color: var(--orange-color);
    font-family: var(--karla-font);
}
h5{
  margin: 0;
    color: var(--green-color);
    font-family: var(--karla-font);
    font-weight: 400;

}

@media screen and (max-width: 800px){
padding: 10px 1rem;
    
h1{
  font-size: 1.1rem;
}
 }
@media screen and (max-width: 500px){
padding: 10px 1rem;
    
h1{
  font-size: 1.2rem;
}

p{
  font-size: 0.8rem;
}
 }

`


export const  HeadingStyleSmall = styled.div`
h6{
    color: var(--green-color);
    font-family: var(--lora-font);
    font-weight: 400;
    font-size: 1.6rem;
    padding:1rem 0;

    span{
    
      font-size: 30px;
      color: var(--orange-color);
    }
}

`