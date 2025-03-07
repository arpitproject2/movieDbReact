import { Link } from "react-router-dom"
import "../css/Navbar.css"
function NavBar(){
    return (
    <nav className="navbar">
        <div className="navbar-brand">
            <Link to ="/"> Movie App</Link>
        </div>
        <div className="navbar-links">
            <Link to ="/favorite" className="nav-link"> fav</Link>
        </div>
    </nav>
    )
}
export default NavBar