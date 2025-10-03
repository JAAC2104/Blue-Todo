import { NavLink } from 'react-router-dom'
import '../styles/components/Navbar.css'
import { useAuth } from '../contexts/AuthContext';


export default function Navbar(){
    const {user, logout} = useAuth();

    const getUsernameLetter = () => {
        if (!user?.displayName) return
        const firstLetter = user?.displayName[0];

        return firstLetter;
    }



    return(
        <div className="navbar">
            <header>📝 Blue Todo</header>
            <nav>
                    {user ? <div className='userInfo'><span>Welcome, {user?.displayName}</span> <button id="userProfileBtn">{getUsernameLetter()}</button></div> : <span>Log in to save your tasks</span>}
                    {user ? <button onClick={logout} className="logInBtn">Log Out</button> : <NavLink to="/login" className="logInBtn">Log In</NavLink>}
            </nav>
        </div>
    )
}