import { FaListUl, FaTh } from "react-icons/fa";

import "./BlogNavTabs.css";

function BlogNavTabs() {
  return (
    <ul className="nav nav-tabs" id="myTab" role="tablist">
      <li className="nav-item" role="presentation">
        <button
          className="nav-link active"
          id="grid-tab"
          data-bs-toggle="tab"
          data-bs-target="#grid"
          type="button"
          role="tab"
          aria-controls="grid"
          aria-selected="true"
        >
          <FaTh /> Grid
        </button>
      </li>
      <li className="nav-item" role="presentation">
        <button
          className="nav-link"
          id="list-tab"
          data-bs-toggle="tab"
          data-bs-target="#list"
          type="button"
          role="tab"
          aria-controls="list"
          aria-selected="false"
        >
          <FaListUl /> List
        </button>
      </li>
    </ul>
  );
}

export default BlogNavTabs;
