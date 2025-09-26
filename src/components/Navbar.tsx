import '../styles/components/Navbar.css'


export default function Navbar(){
    const username = 'Demo User'

    return(
        <div className="navbar">
            <header>📝 Blue Todo</header>
            <nav>
                    <span>Welcome, {username}</span>
                    <button id="userProfileBtn">D</button>
                    <button id="logInBtn">Log In</button>
            </nav>
        </div>
    )
}