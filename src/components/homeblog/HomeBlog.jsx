import "./HomeBlog.css";
import SectionHeading from "../sectionHeading/SectionHeading";
import BlogCard from "../blogCard/BlogCard";
import NewBlogCard from "../newBlogCard/NewBlogCard";
import { homeBlogFeatured } from "../../api/dummydata";

function HomeBlog() {
  return (
    <section className="home-blog">
      <div className="container">
        <SectionHeading
          heading="Our Latest"
          headingHighlight="Blog"
          subheading="We provide a range of IT related services at reasonable cost and with highest quality possible."
        />
        <div className="row blog-card-show">
          {/* <BlogCard
            imgSrc="/images/size.jpg"
            blogCont="What is the marketplace?"
          />
          <BlogCard
            imgSrc="/images/seo-04.jpg"
            blogCont="Technologies trends in Nepal"
          />

          <BlogCard
            imgSrc="/images/seo-2.png"
            blogCont="Search Engine Optimization (SEO)"
          /> */}

          {/* {homeBlogFeatured.map((blog) => {
            console.log(blog.id);

            return <NewBlogCard blog={blog} key={blog.id} />;
          })} */}
        </div>
      </div>
    </section>
  );
}

export default HomeBlog;
