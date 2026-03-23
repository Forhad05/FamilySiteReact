import callToAction from '../../img/Call to action.png'
import { IconArrowRight, IconTelephone } from '../../Icons';
import './CallToAction.css'

function CallToAction() {
  return(
    <section id="cta-section" className="section cta--section">
      <div className="page-width section--cta-box">
        <div className="section--cta-box-inner">
          <div className="section-cta--media">
            <img src={callToAction} alt="Call to action" className="cta-image" />
          </div>

          <div className="section--cta-content">
            <div className="section-header center">
              <h2 className="section-header-title capitalize">Need assistance? Talk to an expert.</h2>
              <div className="section-header-text rte">
                <p>Get unique advice tailored to your situation. It's free, confidential, and without obligation.</p>
              </div>
              <div className="section--cta-buttons">
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
      </div>
    </section>
  );
}

export default CallToAction