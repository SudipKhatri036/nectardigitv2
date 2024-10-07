import { useParams } from "react-router-dom";
import { FaCalendar } from "react-icons/fa6";
import { FaSearch, FaUser } from "react-icons/fa";
import useAxios from "../../hooks/useAxios";
import PageHero from "../pageHero/PageHero";
import RelatedPosts from "../relatedPosts/RelatedPosts";
import Loader from "../loader/Loader";

import "./BlogContent.css";

function BlogContent() {
  const { id } = useParams();

  const { data, isLoading, error } = useAxios(`/blogs/${id}`, "Get", null, [
    ...id,
  ]);

  if (isLoading) return <Loader />;

  if (error) return <p className="fetch-error">Error: {error.message}</p>;

  return (
    <section className="blog-details">
      <PageHero
        imgSrc={"/images/blog-banner-01-1.png"}
        pageName={data?.data.title}
      />

      <div className="page-details mt mb">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-7">
              <div className="blog-details-wrap">
                <h3>{data?.data.title}</h3>
                <div className="blog-details-repoter-wrap">
                  <div className="blog-details-repoter-wrap-left">
                    <ul>
                      <li>
                        <FaCalendar /> {data?.data.date}
                      </li>
                      <li>
                        <FaUser /> {data?.data.author}
                      </li>
                    </ul>
                  </div>
                  <div className="blog-details-repoter-wrap-right">
                    <ul>
                      <li>
                        <div
                          className="sharethis-inline-share-buttons st-center  st-inline-share-buttons st-animated"
                          id="st-1"
                        >
                          <div
                            className="st-btn st-last                                                                  st-remove-label"
                            data-network="sharethis"
                          >
                            <img
                              alt="sharethis-white sharing button"
                              src="https://platform-cdn.sharethis.com/img/sharethis-white.svg"
                            />
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <img src="/images/size.png" alt="What is the marketplace?" />
                <div
                  className="blog-details-content"
                  dangerouslySetInnerHTML={{ __html: data?.data.description }}
                ></div>
              </div>
            </div>

            <div className="col-lg-4 col-md-5">
              <div className="blog-sidebar">
                <div className="blog-search sidebar-bg">
                  <form method="get" action="https://www.nectardigit.com/blog">
                    <div className="blog-search-wrap">
                      <input
                        type="text"
                        name="keyword"
                        className="form-control"
                        placeholder="Search..."
                      />
                      <button type="submit" className="btn btn-primary">
                        <FaSearch />
                      </button>
                    </div>
                  </form>
                </div>

                <div className="popular-post sidebar-bg">
                  <h3>Blog Category</h3>

                  <ul>
                    <li>
                      <div className="post-img"></div>
                      <div className="post-content">
                        <a href="">
                          <h4>Technology</h4>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="post-img"></div>
                      <div className="post-content">
                        <a href="">
                          <h4>Technology</h4>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="post-img"></div>
                      <div className="post-content">
                        <a href="">
                          <h4>Technology</h4>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="post-img"></div>
                      <div className="post-content">
                        <a href="">
                          <h4>Technology</h4>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="post-img"></div>
                      <div className="post-content">
                        <a href="">
                          <h4>Technology</h4>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="post-img"></div>
                      <div className="post-content">
                        <a href="">
                          <h4>Technology</h4>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="post-img"></div>
                      <div className="post-content">
                        <a href="">
                          <h4>Technology</h4>
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="post-img"></div>
                      <div className="post-content">
                        <a href="">
                          <h4>Technology</h4>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <RelatedPosts viewId={data?.data.id} />
    </section>
  );
}

export default BlogContent;
