import styled from "styled-components";

export const ProductsContainer = styled.div`
max-width: 100%;
height: 100%;
padding 1rem;
background: ;
color: FDFAF6;
font-family:'aleo' sans-serif;
`;

export const ProductWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
`;


export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px; 
`;

export const ProductImg = styled.img`
    height: 300px;
    min-width: 200px;
    max-width: 100%;
    box-shadow: 8px 8px #E4EFE7;
    object-fit: cover;
`;

export const ProductsHeading = styled.h1`
    font-size:  clamp(2rem, 2.5vw, 3rem);
    text-align: center;
    margin-bottom: 1rem;
`;

export const ProductTitle = styled.h2`
    font-weight: 400;
    font-size: 1.5rem;
`;

export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
`; 

export const ProductDesc = styled.p`
    margin-bottom: 1rem;    
`; 

export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`; 
export const ProductButton = styled.div`
    font-size: 1rem;
    padding: 1rem 4rem;
    border: none;
    background: #064420;
    color: #fff;
    transition: 0.2 ease-out;
    
    &:hover{
        background: #FAF1E6;
        transition: 0.2s ease-out;
        cursor: pointer;
        color: #064420;
    }
`; 



  