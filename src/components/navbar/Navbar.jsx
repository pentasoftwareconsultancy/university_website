// import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import styles from './navbar.module.css';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [isUpdatesDropdownOpen, setIsUpdatesDropdownOpen] = useState(false);

//   const handleToggleMenu = () => {
//     setIsMenuOpen((prevState) => !prevState);
//   };

//   const handleDropdownToggle = () => {
//     setIsDropdownOpen((prevState) => !prevState);
//   };

//   const handleUpdatesDropdownToggle = () => {
//     setIsUpdatesDropdownOpen((prevState) => !prevState);
//   };

//   useEffect(() => {
//     const header = document.getElementById('header');
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         header.classList.add(styles.scrolled);
//       } else {
//         header.classList.remove(styles.scrolled);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return (
//     <header className={styles.header} id="header">
//       <div className={styles.container}>
//         <a href="/" className={styles.logos}></a>

//         <nav id="navbar" className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}>
//           <ul id="navbar-list" className={styles['navbar-list']}>
//             <li><Link to="/" className={styles['navbar-link']}>Home</Link></li>
//             <li><Link to="/about" className={styles['navbar-link']}>About US</Link></li>
//             <li className={styles['navbar-item']} onClick={handleDropdownToggle}>
//               <Link to="universities" className={styles['navbar-link']}>Universities</Link>
//             </li>

//             <li className={styles['navbar-item']} onClick={handleUpdatesDropdownToggle}>
//               <Link to="/programs" className={styles['navbar-link']}>Programs</Link>
//             </li>

//             <li><Link to="/help" className={styles['navbar-link']}>Help Desk</Link></li>
//           </ul>
//         </nav>

//         <button
//           className={`${styles['nav-toggle-btn']} ${isMenuOpen ? styles.active : ''}`}
//           aria-label="Toggle menu"
//           onClick={handleToggleMenu}
//         >
//           <ion-icon
//             name="menu-outline"
//             aria-hidden="true"
//             className={`${styles['menu-icon']} ${isMenuOpen ? styles.hidden : ''}`}
//           ></ion-icon>
//           <ion-icon
//             name="close-outline"
//             aria-hidden="true"
//             className={`${styles['close-icon']} ${isMenuOpen ? '' : styles.hidden}`}
//           ></ion-icon>
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Navbar;




import { useState } from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          {/* Logo here */}
        </div>

        {/* Fix the className syntax */}
        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/universities"></a>Universities</li>
          <li><a href="/programs">Programs</a></li>
          <li><a href="/help">Help Desk</a></li>
          {/* <li><a href="/contactUs">Contact Us</a></li> */}
          {/* <li><BookDemo /></li> */}
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
