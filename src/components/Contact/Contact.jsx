import contactImage from '../../img/Contact image.png'
import './Contact.css'

function Contact() {
  return (
    <section id="section-contact" className="section section--contact">
      <div className="page-width section--contact-box">
        <div className="section-header rte center">
          <h2 className="section-header-title">Schedule a free consultation</h2>
          <div className="section-header-text rte">
            <p>Get unique advice tailored to your situation. It's free, confidential, and without obligation.</p>
          </div>
        </div>

        <div className="section--contact-body flex flex-grow flex--fixed-col">
          <div className="grid__item contact-body--form">
            <div className="section--contact-form">
              <form action="post">
                <div className="field">
                  <input type="text" className="field__input" id="contact-name" name="contact[name]" placeholder="Name"
                    required />
                  <label htmlFor="contact-name" className="field__label hidden">Name</label>
                </div>
                <div className="field">
                  <input type="text" className="field__input" id="contact-email" name="contact[email]" placeholder="Email"
                    required />
                  <label htmlFor="contact-email" className="field__label hidden">Email</label>
                </div>
                <div className="field">
                  <input type="text" className="field__input" id="contact-phone" name="contact[phone]"
                    placeholder="Phone Number" required />
                  <label htmlFor="contact-phone" className="field__label hidden">Phone Number</label>
                </div>
                <div className="field">
                  <textarea className="field__input field__textarea" id="contact-message" name="contact[message]" rows="10"
                    cols="auto" placeholder="Write us brief of your situation..." required></textarea>
                  <label htmlFor="contact-message" className="field__label hidden">Write us brief of your situation...</label>
                </div>
                <div className="field-group-list">
                  <label htmlFor="contact-checkbox" className="field-group-checkfield">
                    <input type="checkbox" className="field__checkbox" id="contact-checkbox" name="contact[checkbox]"
                      required></input>
                    <span>I'd like to receive news, tips, & offers from ReputationDefender.</span>
                  </label>

                  <div className="field-group-button">
                    <button type="submit" className="button button--primary button-full-width">
                      Schedule Your Consultation
                      <span className="svg-wrapper">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M5.20874 13H16.3787L11.4987 17.88C11.1087 18.27 11.1087 18.91 11.4987 19.3C11.8887 19.69 12.5187 19.69 12.9087 19.3L19.4987 12.71C19.8887 12.32 19.8887 11.69 19.4987 11.3L12.9187 4.69997C12.5287 4.30997 11.8987 4.30997 11.5087 4.69997C11.1187 5.08997 11.1187 5.71997 11.5087 6.10997L16.3787 11H5.20874C4.65874 11 4.20874 11.45 4.20874 12C4.20874 12.55 4.65874 13 5.20874 13Z"
                            fill="currentColor" />
                        </svg>
                      </span>
                    </button>
                  </div>

                  <div className="field-group-message rte">
                    <p>We will process your personal data submitted in this form in line with our Privacy Policy.</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="grid__item grid__item-fixed contact-body--media">
            <div className="section--contact-media center">
              <img src={contactImage} alt="Contact image" className="section--contact-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact