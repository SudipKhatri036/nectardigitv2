import { useNavigate } from "react-router-dom";
import "./BlogCard.css";
import { FaCalendar, FaUser } from "react-icons/fa";

function BlogCard({ blog }) {
  const navigate = useNavigate();

  const { featured_image: featuredImage, id, date, author, title } = blog || {};

  return (
    <div className="col-lg-4 col-md-6">
      <div className="blog-wrap">
        <div className="blog-img">
          <img src={featuredImage} alt="Size" referrerPolicy="no-referrer" />
        </div>

        <div className="blog-content">
          <h3>
            <button onClick={() => navigate(`/blogs/${id}`)}>{title}</button>
          </h3>

          <ul>
            <li>
              <FaCalendar />
              {date}
            </li>
            <li>
              <FaUser />
              {author}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
