import React from "react";
import shape8 from "../assets/images/banner/shape/08.png";
import bg01 from "../assets/images/bg/01.png";
import icon07 from "../assets/images/skill/icon/07.png";
import icon08 from "../assets/images/skill/icon/08.png";
import icon09 from "../assets/images/skill/icon/09.png";
import icon01 from "../assets/images/skill/icon/01.svg";
import icon02 from "../assets/images/skill/icon/02.svg";
import icon03 from "../assets/images/skill/icon/03.svg";
import icon04 from "../assets/images/skill/icon/04.svg";
import icon05 from "../assets/images/skill/icon/05.svg";
import icon06 from "../assets/images/skill/icon/06.svg";
import { Link } from "react-router-dom";

export default function Experince() {
  return (
    <>
      <div className="rts-skill-area rts-section-gap2Bottom">
        <div className="side-shape">
          <img src={shape8} alt="" />
        </div>
        <div className="shape-skill">
          <img src={bg01} alt="shape-image" />
        </div>
        <div className="container pt--120 p_sm--60">
          <div className="row">
            <div className="col-12">
              <div className="title-area-home-4 text-center">
                <span className="pre-title">My Expertise</span>
                <h2 className="title">Skills &amp; Experience</h2>
              </div>
            </div>
          </div>
          <div className="row g-24 mt--30">
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12 pl--100 pl_sm--40">
              {/* skill accordion area start */}
              <div className="accordion-skill-style">
                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        <div className="left">
                          <img src={icon07} alt="" />
                          <div className="disc">
                            <span className="title">Software Engineer</span>
                            <span className="desig">Appin Technology</span>
                          </div>
                        </div>
                        <div className="right">
                          <div className="date">2020 - 2021</div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Company Name - &nbsp;
                        <Link
                          target="_blank"
                          to="http://www.appintechnology.in/"
                        >
                          Appin Technology.
                        </Link>
                        <span>
                          &nbsp; I am working from January 2020 to january 2021
                          as a Full Time Employee.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        <div className="left">
                          <img src={icon08} alt="" />
                          <div className="disc">
                            <span className="title">Software Engineer</span>
                            <span className="desig">Digidu Technology</span>
                          </div>
                        </div>
                        <div className="right">
                          <div className="date">2021 - 2022</div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Company Name - &nbsp;
                        <Link target="_blank" to="http://digidu.co/">
                          Digidu Technology.
                        </Link>
                        <span>
                          &nbsp; I am working from January 2021 to March 2022 as
                          a Full Time Employee.
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        <div className="left">
                          <img src={icon09} alt="" />
                          <div className="disc">
                            <span className="title">Full-Stack Developer</span>
                            <span className="desig">Mojo Innovative</span>
                          </div>
                        </div>
                        <div className="right">
                          <div className="date">2022 - Present</div>
                        </div>
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        Company Name - &nbsp;
                        <Link target="_blank" to="http://www.mojomobi.com/">
                          Mojo Innovative.
                        </Link>
                        <span>
                          &nbsp; I am working from March 2022 to Present as a
                          Full Time Employee.
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* skill accordion area end */}
            </div>
            {/* right part */}
            <div className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="skill-style-four-main-wrapper">
                <div className="row g-5">
                  <div className="col-lg-6">
                    <div className="single-skill-inner-4">
                      <img src={icon01} alt="skill-image" />
                      <div className="inner-text">
                        <h4 className="title">78%</h4>
                        <span>Python</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-skill-inner-4">
                      <img src={icon02} alt="skill-image" />
                      <div className="inner-text">
                        <h4 className="title">86%</h4>
                        <span>Javascript</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-skill-inner-4">
                      <img src={icon03} alt="skill-image" />
                      <div className="inner-text">
                        <h4 className="title">98%</h4>
                        <span>Nodejs</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-skill-inner-4">
                      <img src={icon04} alt="skill-image" />
                      <div className="inner-text">
                        <h4 className="title">63%</h4>
                        <span>React</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-skill-inner-4">
                      <img src={icon05} alt="skill-image" />
                      <div className="inner-text">
                        <h4 className="title">77%</h4>
                        <span>Angular</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="single-skill-inner-4">
                      <img src={icon06} alt="skill-image" />
                      <div className="inner-text">
                        <h4 className="title">89%</h4>
                        <span>Mongodb</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* left part */}
          </div>
        </div>
      </div>
    </>
  );
}
