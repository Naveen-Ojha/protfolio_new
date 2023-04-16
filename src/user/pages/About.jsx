import React from "react";
import aboutImg from "../assets/images/about/04.png";
import shape02 from "../assets/images/about/shape/02.png";

function About() {
  return (
    <div className="rts-about-area four rts-section-gap2Bottom" id="about">
      <div className="shape-about-4">
        <img src={shape02} alt="shape" />
      </div>
      <div className="container-about">
        <div className="about-style-circle">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="thumbnail">
                <img src={aboutImg} alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12">
              <div className="details-about-area">
                <div className="title-area-home-4 text-start">
                  <span className="pre-title">About My Self</span>
                  <h2 className="title">
                    I am Software Developer <br />
                    &amp; Web Developer
                  </h2>
                </div>
                <div className="experience-area">
                  <p className="exp">
                    Experience: <span>3 Years</span>
                  </p>
                  <p className="exp">
                    Specialty: <span> Product Designer, Developer</span>
                  </p>
                  <p className="exp">
                    Address: <span>New Delhi, India</span>
                  </p>
                  <p className="exp">
                    Email: <span>naveen.ojha.rewa@gmail.com</span>
                  </p>
                  <p className="exp">
                    Phone: <span>+91 8770434284</span>
                  </p>
                  <p className="exp">
                    Freelance: <span>Available</span>
                  </p>
                </div>
                <a
                  href="#portfolio"
                  className="rts-btn btn-main-2 smooth-scroll-1 mt--40"
                >
                  View All Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
