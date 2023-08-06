import React from "react";
import product12 from "../assets/images/product/12.jpg";
import product10 from "../assets/images/product/10.jpg";
import product11 from "../assets/images/product/11.jpg";
import product13 from "../assets/images/product/13.jpg";
import product14 from "../assets/images/product/14.jpg";
import product15 from "../assets/images/product/15.jpg";
import brand1 from "../assets/images/brand/01.png";
import brand2 from "../assets/images/brand/02.png";
import brand3 from "../assets/images/brand/03.png";
import brand4 from "../assets/images/brand/04.png";
import brand5 from "../assets/images/brand/05.png";
import brand6 from "../assets/images/brand/06.png";
import counterupicon1 from "../assets/images/counter-up/icon/01.png";
import logoDesgin_02 from "../assets/images/logo/naveen_02.png";
import logoDesgin from "../assets/images/logo/naveen.png";
import Testimonials from "./Testimonials";

function Protfolio() {
  return (
    <>
      <div className="rts-product-area rts-section-gap2Bottom" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-title-tab-b">
                <div className="title-area-home-4 text-start">
                  <span className="pre-title">My Case Studies</span>
                  <h2 className="title">Introduce My Projects</h2>
                </div>
                <div className="tab-button-area">
                  <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link active"
                        id="homes-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#homes"
                        type="button"
                        role="tab"
                        aria-controls="homes"
                        aria-selected="true"
                      >
                        All(6)
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="false"
                      >
                        Branding
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="homel-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#homel"
                        type="button"
                        role="tab"
                        aria-controls="homel"
                        aria-selected="false"
                      >
                        Web Design
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Photography
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                        className="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Logo Design
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-projects-style-four mt--60">
          <div className="row">
            <div className="col-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="homes"
                  role="tabpanel"
                  aria-labelledby="homes-tab"
                >
                  <div className="row g-24">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product10} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product11} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 co-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product12} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 co-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product13} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product14} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product15} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="homes"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row g-24">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product10} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product11} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 co-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product12} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 co-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product13} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product14} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product15} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="homel"
                  role="tabpanel"
                  aria-labelledby="homel-tab"
                >
                  <div className="row g-24">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product10} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product11} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 co-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product12} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 co-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product13} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product14} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product15} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row g-24">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product10} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product11} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 co-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product12} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 co-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product13} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product14} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product15} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="row g-24">
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product10} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product11} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 co-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product12} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 co-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={product13} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Website Design</span>
                            <a href="project-details.html">
                              <h5 className="title">News Website Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={logoDesgin_02} alt="product-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Logo Design</span>
                            <a href="project-details.html">
                              <h5 className="title">Logo Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 col-12">
                      <div className="rts-prodyct-style-four">
                        <div className="thumbnail">
                          <a
                            href="project-details.html"
                            className="thumbnail-img"
                          >
                            <img src={logoDesgin} alt="logo-image" />
                          </a>
                          <div className="icon">
                            <a href="project-details.html">
                              <i className="fal fa-arrow-right" />
                            </a>
                          </div>
                          <div className="inner-text">
                            <span>Logo Design</span>
                            <a href="project-details.html">
                              <h5 className="title">Logo Design</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-counter-up-area counter-bg-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-wrapper-counter-up">
                {/* single */}
                <div className="single-counter-style-4">
                  <div className="icon">
                    <img src={counterupicon1} alt="logo-counter" />
                  </div>
                  <div className="inner">
                    <h3 className="title">
                      <span className="counter animated fadeInDownBig plus">
                        15
                      </span>
                    </h3>
                    <span>Happy Clients</span>
                  </div>
                </div>
                {/* single */}
                {/* single */}
                <div className="single-counter-style-4">
                  <div className="icon">
                    <img src={counterupicon1} alt="logo-counter" />
                  </div>
                  <div className="inner">
                    <h3 className="title">
                      <span className="counter animated fadeInDownBig">50</span>
                    </h3>
                    <span>Projects Done</span>
                  </div>
                </div>
                {/* single */}
                {/* single */}
                <div className="single-counter-style-4">
                  <div className="icon">
                    <img src={counterupicon1} alt="logo-counter" />
                  </div>
                  <div className="inner">
                    <h3 className="title ">
                      <span className="counter animated fadeInDownBig plus">
                        3
                      </span>
                    </h3>
                    <span>Years of Experience</span>
                  </div>
                </div>
                {/* single */}
                {/* single */}
                <div className="single-counter-style-4">
                  <div className="icon">
                    <img src={counterupicon1} alt="logo-counter" />
                  </div>
                  <div className="inner">
                    <h3 className="title">
                      <span className="counter animated fadeInDownBig">
                        8250
                      </span>
                    </h3>
                    <span>Hours of Work</span>
                  </div>
                </div>
                {/* single */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Testimonials />

      <div className="rts-brand-area rts-section-gap2Bottom">
        <div className="brand-container">
          <div className="brand-main-wrapper text-anim">
            {/* single brand area */}
            <div className="rts-single-brand">
              <a href="#">
                <img src={brand1} alt="brand-image" />
              </a>
            </div>
            {/* single brand area End */}
            {/* single brand area */}
            <div className="rts-single-brand">
              <a href="#">
                <img src={brand2} alt="brand-image" />
              </a>
            </div>
            {/* single brand area End */}
            {/* single brand area */}
            <div className="rts-single-brand">
              <a href="#">
                <img src={brand3} alt="brand-image" />
              </a>
            </div>
            {/* single brand area End */}
            {/* single brand area */}
            <div className="rts-single-brand">
              <a href="#">
                <img src={brand4} alt="brand-image" />
              </a>
            </div>
            {/* single brand area End */}
            {/* single brand area */}
            <div className="rts-single-brand">
              <a href="#">
                <img src={brand5} alt="brand-image" />
              </a>
            </div>
            {/* single brand area End */}
            {/* single brand area */}
            <div className="rts-single-brand">
              <a href="#">
                <img src={brand6} alt="brand-image" />
              </a>
            </div>
            {/* single brand area End */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Protfolio;
