import style from "styled-components";


export const NavContainer = style.div `
    width: 100vw;
    background: transparent;
    color: white;
    font-size: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    position: fixed;
    z-index:2;
    
`

export const LogoContainer = style.div `
    width: 60%;
    color: white;
    font-family: 'Montserrat', serif;
    font-size: 40px;
    font-weight: 200;
    transition: all .3s ease;
    
@media (max-width: 610px){
    font-size: 24px;
}
`
export const ButtonContainer = style.div `
    width: 40%;
    display: flex;
    justify-content: flex-end;
    align-items: center;

`

export const NavHamburger = style.button `
    width: 80px;
    height: 55px;
    background: none;
    color: white;
    font-size: 55px;
    border: none;
    cursor: pointer;

   @media (max-width: 400px){
       width: 30px;
   }

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