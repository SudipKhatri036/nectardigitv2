import { Link } from "react-router-dom";
import "./PageHero.css";

function PageHero({ imgSrc, pageName }) {
  return (
    <section
      style={{ backgroundImage: `url(${imgSrc})` }}
      className="bg-section"
    >
      <div className="container">
        <div className="bg-section-wrap">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" title="Home">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {pageName}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
