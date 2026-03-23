import { IconArrowRight, IconTelephone, IconSocialFacebook, IconSocialTwitter, IconSocialInstagram, IconSocialLinkedIn } from '../../Icons'
import ctaLeft from '../../img/Cta-left.png'
import './Footer.css'

function Footer() {
  return (
    <footer className="section--footer">
      <div className="footer-wrapper page-width">
        <div className="section--footer-box">
          <div className="section--footer-top">
            <div className="footer-cta--box">
              <div className="footer-cta--content rte">
                <h2 className="footer-cta--heading">Need assistance? Talk to an expert.</h2>
                <p>Free, confidential, and without obligation.</p>
              </div>
              <div className="footer--cta-buttons">
                <a href="#section-contact" className="button">
                  Get Free Consultation
                  <span className="svg-wrapper">
                    <IconArrowRight />
                  </span>
                </a>
                <span className="button-choice text-body">or Talk to an Expert</span>
                <a href="tel:+1 012 456-7890" className="button">
                  <span className="svg-wrapper">
                    <IconTelephone />
                  </span>
                  +1 012 456-7890
                </a>
              </div>
            </div>
            <div className="footer-cta--image">
              <img src={ctaLeft} alt="" />
            </div>
          </div>
          <hr className="section--footer-divider">
          </hr>
          <div className="section--footer-body flex">
            <div className="grid__item footer-block footer-block-text">
              <div className="footer-block-content rte">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                  fugiat nulla pariatur.</p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                  laborum.</p>
              </div>
            </div>
            <div className="grid__item footer-block">
              <h3 className="footer-block-heading">Product</h3>
              <ul className="footer-block list-unstyled">
                <li>Overview</li>
                <li>Damaged Search Results</li>
                <li>Personal Branding</li>
                <li>VIP Services</li>
                <li>Digital Privacy</li>
                <li>Individuals</li>
                <li>Small Business</li>
                <li>Executives</li>
                <li>Large Companies</li>
              </ul>
            </div>
            <div className="grid__item footer-block">
              <h3 className="footer-block-heading">Resources</h3>
              <ul className="footer-block list-unstyled">
                <li>Resource Centre</li>
                <li>Guide to Online Reputation Management</li>
                <li>What is Online Reputation Management</li>
                <li>Online Privacy Tips</li>
                <li>People-Search FAQs</li>
              </ul>
            </div>
            <div className="grid__item footer-block">
              <h3 className="footer-block-heading">Company</h3>
              <ul className="footer-block list-unstyled">
                <li>Our Story</li>
                <li>Press Room</li>
                <li>Legal</li>
                <li>Privacy Policy</li>
                <li>Patents</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
          <div className="section--footer-bottom">
            <div className="footer-bottom--box">
              <div className="footer-socials">
                <span className="svg-wrapper">
                  <IconSocialFacebook />
                </span>
                <span className="svg-wrapper">
                  <IconSocialTwitter />
                </span>
                <span className="svg-wrapper">
                  <IconSocialInstagram />
                </span>
                <span className="svg-wrapper">
                  <IconSocialLinkedIn />
                </span>
              </div>
              <small className="footer-copyright">&copy; 2024 Global Education Pathways. All rights reserved.</small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer