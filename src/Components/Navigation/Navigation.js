import { React } from 'react'
import './Navigation.css'
const Navigation = () => {
    return <nav className='container'>
        <div className='logo'>
            <img src='h' alt='img'/>
        </div>

        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
}

export default Navigation