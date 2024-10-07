import { FaMapSigns, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./ContactDetail.css";

function ContactDetail() {
  return (
    <section className="contact-page pt">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="contact-wrap">
              <div className="contact-icon">
                <a
                  href="https://g.page/nectardigit?share"
                  title="Unit 82A James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE, UK and Sundhara, Kathmandu, Nepal"
                  target="_blank"
                >
                  <FaMapSigns />
                </a>
              </div>
              <div className="contact-content">
                <span>Address</span>
                <a
                  href="https://g.page/nectardigit?share"
                  title="Unit 82A James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE, UK and Sundhara, Kathmandu, Nepal"
                >
                  <p>
                    Unit 82A James Carter Road, Mildenhall, Bury St. Edmunds,
                    England, IP28 7DE, UK and Sundhara, Kathmandu, Nepal
                  </p>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="contact-wrap">
              <div className="contact-icon">
                <a
                  href="https://g.page/nectardigit?share"
                  title="Unit 82A James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE, UK and Sundhara, Kathmandu, Nepal"
                  target="_blank"
                >
                  <FaPhoneAlt />
                </a>
              </div>
              <div className="contact-content">
                <span>Contact</span>
                <a href="tel:9807555929" title="Phone">
                  <p> 9807555929 </p>
                </a>
                <a href="tel:015904030" title="Phone">
                  <p> 015904030 </p>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="contact-wrap">
              <div className="contact-icon">
                <a
                  href="https://g.page/nectardigit?share"
                  title="Unit 82A James Carter Road, Mildenhall, Bury St. Edmunds, England, IP28 7DE, UK and Sundhara, Kathmandu, Nepal"
                  target="_blank"
                >
                  <MdEmail className="email-icon" />
                </a>
              </div>
              <div className="contact-content">
                <span>Email</span>
                <a href="tel:9807555929" title="Phone">
                  <p> 9807555929 </p>
                </a>
                <a href="tel:015904030" title="Phone">
                  <p> 015904030 </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactDetail;
