import React, {useState} from "react";
import {
    NavContainer,
    LogoContainer,
    GreetingContainer,
    ButtonContainer,
    NavExtendContainer,
    NavLinkExtend,
    NavHamburger
} from "./NavStyles"


const Navbar = () => {
    const [extendNav, setExtendNav] = useState(false);

  return (
   <>
   <NavContainer extendNav={extendNav}>
       <LogoContainer>Coding Challenge</LogoContainer>
       <ButtonContainer>
           <GreetingContainer>

           </GreetingContainer>
           <NavHamburger onClick={()=> {setExtendNav((curr) => !curr)}}> {extendNav ? <> &#10005;</> : <> &#8801;</>} </NavHamburger>
       </ButtonContainer>
    {extendNav ?
    <NavExtendContainer>
        <NavLinkExtend to="/homepage">HomePage</NavLinkExtend>
        <NavLinkExtend to="/login">Login</NavLinkExtend>
    </NavExtendContainer>
    : ""
    }
   </NavContainer>
   </>
  )
}

export default Navbar;