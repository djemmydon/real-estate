import styled from "styled-components";



export const FeatureBody = styled.div`

`
export const FeatureFlex = styled.div`
display: flex;
flex-wrap:wrap;
justify-content:center;
grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
justify-items: center;

margin: 2rem 0;

@media screen and (max-width: 600px) {
grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
    
}
@media screen and (max-width: 400px) {
grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    
}

`

export const ButtonP= styled.div`
display: flex;
justify-content: center;
padding: 2rem 0;
`
