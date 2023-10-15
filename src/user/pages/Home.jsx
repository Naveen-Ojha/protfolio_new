import React, { useState, useEffect } from "react";
// import bannerImg from "../assets/images/banner/04.png";
import bannerImg from "../assets/images/profile_img/my_img.png";
import { Link } from "react-router-dom";
import { apiEndPoint } from "../../enviroment";
import axios from "axios";

function Home() {
  const [response, setResponse] = useState([]);

  const getCategory = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiEndPoint}category`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        setResponse(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCategory();
  });
  return (
    <>
      <div id="side-bar" className="side-bar mazin-home">
        <button className="close-icon-menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={37}
            height={40}
            viewBox="0 0 37 40"
            fill="none"
          >
            <path d="M1.34412 39.4243L35.9024 0.918108" stroke="black" />
            <path d="M35.9023 39.4243L1.3441 0.918108" stroke="black" />
          </svg>
        </button>
        {/* inner menu area desktop start */}
        <div className="rts-sidebar-menu-desktop">
          {/* <a class="logo-1" href="index.html"><img class="logo" src="assets/images/logo/mazin-01.svg" alt="axela_logo"></a> */}
          <div className="inner-wrapper">
            <div className="body-mobile">
              <nav className="nav-main mainmenu-nav mt--30">
                <ul className="mainmenu" id="mobile-menu-active">
                  {response.map((category) => {
                    const { name, url } = category;
                    return (
                      <li className="one">
                        <a href={`#${url}`}>{name}</a>
                      </li>
                    );
                  })}
                  {/* <li className="one">
                    <a href="#home">Home</a>
                  </li>
                  <li className="two">
                    <a href="#about">About Us</a>
                  </li>
                  <li className="three">
                    <a href="#service">Services</a>
                  </li>
                  <li className="four">
                    <a href="#works">Works</a>
                  </li>
                  <li className="five">
                    <a href="#blog">Blog</a>
                  </li>
                  <li className="six">
                    <a href="#contact">Contact Us</a>
                  </li> */}
                </ul>
              </nav>
            </div>
            <div className="contact-info-area-wrapper">
              <div className="phone single">
                <h6 className="title">PHONE:</h6>
                <a href="#">+91 8770434284</a>
              </div>
              <div className="address single">
                <h6 className="title">ADDRESS:</h6>
                <a href="#">Dwarka 110078, India.</a>
              </div>
              <div className="mail single">
                <h6 className="title">E-mail:</h6>
                <a href="#">naveen.ojha.rewa@gmail.com</a>
              </div>
              <div className="follow single">
                <h6 className="title">FOLLOW US:</h6>
                <div className="social-wrapper-two">
                  <ul className="social-area">
                    <li
                      data-sal-delay={150}
                      data-sal="slide-up"
                      data-sal-duration={800}
                      className="sal-animate"
                    >
                      <Link
                        target="_blank"
                        to="https://www.facebook.com/profile.php?id=100006939617509"
                      >
                        <i className="fab fa-facebook-f" />
                      </Link>
                    </li>
                    <li
                      data-sal-delay={250}
                      data-sal="slide-up"
                      data-sal-duration={800}
                      className="sal-animate"
                    >
                      <Link
                        target="_blank"
                        to="https://twitter.com/TheNaveenOjha"
                      >
                        <i className="fab fa-twitter" />
                      </Link>
                    </li>
                    <li
                      data-sal-delay={350}
                      data-sal="slide-up"
                      data-sal-duration={800}
                      className="sal-animate"
                    >
                      <Link
                        target="_blank"
                        to="https://www.linkedin.com/in/naveen-kant-ojha-13608b189/"
                      >
                        <i className="fab fa-linkedin-in" />
                      </Link>
                    </li>
                    <li
                      data-sal-delay={450}
                      data-sal="slide-up"
                      data-sal-duration={800}
                      className="sal-animate"
                    >
                      <Link href="#">
                        <i className="fab fa-skype" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-banner-style-four pb--80 pt--200 pt_sm--80" id="home">
        {/* <div className="banner-shape-4 text-anim">
          <img src="assets/images/banner/shape/07.png" alt="banner-shape" />
        </div> */}
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2">
              {/* sbanenr four content-wrapper */}
              <div className="banner-content-four">
                <span className="pre-title">Software Developer</span>
                <h1 className="title quote">Naveen Ojha</h1>
                <p className="banner-disc text-anim">
                  Perfection is achieved not whenthere is nothing more to add,
                  but rather when&nbsp;there is nothing more to take away.
                </p>
                <div className="button-banner-wrapper text-anim">
                  <a
                    download="true"
                    href="/"
                    className="rts-btn btn-main-2 mr--20"
                  >
                    Download CV
                  </a>
                  <a
                    href="#gettouch"
                    className="rts-btn btn-main-2-alta smooth-scroll-1"
                  >
                    Hire Me Now
                  </a>
                </div>
                <div className="socials style-four">
                  <p className="disc">Check out my:</p>
                  <div className="social-area-wrapper">
                    <ul>
                      <li>
                        <Link
                          target="_blank"
                          to="https://www.facebook.com/profile.php?id=100006939617509"
                        >
                          <i className="fab fa-facebook-f" />
                        </Link>
                        <Link
                          target="_blank"
                          to="https://twitter.com/TheNaveenOjha"
                        >
                          <i className="fab fa-twitter" />
                        </Link>
                        <Link
                          target="_blank"
                          to="https://www.linkedin.com/in/naveen-kant-ojha-13608b189/"
                        >
                          <i className="fab fa-linkedin-in" />
                        </Link>
                        <Link target="_blank" to="#">
                          <i className="fab fa-skype" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* sbanenr four content-wrapper end */}
            </div>
            <div className="col-xl-5 col-lg-6 col-md-12 col-sm-12 order-xl-2 order-lg-2 order-md-1 order-sm-1 order-1">
              <div className="thumbnail">
                <img src={bannerImg} alt="banenr-images" />
                <div className="thumb-badge">
                  <div className="left">
                    <h4 className="title">3+</h4>
                  </div>
                  <div className="right">
                    Years of <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
