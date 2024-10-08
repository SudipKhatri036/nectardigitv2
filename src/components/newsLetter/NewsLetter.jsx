import { FaPaperPlane } from "react-icons/fa6";
import "./NewsLetter.css";
import { useEffect, useState } from "react";

import axios from "axios";
import SmallSpinner from "../smallSpinner/SmallSpinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function NewsLetter() {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isPosting, setIsPosting] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const emailRegx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const valid = emailRegx.test(email);
    setIsValidEmail(valid);

    if (valid) {
      setIsPosting(true);
      axios
        .post("https://jsonplaceholder.typicode.com/posts", { email })
        .then((resp) => {
          console.log(resp);
          setEmail("");
          {
            if (!toast.isActive("news-letter")) {
              toast.success("Newsletter Subscribed", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
            }
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsPosting(false);
          setIsValidEmail(true);
        });
    } else {
      return;
    }
  }

  return (
    <section className="newsletter">
      <div className="container">
        <div className="newsletter-wrap row">
          <div className="col-lg-4">
            <h3>Subscribe To Our Newsletter</h3>
          </div>

          <div className="newsletter-form col-lg-6">
            <form
              action="https://www.nectardigit.com/subscribe"
              method="Post"
              onSubmit={handleSubmit}
            >
              <div className="newsletter-input-cont">
                <div>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {isValidEmail ? (
                    ""
                  ) : (
                    <p className="letter-error">
                      Please Write Valid Email Address
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="tmp-btn btn-primary"
                  id="submitSubcribeBtn"
                  disabled={isPosting}
                >
                  {isPosting ? <SmallSpinner /> : "Subscribe Now"}{" "}
                  <FaPaperPlane />
                </button>
              </div>
            </form>
          </div>
          <ToastContainer containerId={"news-letter"} />
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
