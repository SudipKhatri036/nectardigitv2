import "./SectionHeading.css";
import { FaChartBar } from "react-icons/fa6";

function SectionHeading({ heading, headingHighlight, subheading }) {
  return (
    <div className="heading-cont">
      <h2 className="heading-secondary">
        {heading} <span className="heading-highlight">{headingHighlight}</span>
      </h2>
      <p className="subheading">{subheading}</p>

      <span className="title-pattern">
        <FaChartBar className="chart-icon" />
      </span>
    </div>
  );
}

export default SectionHeading;
