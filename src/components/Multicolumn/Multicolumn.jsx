import multicolumnCard1 from '../../img/Multicolumn card 1.png'
import multicolumnCard2 from '../../img/Multicolumn card 2.png'
import './Multicolumn.css'

function Multicolumn() {
  return (
    <section id="multicolumn-section" className="section multicolumn--section">
      <div className="page-width section--multicolumn-box">
        <div className="section-header rte center">
          <h2 className="section-header-title capitalize">Additional solutions for executives and businesses</h2>
        </div>

        <div className="section-multicolumn--body flex flex-grow">
          <div className="grid__item multicolumn-card">
            <div className="multicolumn-card--inner">
              <h3 className="card-title center">Digital privacy</h3>
              <div className="card-info rte-box">
                <div className="card-media">
                  <img src={multicolumnCard1} alt="Multicolumn card" className="multicolumn--card-image" />
                </div>
                <div className="card-content rte">
                  <p>
                    Stedo Reputation understands the significant privacy concerns associated with people-search sites
                    that sell your and your family's personal information online. Our team offers specialized services
                    to
                    combat this issue and help protect your personal data.
                  </p>
                  <p>
                    By leveraging our expertise, you can regain control over your privacy and ensure that your sensitive
                    information is not readily accessible to the public.
                  </p>
                </div>
                <button className="button button--primary">Learn More</button>
              </div>
            </div>
          </div>
          <div className="grid__item multicolumn-card">
            <div className="multicolumn-card--inner">
              <h3 className="card-title center">Corporate cybersecurity</h3>
              <div className="card-info rte-box">
                <div className="card-media">
                  <img src={multicolumnCard2} alt="Multicolumn card" className="multicolumn--card-image" />
                </div>
                <div className="card-content rte">
                  <p>
                    Stedo Reputation offers comprehensive solutions to reduce the risk of attacks against your company's
                    personnel. Safeguarding your team's personal information is crucial for maintaining security and
                    trust.
                  </p>
                  <p>
                    Our robust cybersecurity measures and vulnerability assessments are designed to protect employees
                    from
                    potential threats and attacks. With tailored services.
                  </p>
                </div>
                <button className="button button--primary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Multicolumn