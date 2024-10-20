import { FaLinesLeaning } from "react-icons/fa6";
import Accordian from "../accordian/Accordian";
import SectionHeading from "../sectionHeading/SectionHeading";
import "./Faq.css";

function Faq() {
  return (
    <section className="faq mt pt pb">
      <div className="container">
        {/* <div className="faq-header">
          <div className="faq-subtitle">
            <FaLinesLeaning />{" "}
            <span className="faq-subtitle-txt">Questions and Answers</span>
          </div>
          <h2>Frequency Asked Questions</h2>
        </div> */}

        <SectionHeading
          heading="Frequently Asked"
          headingHighlight="Question"
        />

        <div className="row">
          <div className="col-lg-6 col-md-5">
            <div className="faq-img">
              <img src="/images/faq-1.png" alt="images" />
            </div>
          </div>
          <div className="col-lg-6 col-md-7">
            <Accordian />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
