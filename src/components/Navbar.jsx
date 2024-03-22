
export default function Navbar(){
    return (
        <nav className="nav-bar">
            <div className="nav-left">
                <img src="images/logo.svg" alt="Shorly Logo" className="nav-logo" />
                <div className="nav-links">
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Resources</a>
                </div>
            </div>
            <div className="nav-right">
                <button className="login">Login</button>
                <button className="signup">Sign Up</button>
            </div>
        </nav>
        
    )
}