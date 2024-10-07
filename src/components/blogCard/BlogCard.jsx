import { useNavigate } from "react-router-dom";
import "./BlogCard.css";
import { FaCalendar, FaUser } from "react-icons/fa";

function BlogCard({ blog }) {
  const navigate = useNavigate();

  return (
    <div className="col-lg-4 col-md-6">
      <div className="blog-wrap">
        <div className="blog-img">
          <img src="/images/seo-01.jpg" alt="Size" />
        </div>

        <div className="blog-content">
          <h3>
            <button onClick={() => navigate(`/blogs/${blog?.id}`)}>
              {blog?.title}
            </button>
          </h3>

          <ul>
            <li>
              <FaCalendar />
              {blog?.date}
            </li>
            <li>
              <FaUser />
              {blog?.author}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
