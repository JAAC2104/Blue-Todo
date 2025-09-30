import { NavLink } from 'react-router-dom'
import '../styles/components/Navbar.css'


export default function Navbar(){
    const username = 'Demo User'

    return(
        <div className="navbar">
            <header>📝 Blue Todo</header>
            <nav>
                    <span>Welcome, {username}</span>
                    <button id="userProfileBtn">D</button>
                    <NavLink to="/login" id="logInBtn">Log In</NavLink>
            </nav>
        </div>
    )
}