import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle menu open/close
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when a menu item is clicked on mobile
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          {/* Add your logo here */}
        </div>

        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          {/* Use Link instead of a for routing */}
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeMenu}>
              About Us
            </Link>
          </li>
          <li>
            <Link to="/universities" onClick={closeMenu}>
              Universities
            </Link>
          </li>
          <li>
            <Link to="/programs" onClick={closeMenu}>
              Programs
            </Link>
          </li>
          <li>
            <Link to="/help" onClick={closeMenu}>
              Help Desk
            </Link>
          </li>
        </ul>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
