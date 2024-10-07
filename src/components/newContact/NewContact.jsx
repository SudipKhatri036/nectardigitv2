import "./NewContact.css";

import CompanyAddress from "../companyAddress/CompanyAddress";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import axios from "axios";
import SmallSpinner from "../smallSpinner/SmallSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  fullName: "",
  contactNum: "",
  email: "",
  website: "",
  message: "",
};

function NewContact() {
  const [formData, setFormData] = useState(initialState);
  const [isPosting, setIsPosting] = useState(false);
  const [isValidData, setIsValidData] = useState(true);

  const handleChange = (e) => {
    setFormData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const validName = formData.fullName.trim().length > 0;
    const validEmail = emailRegx.test(formData.email);
    console.log(validEmail);

    if (!validEmail && !validEmail) setIsValidData(false);
    else setIsValidData(true);

    if (!validName && !validEmail && !formData.contactNum) return;

    if (isValidData) {
      setIsPosting(true);
      axios
        .post("https://jsonplaceholder.typicode.com/posts", formData)
        .then((resp) => {
          console.log(resp);
          setFormData(initialState);
          toast.success("Form Submitted", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsPosting(false);
        });
    } else {
      return;
    }
  };

  return (
    <section className="new-contact">
      <div className="bg-img">
        <img src="/images/02.png" alt="bg" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact-inner">
              <div className="contact-header">
                <span className="title">Contact Us</span>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolor magnaaliqua.
                </p>
              </div>

              <CompanyAddress />
            </div>
          </div>
          <div className="col-lg-7">
            <div className="contact-inner">
              <div className="contact-header">
                <span className="title">GET IN TOUCH</span>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolor magnaaliqua.
                </p>
              </div>

              <div className="new-contact-form">
                <form onSubmit={handleSubmit}>
                  <div className="contact-form-wrapper row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Name"
                          id="contact-name"
                          className="input-field"
                          name="fullName"
                          required
                          onChange={handleChange}
                          value={formData.fullName}
                        />
                        {!isValidData ? (
                          <p className="contact-error">
                            Please Enter Correct data
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="input-field"
                          name="contactNum"
                          placeholder="Phone"
                          type="text"
                          required
                          onChange={handleChange}
                          value={formData.contactNum}
                        />
                        {!isValidData ? (
                          <p className="contact-error">
                            Please Enter Correct data
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="input-field"
                          name="email"
                          placeholder="Email"
                          type="email"
                          required
                          onChange={handleChange}
                          value={formData.email}
                        />
                        {!isValidData ? (
                          <p className="contact-error">
                            Please Enter Correct data
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input
                          className="input-field"
                          type="text"
                          id="subject"
                          placeholder="Website"
                          name="website"
                          onChange={handleChange}
                          value={formData.website}
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group">
                        <textarea
                          className="input-field"
                          placeholder="How can we help"
                          name="message"
                          id="contact-message"
                          onChange={handleChange}
                          value={formData.message}
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-submit-group">
                        <button
                          name="submit"
                          className="tmp-btn btn-primary"
                          type="submit"
                          id="submit"
                          disabled={isPosting}
                        >
                          {isPosting ? <SmallSpinner /> : "Submit Now"}
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewContact;
