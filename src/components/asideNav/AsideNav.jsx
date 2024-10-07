import { IoClose } from "react-icons/io5";

import "./AsideNav.css";
import SocialIconsCont from "../socialIconsCont/SocialIconsCont";
import CompanyAddress from "../companyAddress/CompanyAddress";

function AsideNav({ isAsideOpen, setIsAsideOpen }) {
  return (
    <div className={`header-modal ${isAsideOpen ? "active" : ""}`}>
      <div
        className="modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-header-logo">
                <img src="/images/site-logo.png" alt="Logo" />
              </div>
              <button
                type="button"
                className="btn-close btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => setIsAsideOpen(false)}
              >
                <IoClose />
              </button>
            </div>
            <div className="modal-body">
              <div className="contact-information">
                <CompanyAddress />
              </div>
              <div className="modal-social-media">
                <h3>Follow Us On:</h3>
              </div>
              <SocialIconsCont />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AsideNav;
