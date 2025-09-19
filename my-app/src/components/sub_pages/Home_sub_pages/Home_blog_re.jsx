import React from "react";
import { assets } from "../../../assets/assets";


const BlogCard = ({ img, author, date, title, link, variant = "vertical" }) => {
  return (
    <div className={`test-blog-card ${variant === "horizontal" ? "test-style-horizontal_2" : "test-style-vertical"}`}>
      <div className="post-img">
        <img src={img} alt={title} />
      </div>
      <div className="post-body">
        <div className="blog-meta d-flex flex-wrap align-items-center gap-2">
          <a href="#">{author}</a>
          <div className="dot"></div>
          <a href="#">{date}</a>
        </div>
        <a className="post-title h4" href={link}>
          {title}
        </a>
        <div className="d-block mt-3">
          <a className="btn btn-link" href={link}>
            View Details <i className="icon-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

const Home_blog_re = () => {
  return (
    <section className="blog-section">
      <div className="divider"></div>

      {/* Heading */}
      <div className="container">
        <div className="row g-5 align-items-end">
          <div className="col-12 col-sm-6">
            <div className="section-heading">
              <span className="sub-title">News &amp; Updates</span>
              <h2 className="mb-0">Our Latest News &amp; Articles</h2>
            </div>
          </div>
          <div className="col-12 col-sm-6 text-sm-end">
            <a href="blog-grid.html" className="btn btn-primary">
              View All Blogs <i className="icon-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="divider-sm"></div>

      {/* Blog cards */}
      <div className="container">
        <div className="row g-4">
          {/* Left column (vertical card) */}
          <div className="col-12 col-md-5 col-xxl-4">
            <BlogCard
              img={assets.twenty_eight}
              author="By Admin"
              date="26 June 2025"
              title="The Ultimate Guide to Traveling"
              link="blog-details.html"
              variant="vertical"
            />
          </div>

          {/* Right column (horizontal stacked cards) */}
          <div className="col-12 col-md-7 col-xxl-8">
            <div className="d-flex gap-4 flex-column">
              <BlogCard
                img={assets.twenty_eight}
                author="Knowledge"
                date="26 June 2025"
                title="The Ultimate Guide to Traveling When You Have No Money"
                link="blog-details.html"
                variant="horizontal"
              />
              <BlogCard
                img={assets.twenty_eight}
                author="Knowledge"
                date="26 June 2025"
                title="The Ultimate Guide to Traveling When You Have No Money"
                link="blog-details.html"
                variant="horizontal"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="divider"></div>
    </section>
  );
};

export default Home_blog_re;
