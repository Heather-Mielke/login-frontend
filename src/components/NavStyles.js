import style from "styled-components";
import { Link } from "react-router-dom";

export const NavContainer = style.div `
    width: 100vw;
    background: transparent;
    color: white;
    font-size: 40px;
    display: flex;
    justify-content: space-between;
    padding: 10px;
    position: fixed;
    z-index:2;
    
`

export const LogoContainer = style.div `
    width: 50%;
    color: white;
    font-family: 'Montserrat', arial;
    font-size: 40px;
   

`
export const ButtonContainer = style.div `
    width: 40%;
    display: flex;
    justify-content: space-around;

`
export const GreetingContainer = style.div `
    width: 80%;
`
export const NavLink = style(Link)`
    color: white;
    font-size: large;
    text-decoration: none;
    margin 2%;
    font-family: 'Montserrat', serif;
    font-weight: 200;
    transition: all .3s ease;
    
    @media (max-width: 700px) {
        display:none;
    }
    &:hover{
        color: black;
        text-decoration: underline;
        transform: scale(1.2);
    }
`
export const NavHamburger = style.button `
    width: 80px;
    height: 55px;
    background: none;
    color: white;
    font-size: 55px;
    border: none;
    cursor: pointer;

    // @media (min-width: 700px) {
    //     display: none;
    // }

`
export const NavExtendContainer = style.div`
    display: flex;
    flex-direction: column;
    algin-items: center;
    margin: 15px;

    @media (min-width: 700px) {
        display: none;
    }

`

export const NavLinkExtend = style(Link)`
    font-size: 30px;
    text-decoration: none;
    color: black;
    margin: 2%;
    font-family: 'Montserrat', serif;

    &:hover{
        color: grey;
    }

`