/**
 * Site header: logo, responsive nav (hamburger on small screens), and scroll-based hide/show.
 * Uses `HashLink` for in-page anchors on the home route and `Link` for `/reservations`.
 */
import { useState, useEffect, useRef } from 'react'
import logo from '../../assets/Logo.svg'
import styles from './Header.module.css'
import {HashLink} from 'react-router-hash-link'
import { Link } from 'react-router-dom';


function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    // Collapse header when scrolling down past 50px; show again when scrolling up.
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setIsVisible(false); // Scrolling down (and past 50px so it doesn't trigger immediately)
            } else {
                setIsVisible(true); // Scrolling up
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <header className={`${styles.header} ${isVisible ? '' : styles.hidden}`}>
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

        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ''}`} aria-label="Main Navigation">
            <ul className={`section-body ${styles.navLinks}`}>
                <li>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                    Home
                    </Link>
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
  )
}

export default Header