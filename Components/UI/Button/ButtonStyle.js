import styled from "styled-components"


export const SmallButton = styled.button`
    padding: 0.6rem 2rem;
    border: none;
    background-color:var(--green-color);
    font-family: var(--lora-font);
    color: #FFFFFF;
    border-radius: 5px;
    font-size: 15px;
    transition: all 0.3s;


    &:hover{
        background-color: var(--orange-color);
    }

`