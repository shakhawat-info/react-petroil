import React from "react";

const Blog = () => {
  return (
    <section id="blog">
      <div class="container">
        <div class="main_blog">
          <div class="blog_item">
            <img src="photos/blogimg1.png" alt="blogimg1" />
            <div class="blog_txt">
              <h2>
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h2>
              <a href="#">read more</a>
            </div>
          </div>
          <div class="blog_item">
            <img src="photos/blogimg2.png" alt="blogimg1" />
            <div class="blog_txt">
              <h2>
                lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                eiusmod.
              </h2>
              <a href="#">read more</a>
            </div>
          </div>
          <div class="blog_item">
            <img src="photos/blogimg3.png" alt="blogimg1" />
          </div>
        </div>
        <div class="more_blog">
          <a href="#">
            more from the blog{" "}
            <span>
              <i class="fa-solid fa-chevron-right"></i>
            </span>{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
