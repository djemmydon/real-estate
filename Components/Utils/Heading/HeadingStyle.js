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

}

@media screen and (max-width: 800px){
padding: 10px 1rem;
    
h1{
  font-size: 1.5rem;
}
 }
@media screen and (max-width: 500px){
padding: 10px 1rem;
    
h1{
  font-size: 1.2rem;
}
 }

`