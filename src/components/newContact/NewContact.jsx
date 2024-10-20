import "./NewContact.css";

import CompanyAddress from "../companyAddress/CompanyAddress";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import axios from "axios";
import SmallSpinner from "../smallSpinner/SmallSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../api/PostApi";

const initialState = {
  name: "",
  phone: "",
  email: "",
  subject: "",
  message: "",
};

function NewContact() {
  const [formData, setFormData] = useState(initialState);
  const [isPosting, setIsPosting] = useState(false);
  const [isValidData, setIsValidData] = useState(true);

  const handleChange = (e) => {
    setFormData((values) => ({ ...values, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const validName = formData.name.trim().length > 0;
    const validEmail = emailRegx.test(formData.email);

    if (!validEmail && !validEmail) setIsValidData(false);
    else setIsValidData(true);

    if (validName && validEmail && formData.phone) {
      try {
        setIsPosting(true);
        const response = await axiosInstance.post("/contact", formData);

        console.log(response);

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
      } catch (err) {
        console.log(err.response);
      } finally {
        setIsPosting(false);
      }
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
                          name="name"
                          required
                          onChange={handleChange}
                          value={formData.name}
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
                          name="phone"
                          placeholder="Phone"
                          type="text"
                          required
                          onChange={handleChange}
                          value={formData.phone}
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
                          name="subject"
                          onChange={handleChange}
                          value={formData.subject}
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
