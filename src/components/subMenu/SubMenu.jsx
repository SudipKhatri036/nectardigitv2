import { Link } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import Loader from "../loader/Loader";

function SubMenu({ isSubMenuOpen }) {
  const { data, isLoading, error } = useAxios("/marketing");

  if (isLoading) <Loader />;

  if (error) return <p className="fetch-error">Error: {error.message}</p>;

  return (
    <ul className={`sub-menu ${isSubMenuOpen ? "sub-menu--open" : ""}`}>
      {data?.data.map((subLink) => {
        return (
          <li key={subLink.id}>
            <Link to={`/marketing/${subLink.id}`} className="nav-sub-links">
              {subLink.title.en}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default SubMenu;
