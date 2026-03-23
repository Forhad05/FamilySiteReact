import heroImageDesktop from '../../img/Hero banner desktop.png'
import { IconArrowRight, IconTelephone } from '../../Icons';
import './Hero.css'

function Hero() {
  return (
    <section className="section section--hero">
      <div className="hero-banner">
        <div className="section--hero-media">
          <img src={heroImageDesktop} alt="Hero Image" className="section--hero-image" />
        </div>
        <div className="section--hero-content page-width text-center">
          <div className="section--hero-box section--hero-box-transparent rte-box">
            <h2 className="section--hero-subtitle uppercase">The original and the best</h2>
            <h2 className="section--hero-title">Welcome to <strong>Global Education Pathways</strong></h2>
            <div className="section--hero-text rte">
              <p>Your Gateway to Quality Education Worldwide</p>
            </div>
            <div className="section--hero-buttons">
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
        </div>
      </div>
    </section>
  );
}

export default Hero;