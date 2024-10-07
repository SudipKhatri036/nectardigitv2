import { useState } from "react";
import "./Accordian.css";
import { accordionItems } from "../../api/dummydata";
import { FaQuestion } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Accordian() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="accordion" id="accordionExample">
      <div className="accordian-wrapper">
        {accordionItems.map((item, index) => (
          <div className="card" key={item.id}>
            <div className="card-header" id={`h-${item.id}`}>
              <h2
                className={`accordion-header ${
                  openIndex === index ? "accordion-active" : ""
                }`}
              >
                <div className="accordian-icon">
                  <FaQuestion />
                </div>

                <button
                  className={`accordion-button ${
                    openIndex === index ? "" : "collapsed"
                  }`}
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`c-${item.id}`}
                >
                  {item.question}
                </button>
                <FaArrowRightLong
                  className={`arrow ${openIndex === index ? "faq-open" : ""}`}
                />
              </h2>
            </div>
            <div
              id={`c-${item.id}`}
              className={`collapse ${openIndex === index ? "show" : ""}`}
              aria-labelledby={`h-${item.id}`}
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="accordian-more-qs">
        <h4>Still Have More Questions?</h4>
        <p>
          Contact Our <Link to="/contact">Expert Support Team</Link>
        </p>
      </div>
    </div>
  );
}

export default Accordian;
