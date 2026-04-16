import { useState } from 'react'
import logo from '../../assets/Logo.svg'
import styles from './Header.module.css'
import {HashLink} from 'react-router-hash-link'
import { Link } from 'react-router-dom';


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
    <>
    <header className={styles.header}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <img src={logo} alt="Little Lemon Logo" />
        </Link>
        <button className={styles.hamburger} onClick={toggleMenu} aria-label="Toggle menu">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 6H21" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M3 18H21" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`}>
            <ul className={`section-body ${styles.navLinks}`}>
                <li>
                    <HashLink smooth to="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                    </HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#about" onClick={() => setIsMenuOpen(false)}>
                    About
                    </HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#menu" onClick={() => setIsMenuOpen(false)}>
                    Menu
                    </HashLink>
                </li>
                <li>
                    <Link to="/reservations" onClick={() => setIsMenuOpen(false)}>
                    Reservations
                    </Link>
                </li>
                <li>
                    <HashLink smooth to="/#order-online" onClick={() => setIsMenuOpen(false)}>
                    Order Online
                    </HashLink>
                </li>
                <li>
                    <HashLink smooth to="/#login" onClick={() => setIsMenuOpen(false)}>
                    Login
                    </HashLink>
                </li>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header