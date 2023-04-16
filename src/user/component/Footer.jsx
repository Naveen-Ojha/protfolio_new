import React from "react";
import logo from "../assets/images/logo/naveen_02.png";
import img1 from "../assets/images/footer/gallery/01.png";
import img2 from "../assets/images/footer/gallery/02.png";
import img3 from "../assets/images/footer/gallery/03.png";
import img4 from "../assets/images/footer/gallery/04.png";
import img5 from "../assets/images/footer/gallery/05.png";
import img6 from "../assets/images/footer/gallery/06.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="rts-footer-area footer-bg-3 footer-three four">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="footer-four-left footer-single-wized ptb--100 ptb_sm--40">
                <a className="logo" href="index-three.html">
                  <img src={logo} alt="logo-area" />
                </a>
                <p className="disc">
                  A Full Stack Developer. If you want to create a website or you
                  have some queries, then feel free to contact me.
                </p>
                <a
                  href="#gettouch"
                  className="rts-btn btn-main-2 smooth-scroll-1"
                >
                  Hire Me Now
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mid-footer-wrapper-4">
                <div className="social-inner">
                  <ul>
                    <li>
                      <Link
                        target="_blank"
                        to="https://www.facebook.com/profile.php?id=100006939617509"
                      >
                        Facebook
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        to="https://twitter.com/TheNaveenOjha"
                      >
                        Twitter
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        to="https://www.linkedin.com/in/naveen-kant-ojha-13608b189/"
                      >
                        Linkedin
                      </Link>
                    </li>
                    <li>
                      <Link
                        target="_blank"
                        to="https://www.instagram.com/naveenojha46/"
                      >
                        Instagram
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="footer-three-mid footer-single-wized ptb--100 ptb_sm--40">
                  <h5 className="title">Conatact Us</h5>
                  <div className="body contact-area">
                    {/* single address */}
                    <div className="single-address">
                      <div className="icon">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="discription">
                        <p>Our Address</p>
                        <span>Dwakra, 11078, New Delhi</span>
                      </div>
                    </div>
                    {/* single address end */}
                    {/* single address */}
                    <div className="single-address">
                      <div className="icon">
                        <i className="far fa-at" />
                      </div>
                      <div className="discription">
                        <p>Our Email</p>
                        <span>naveen.ojha.rewa@gmail.com</span>
                      </div>
                    </div>
                    {/* single address end */}
                    {/* single address */}
                    <div className="single-address">
                      <div className="icon">
                        <i className="fas fa-headset" />
                      </div>
                      <div className="discription">
                        <p>Our Phone</p>
                        <span>(+91) 87704-34284</span>
                      </div>
                    </div>
                    {/* single address end */}
                  </div>
                </div>
              </div>
            </div>
            {/* footer end area start */}
            <div className="col-lg-3 ptb--100 ptb_sm--40">
              <div className="footer-two-single-gallery-area three">
                <h5 className="title">Instagram Posts</h5>
                <div className="gallery-image">
                  <a href="#">
                    <img src={img1} alt="Footer-two" />
                  </a>
                  <a href="#">
                    <img src={img2} alt="Footer-two" />
                  </a>
                  <a href="#">
                    <img src={img3} alt="Footer-two" />
                  </a>
                  <a href="#">
                    <img src={img4} alt="Footer-two" />
                  </a>
                  <a href="#">
                    <img src={img5} alt="Footer-two" />
                  </a>
                  <a href="#">
                    <img src={img6} alt="Footer-two" />
                  </a>
                </div>
              </div>
            </div>
            {/* footer end area end */}
          </div>
        </div>
        <div className="footer-copyright-four">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="inner">
                  <div className="left">
                    <p className="disc">
                      © 2023 Naveen | All rights reserved by{" "}
                      <a href="#">Naveen Kant Ojha</a>
                    </p>
                  </div>
                  <div className="right">
                    <div className="menu">
                      <ul>
                        <li>
                          <a href="#">ABOUT </a>
                        </li>
                        <li>
                          <a href="#">CONTACT </a>
                        </li>
                        <li>
                          <a href="#">CAREER </a>
                        </li>
                        <li>
                          <a href="#">FAQS </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div id="preloader" className="preloader">
          <div className="animation-preloader">
            <div className="spinner"></div>
            <div className="txt-loading">
              <span data-text-preloader="N" className="letters-loading">
                N
              </span>
              <span data-text-preloader="A" className="letters-loading">
                A
              </span>
              <span data-text-preloader="V" className="letters-loading">
                V
              </span>
              <span data-text-preloader="E" className="letters-loading">
                E
              </span>
              <span data-text-preloader="E" className="letters-loading">
                E
              </span>
              <span data-text-preloader="N" className="letters-loading">
                N
              </span>
            </div>
            <p className="text-center">Loading</p>
          </div>
          <div className="loader">
            <div className="row">
              <div className="col-3 loader-section section-left">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-left">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg" />
              </div>
              <div className="col-3 loader-section section-right">
                <div className="bg" />
              </div>
            </div>
          </div>
        </div>
        {/* progress Back to top */}
        <div className="progress-wrap">
          <svg
            className="progress-circle svg-content"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path
              d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
              style={{
                transition: "stroke-dashoffset 10ms linear 0s",
                strokeDasharray: "307.919, 307.919",
                strokeDashoffset: "12.1586",
              }}
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Footer;
