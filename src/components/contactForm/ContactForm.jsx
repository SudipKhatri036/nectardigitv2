import React from "react";
import "./ContactForm.css";
import { FaComment } from "react-icons/fa";

function ContactForm() {
  return (
    <section className="contact-forms mt">
      <div className="container">
        <div className="contact-form-cover">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="contact-form-img">
                <img src="images/cta.png" alt="Contact" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="contact-form">
                <h3>Need assistance? please fill the form</h3>
                <form
                  id="formSubmit"
                  action="https://www.nectardigit.com/contact-form"
                  method="post"
                >
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Full Name"
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email Address"
                      required=""
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      placeholder="Subject"
                    />
                  </div>

                  <div className="mb-3">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Message"
                      required=""
                    ></textarea>
                  </div>

                  <div className="mb-3">
                    <div
                      className="g-recaptcha"
                      data-sitekey="6Le6-x0qAAAAABcQwqwlP9dz3759F_h9pkkC3vCv"
                      required=""
                    >
                      <div style={{ width: "304px", height: "78px" }}>
                        <div>
                          <iframe
                            title="reCAPTCHA"
                            width="304"
                            height="78"
                            role="presentation"
                            name="a-3rglvxo1jn5q"
                            frameBorder="0"
                            scrolling="no"
                            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox allow-storage-access-by-user-activation"
                            src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6Le6-x0qAAAAABcQwqwlP9dz3759F_h9pkkC3vCv&amp;co=aHR0cHM6Ly93d3cubmVjdGFyZGlnaXQuY29tOjQ0Mw..&amp;hl=en&amp;v=xds0rzGrktR88uEZ2JUvdgOY&amp;size=normal&amp;cb=gq8dd4sd57p0"
                          ></iframe>
                        </div>
                        <textarea
                          id="g-recaptcha-response"
                          name="g-recaptcha-response"
                          className="g-recaptcha-response"
                          style={{
                            width: "250px",
                            height: "40px",
                            border: "1px solid rgb(193, 193, 193)",
                            margin: "10px 25px",
                            padding: "0px",
                            resize: "none",
                            display: "none",
                          }}
                        ></textarea>
                      </div>
                    </div>
                    <span
                      className="text-danger"
                      id="googleError"
                      hidden=""
                    ></span>
                  </div>

                  <div className="col-md-12 padding">
                    <div className="form-group">
                      <input
                        className=" main-btn1 loginBtn"
                        data-sitekey="6Le6-x0qAAAAABcQwqwlP9dz3759F_h9pkkC3vCv"
                        data-callback="onSubmit"
                        data-action="submit"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="contact-bg-logo">
            <FaComment />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
