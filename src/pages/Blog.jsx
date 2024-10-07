import "./Blog.css";

import PageHero from "../components/pageHero/PageHero";
import BlogNavTabs from "../components/blogNavTabs/BlogNavTabs";
import BlogCard from "../components/blogCard/BlogCard";
import PaginationItem from "../components/paginationItem/PaginationItem";
import useAxios from "../hooks/useAxios";
import Loader from "../components/loader/Loader";

function Blog() {
  const { data, isLoading, error } = useAxios("/blogs");

  if (isLoading) return <Loader />;

  if (error) return <p className="fetch-error">Error: {error.message}</p>;

  return (
    <main className="blog">
      <PageHero imgSrc={"/images/blog-banner-01-1.png"} pageName="Blog" />

      <div className="container mt">
        <BlogNavTabs />

        <div className="row">
          {data?.data.map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
          })}
        </div>
      </div>

      {data?.data.perPage && <PaginationItem />}
    </main>
  );
}

export default Blog;
