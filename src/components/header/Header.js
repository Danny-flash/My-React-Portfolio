import React from 'react'
import CTA from '../CTA'
import ME from '../../assets/smile.png'
import HeaderSocials from './HeaderSocials'
const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Funmiluyi Daniel</h1>
                <h5 className="text-light">Front-end Developer</h5>
                 <CTA /> 
               <HeaderSocials />
                 <div className="me">
                     <img src={ME} alt="" />
                 </div>

                 <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}

export default Header
