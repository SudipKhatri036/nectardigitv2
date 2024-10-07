import React, { useState } from "react";
import SectionHeading from "../sectionHeading/SectionHeading";
import BlogCard from "../blogCard/BlogCard";
import useAxios from "../../hooks/useAxios";
import Loader from "../loader/Loader";

function RelatedPosts({ viewId }) {
  const { data, isLoading, error } = useAxios("/blogs", "GET", null, []);

  if (isLoading) return <Loader />;

  if (error) return <p className="fetch-error">Error: {error.message}</p>;

  const filterdData = data?.data.filter((blog) => blog.id !== viewId);

  const randomNum = Math.floor(Math.random() * filterdData.length) + 1;

  const maxNum = randomNum === filterdData.length - 1 ? 0 + 3 : randomNum + 3;

  return (
    <section className="related-blog pt pb">
      <div className="container">
        <SectionHeading
          heading="Related"
          headingHighlight="Posts"
          subheading="We provide a range of IT related services at reasonable cost and with highest quality possible."
        />
        <div className="row">
          {filterdData?.slice(randomNum, maxNum).map((blog) => {
            return <BlogCard key={blog.id} blog={blog} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default RelatedPosts;
