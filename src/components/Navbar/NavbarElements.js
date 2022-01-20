import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaMugHot } from "react-icons/fa";

export const Nav = styled.nav`
background-color: #E4EFE7;
color: #064420;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
font-weight: 700;
`;

export const NavLink = styled(Link)`
color: #064420;
font-size: 2rem;
display: flex;
align-items: center;
justify-content: center;
text-decoration: none;
cursor: pointer;

@media screen and (max-width: 400px){
    position: absolute;
    top: 10px;
    left: 25px;
}
`;

export const NavIcon = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
top: 20px;
right: 20px;
cursor: pointer;
color: white;

`; 

export const Bars = styled(FaMugHot)`
position: relative;
font-size: 5rem;
margin: 30px;
display: flex;
justify-content: space-around;
align-items: center;
`;