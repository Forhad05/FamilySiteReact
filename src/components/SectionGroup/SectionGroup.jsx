import imageWithText1 from '../../img/Image with text Block-1.png'
import imageWithText2 from '../../img/Image with text Block-2.png'
import imageWithText3 from '../../img/Image with text Block-3.png'
import './SectionGroup.css'

function SectionGroup() {
  return (
        <section id="group-section" className="section group--section">
      <div className="page-width group--section-box">
        <div className="section-header rte center">
          <h2 className="section-header-title">You deserve to be represented fairly and accurately online</h2>
          <div className="section-header-text rte">
            <p>No matter what threats you face online, Reputation Defender can help. We have solutions to protect your
              privacy, correct misleading search results, and more.</p>
          </div>
        </div>

        <div className="group--section-blocks">
          <div className="group--section-block group--section-block-1 rte-box">
            <h3 className="section-block--title center">Search results for individuals</h3>
            <div className="block-img-text flex flex-grow flex--fixed-col">
              <div className="grid__item grid__item-fixed block-body--media">
                <div className="section--block-media center">
                  <img src={imageWithText1} alt="Contact image" className="section--block-image" />
                </div>
              </div>
              <div className="grid__item block-body--content">
                <div className="block-body--box rte">
                  <p>
                    Stedo Reputation offers valuable services to help individuals manage and influence the news and
                    articles that appear in their Google search results. This service is particularly crucial since the
                    first page of search results for your name can essentially serve as your online curriculum vitae
                    (CV). It showcases your digital reputation to potential employers, clients, and anyone who might be
                    searching for you.
                  </p>
                  <p>
                    By ensuring that the information presented on Page 1 is accurate and positive, Stedo Reputation
                    helps you put your best digital foot forward. This not only enhances your professional image but
                    also
                    maintains a favorable online presence. With Stedo Reputation's expertise, you can confidently manage
                    your digital reputation, ensuring that what people find online reflects the best version of you.
                  </p>
                </div>
                <button className="button button--primary">Learn More</button>
              </div>
            </div>
          </div>

          <div className="group--section-block group--section-block-1 rte-box">
            <h3 className="section-block--title center">Search results for businesses</h3>
            <div className="block-img-text flex flex-grow flex--fixed-col flex-reverse">
              <div className="grid__item grid__item-fixed block-body--media">
                <div className="section--block-media center">
                  <img src={imageWithText2} alt="Contact image" className="section--block-image" />
                </div>
              </div>
              <div className="grid__item block-body--content">
                <div className="block-body--box rte">
                  <p>
                    Stedo Reputation offers comprehensive online reputation management solutions specifically designed
                    to help businesses address negative and misleading search results. In today's digital age, the first
                    page of Google search results can significantly impact a business's reputation and, consequently,
                    its bottom line. When potential customers encounter unfavorable or inaccurate information, it can
                    deter them from engaging with the business, resulting in lost revenue and opportunities.
                  </p>
                  <p>
                    By leveraging Stedo Reputation's expertise, businesses can effectively manage their online presence,
                    ensuring that the information appearing on the first page of search results is accurate, positive,
                    and reflective of their brand values. This proactive approach not only helps to mitigate the adverse
                    effects of negative search results but also fosters trust and credibility among potential customers.
                    With Stedo Reputation's tailored solutions, businesses can confidently navigate the complexities of
                    their online reputation and maintain a strong, favorable presence in the digital landscape.
                  </p>
                </div>
                <button className="button button--primary">Learn More</button>
              </div>
            </div>
          </div>

          <div className="group--section-block group--section-block-1 rte-box">
            <h3 className="section-block--title center">VIP solutions</h3>
            <div className="block-img-text block-content-overlay flex flex-grow flex-reverse">
              <div className="grid__item grid__item-fixed block-body--media">
                <div className="section--block-media center">
                  <img src={imageWithText3} alt="Contact image" className="section--block-image" />
                </div>
              </div>
              <div className="grid__item block-body--content">
                <div className="block-body--content-inner">
                  <div className="block-body--box rte">
                    <p>
                      Stedo Reputation creates personalized solutions for situations that require extra care and
                      attention. In today's digital age:
                    </p>
                    <ul>
                      <li>
                        Brands, executives, and public figures face increased scrutiny online.
                      </li>
                      <li>
                        Negative news articles on Page 1 of Google can significantly impact public opinion, causing it
                        to
                        plummet.
                      </li>
                      <li>
                        Stedo Reputation understands the delicate nature of these situations and offers tailored
                        services
                        to mitigate the effects of negative publicity.
                      </li>
                    </ul>
                    <p>
                      By ensuring that the most accurate and positive information is presented, Stedo Reputation helps
                      maintain a favorable public image and safeguards the reputation of their clients.
                    </p>
                  </div>
                  <button className="button button--primary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionGroup