import { useState } from "react"


export default function MobileNavbar(){

    const [mobileMenuOpen, setMobileMenu] = useState(false)

    function toggleMobileMenu(){
        setMobileMenu(prevMobileMenu => !prevMobileMenu)
    }

    return (
        <div className="mbl-navbar">
            <img src="./images/logo.svg" alt="Shortly logo" className="logo" />
            <button className="mbl-menu" onClick={toggleMobileMenu}>
                <img src="./images/menu-icon.svg" alt="menu button img" className="mbl-menu-img" />
            </button>
            <div className="menu"
            style={{display: mobileMenuOpen ? 'flex' : 'none'}}
            >
                <a href="#">Features</a>
                <a href="#">Pricing</a>
                <a href="#">Resources</a>
                <hr />
                <button className="login">Login</button>
                <button className="signup">Sign Up</button>
            </div>
        </div>
    )
}