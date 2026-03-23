import { useEffect, useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IconHamburger, IconFacebook, IconWhatsapp } from '../../Icons';
import siteLogo from '../../img/Logo.png';
import './Header.css';

const ON_CHANGE_DEBOUNCE_TIMER = 300;

function Header() {
  const headerWrapperRef = useRef(null);
  const currentScrollTop = useRef(0);
  const headerBounds = useRef({ top: 0, bottom: 0 });
  const preventReveal = useRef(false); // Added missing ref for scroll logic

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // 1. Logic: Measurement
  const setHeaderHeight = () => {
    const headerElement = headerWrapperRef.current?.closest('.section__header');
    if (!headerElement) return;
    const rect = headerElement.getBoundingClientRect();
    headerBounds.current.bottom = rect.height;
    document.documentElement.style.setProperty('--header-height', `${rect.height}px`);
  };

  // 2. Logic: Scroll Handling
  const onScroll = () => {
    const header = headerWrapperRef.current?.closest('.section__header');
    if (!header || !headerWrapperRef.current) return;

    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const stickyType = headerWrapperRef.current.getAttribute('data-sticky-type');
    const isAlwaysSticky = stickyType === 'always' || stickyType === 'reduce-logo-size';

    if (scrollTop > currentScrollTop.current && scrollTop > header.offsetHeight) {
      header.classList.add('scrolled-past-header');
      if (!isAlwaysSticky) {
        header.classList.add('shopify-section-header-hidden', 'shopify-section-header-sticky');
      }
    } else if (scrollTop < currentScrollTop.current && scrollTop > header.offsetHeight) {
      header.classList.add('scrolled-past-header');
      if (!isAlwaysSticky && !preventReveal.current) {
        header.classList.add('shopify-section-header-sticky', 'animate');
        header.classList.remove('shopify-section-header-hidden');
      }
    } else if (scrollTop <= headerBounds.current.top) {
      header.classList.remove('scrolled-past-header', 'shopify-section-header-hidden', 'shopify-section-header-sticky', 'animate');
    }

    currentScrollTop.current = scrollTop;
  };

  // 3. Effect: The "Built-in" React Bouncer (Resize only)
  useEffect(() => {
    const handler = setTimeout(() => {
      setHeaderHeight();
    }, ON_CHANGE_DEBOUNCE_TIMER);

    return () => clearTimeout(handler);
  }, [windowWidth]);

  // 4. Effect: Event Listeners & Observers
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    const mql = window.matchMedia('(max-width: 1024px)');
    const handleMqlChange = () => setHeaderHeight();

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', onScroll);
    mql.addEventListener('change', handleMqlChange);

    // Initial setup
    setHeaderHeight();

    // Intersection Observer for the bottom bounds
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      const headerTop = entry.boundingClientRect.top + window.scrollY;
      headerBounds.current.bottom = headerTop + entry.boundingClientRect.height;
      observer.disconnect();
    });

    if (headerWrapperRef.current) observer.observe(headerWrapperRef.current);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', onScroll);
      mql.removeEventListener('change', handleMqlChange);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="section__header section-header-group">
      <div
        ref={headerWrapperRef}
        className="header-wrapper page-width"
        data-sticky-type="on-scroll-up"
      >
        <div className="header">
          <div className="header-drawer large-up-hide">
            <a className="header-icon header-icon--drawer link-unstyled" href="#">
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
                {['/', '/solutions', '/who-we-serve', '/self-help', '/about-us'].map((path) => (
                  <li key={path}>
                    <NavLink 
                      className={({ isActive }) => `nav-link nav-link--parent reversed-link link-unstyled ${isActive ? 'active' : ''}`} 
                      to={path}
                    >
                      {path === '/' ? 'Home' : path.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="header-icons">
            <div className="header-icons--list">
              <a href="https://www.facebook.com/profile.php?id=61555824028180" className="header-icon link-unstyled" target="_blank" rel="noreferrer">
                <span className="svg-wrapper"><IconFacebook /></span>
              </a>
              <a href="https://wa.me/61402799580" className="header-icon link-unstyled" target="_blank" rel="noreferrer">
                <span className="svg-wrapper"><IconWhatsapp /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;