import styled from "styled-components";



export const HeroBody = styled.div`
width:100%;
min-height: 100%;

background-color: var(--bg-color);
`
export const HeroFLex = styled.div`
display: flex;
justify-content:center;
align-items:center;
padding: 1rem 2rem;

@media screen and (max-width: 800px) {
    flex-wrap: wrap;

}

`
export const HeroText = styled.div`
display: inline;
padding-top: 10px;
flex-direction: column;
span{
    font-size: 1rem;
    font-family: var(--karla-font);
    color: var(--orange-color);
}

h1{
    font-size: 4rem;
    font-weight: 400;
    font-family: var(--lora-font);
    color: var(--green-color);
}

p{
    font-size: 1rem;
    font-family: var(--karla-font);
}


@media screen and (max-width: 1000px) {
    flex-wrap: wrap;

h1{
font-size: 2.5rem;
font-family: var(--lora-font);
color: var(--green-color);
}
}
`


export const HeroImage = styled.div`
width: 100%;

img {
    max-width:100%;
}
`