
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUpdatesDropdownOpen, setIsUpdatesDropdownOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const handleDropdownToggle = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  const handleUpdatesDropdownToggle = () => {
    setIsUpdatesDropdownOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const header = document.getElementById('header');
    const handleScroll = () => {
      if (window.scrollY > 50) {
        header.classList.add(styles.scrolled);
      } else {
        header.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={styles.header} id="header">
      <div className={styles.container}>
        <a href="/" className={styles.logos}></a>

        <nav id="navbar" className={`${styles.navbar} ${isMenuOpen ? styles.active : ''}`}>
          <ul id="navbar-list" className={styles['navbar-list']}>
            <li>
              <Link to="/" className={styles['navbar-link']}>Home</Link>
            </li>
            <li>
              <Link to="/about" className={styles['navbar-link']}>About US</Link>
            </li>

         
            <li className={styles['navbar-item']} onClick={handleDropdownToggle}>
              <Link to="universities" className={styles['navbar-link']}>Universities</Link>
              {isDropdownOpen && (
                <ul className={styles['dropdown-menu']}>
                  <li>
                    <Link to="/universities/arunodayauniversity" className={styles['dropdown-link']}>Arunodaya University</Link>
                  </li>
                  <li>
                    <Link to="/universities/ycmou" className={styles['dropdown-link']}>YCMOU</Link>
                  </li>
                  <li>
                    <Link to="/universities/singhaniauniversity" className={styles['dropdown-link']}>Singhania University</Link>
                  </li>
                  <li>
                    <Link to="/universities/bvuniversity" className={styles['dropdown-link']}>BVU University</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Updates Dropdown */}
            <li className={styles['navbar-item']} onClick={handleUpdatesDropdownToggle}>
              <Link to="/programs" className={styles['navbar-link']}>Programs</Link>
              {isUpdatesDropdownOpen && (
                <ul className={styles['dropdown-menu']}>
                  <li>
                    <Link to="/programs/undergraduate" className={styles['dropdown-link']}>Under Graduate Course</Link>
                  </li>
                  <li>
                    <Link to="/programs/postgraduate" className={styles['dropdown-link']}>Post Graduate Course</Link>
                  </li>
                  <li>
                    <Link to="/programs/diploma" className={styles['dropdown-link']}>Diploma Engineering</Link>
                  </li>
                  <li>
                    <Link to="/programs/technology" className={styles['dropdown-link']}>Bachelor Of Technology</Link>
                  </li>
                  <li>
                    <Link to="/programs/master" className={styles['dropdown-link']}>Master Of Technology</Link>
                  </li>
                  <li>
                    <Link to="/programs/diplomacourse" className={styles['dropdown-link']}>Diploma Course</Link>
                  </li>
                  <li>
                    <Link to="/programs/certificate" className={styles['dropdown-link']}>Certificate Course</Link>
                  </li>
                  <li>
                    <Link to="/programs/pgdiploma" className={styles['dropdown-link']}>P. G Diploma Course</Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link to="/help" className={styles['navbar-link']}>Help Desk</Link>
            </li>
          </ul>
        </nav>

        <button
          className={`${styles['nav-toggle-btn']} ${isMenuOpen ? styles.active : ''}`}
          aria-label="Toggle menu"
          onClick={handleToggleMenu}
        >
          <ion-icon
            name="menu-outline"
            aria-hidden="true"
            className={`${styles['menu-icon']} ${isMenuOpen ? 'hidden' : ''}`}
          ></ion-icon>
          <ion-icon
            name="close-outline"
            aria-hidden="true"
            className={`${styles['close-icon']} ${isMenuOpen ? '' : 'hidden'}`}
          ></ion-icon>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
