import { Link, NavLink } from 'react-router-dom';
import { IconHamburger, IconFacebook, IconWhatsapp } from '../../Icons';
import siteLogo from '../../img/Logo.png'
import './Header.css'

function Header() {
  return (
    <header className="section__header section-header-group">
      <sticky-header className="header-wrapper page-width" data-sticky-type="on-scroll-up">
        <header className="header">
          <div className="header-drawer large-up-hide">
            <a className="header-icon header-icon--drawer link-unstyled">
              <span className="svg-wrapper">
                <IconHamburger />
              </span>
            </a>
          </div>

          <div className="header-logo">
            <h1 className="hidden">Global Education Pathways</h1>
            <Link to="/" className="header-logo--link">
              <img src={siteLogo} alt="GEP Logo" width="170" className="header-logo--image" />
            </Link>
          </div>

          <div className="navigation-inline large-down-hide">
            <nav className="navigation-links" aria-label="Primary Navigation">
              <ul className="navigation-links--list list-unstyled" role="list">
                <li><NavLink className={({ isActive }) =>
                  `nav-link nav-link--parent reversed-link link-unstyled ${isActive ? 'active' : ''}`
                } to="/">Home</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                  `nav-link nav-link--parent reversed-link link-unstyled ${isActive ? 'active' : ''}`
                } to="/Solutions">Solutions</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                  `nav-link nav-link--parent reversed-link link-unstyled ${isActive ? 'active' : ''}`
                } to="/who-we-serve">Who We Serve</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                  `nav-link nav-link--parent reversed-link link-unstyled ${isActive ? 'active' : ''}`
                } to="/self-help">Self-Help</NavLink></li>
                <li><NavLink className={({ isActive }) =>
                  `nav-link nav-link--parent reversed-link link-unstyled ${isActive ? 'active' : ''}`
                } to="/about-us">About Us</NavLink></li>
              </ul>
            </nav>
          </div>

          <div className="header-icons">
            <div className="header-icons--list">
              <a href="https://www.facebook.com/profile.php?id=61555824028180"
                className="header-icon header-icon--facebook link-unstyled" aria-label="Facebook" title="Facebook" target='_blank'>
                <span className="svg-wrapper">
                  <IconFacebook />
                </span>
              </a>

              <a href="https://wa.me/61402799580?text=Hi there, I'd like to know more"
                className="header-icon header-icon--whatsapp link-unstyled" aria-label="WhatsApp" title="WhatsApp" target='_blank'>
                <span className="svg-wrapper">
                  <IconWhatsapp />
                </span>
              </a>
            </div>
          </div>
        </header>
      </sticky-header>
    </header>
  );
}

export default Header