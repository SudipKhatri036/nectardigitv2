import React from "react";
import { FaCalendar, FaUser } from "react-icons/fa6";
import "./NewBlogCard.css";

function NewBlogCard({ blog }) {
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="blog-card"
        style={{
          background: `url(${blog.imgUrl}) no-repeat`,
          backgroundPosition: "Center",
          backgroundSize: "Cover",
        }}
      >
        <div className="title-content">
          <h3>{blog.title}</h3>
          <hr />
        </div>

        <div className="card-info">{blog.content}</div>

        <div className="utility-info">
          <ul className="utility-list">
            <li className="blog-author">
              <FaUser /> {blog.author}
            </li>
            <li className="blog-date">
              <FaCalendar /> {blog.date}
            </li>
          </ul>
        </div>
        <div className="gradient-overlay"></div>
        <div className="color-overlay"></div>
      </div>
    </div>
  );
}

export default NewBlogCard;
