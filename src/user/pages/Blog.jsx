import React from "react";
import blog4 from '../assets/images/blog/04.jpg'
import blog5 from '../assets/images/blog/05.jpg'
import blog6 from '../assets/images/blog/06.jpg'

function Blog() {
  return (
    <>
      <div
        className="rts-blog-area-h2 blog-h3 rts-section-gap2Bottom"
        id="blog"
      >
        <div className="container">
          <div className="row">
            <div className="title-area-home-4 text-center">
              <span className="pre-title">Testimonials</span>
              <h2 className="title">Client’s Feedbacks</h2>
            </div>
          </div>
          <div className="row g-5 mt--10">
            <div className="col-lg-4 text-anim">
              {/* single post area start */}
              <div className="rts-post-area-h2 style-four">
                <a href="#" className="thumbnail">
                  <img src={blog4} alt="rts-blog-image" />
                </a>
                <div className="content-area">
                  <div className="icon-area">
                    <i className="far fa-clock" />
                    <span>March 30, 2023</span>
                  </div>
                  <a href="#">
                    <h5 className="title">
                      Consider build support with your design clients
                    </h5>
                  </a>
                  <a href="#" className="rts-btn btn-main-2">
                    Read More
                  </a>
                </div>
              </div>
              {/* single post area end */}
            </div>
            <div className="col-lg-4 text-anim">
              {/* single post area start */}
              <div className="rts-post-area-h2 style-four">
                <a href="#" className="thumbnail">
                  <img src={blog5} alt="rts-blog-image" />
                </a>
                <div className="content-area">
                  <div className="icon-area">
                    <i className="far fa-clock" />
                    <span>March 30, 2023</span>
                  </div>
                  <a href="#">
                    <h5 className="title">
                      How to build support with your design clients
                    </h5>
                  </a>
                  <a href="#" className="rts-btn btn-main-2">
                    Read More
                  </a>
                </div>
              </div>
              {/* single post area end */}
            </div>
            <div className="col-lg-4 text-anim">
              {/* single post area start */}
              <div className="rts-post-area-h2 style-four">
                <a href="#" className="thumbnail">
                  <img src={blog6} alt="rts-blog-image" />
                </a>
                <div className="content-area">
                  <div className="icon-area">
                    <i className="far fa-clock" />
                    <span>March 30, 2023</span>
                  </div>
                  <a href="#">
                    <h5 className="title">
                      Best build support with your design clients
                    </h5>
                  </a>
                  <a href="#" className="rts-btn btn-main-2">
                    Read More
                  </a>
                </div>
              </div>
              {/* single post area end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
