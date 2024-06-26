import React, { useEffect, useState } from "react";
import shape8 from "../assets/images/banner/shape/08.png";
import bg01 from "../assets/images/bg/01.png";
import icon01 from "../assets/images/skill/icon/01.svg";
import icon02 from "../assets/images/skill/icon/02.svg";
import icon03 from "../assets/images/skill/icon/03.svg";
import icon04 from "../assets/images/skill/icon/04.svg";
import icon05 from "../assets/images/skill/icon/05.svg";
import icon06 from "../assets/images/skill/icon/06.svg";
import { Link } from "react-router-dom";
import { apiEndPoint } from "../../enviroment";
import axios from "axios";

export default function Experince() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiEndPoint}experience`,
    };

    axios
      .request(config)
      .then((response) => {
        setResponse(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
                  {response.map((value) => {
                    const {
                      designation,
                      companyName,
                      startDate,
                      endDate,
                      description,
                      companyUrl,
                      logo,
                    } = value;
                    const accrodian = companyName.split(" ")[0];
                    return (
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#${accrodian}`}
                            aria-expanded="false"
                            aria-controls="collapseOne"
                          >
                            <div className="left">
                              <img
                                src={logo}
                                alt="company logo"
                                className="imgRounded"
                              />
                              <div className="disc">
                                <span className="title">{designation}</span>
                                <span className="desig">{companyName}</span>
                              </div>
                            </div>
                            <div className="right">
                              <div className="date">
                                {startDate} - {endDate}
                              </div>
                            </div>
                          </button>
                        </h2>
                        <div
                          id={accrodian}
                          className="accordion-collapse collapse"
                          aria-labelledby="headingOne"
                          data-bs-parent="#accordionExample"
                        >
                          <div className="accordion-body">
                            Company Name - &nbsp;
                            <Link target="_blank" to={companyUrl}>
                              {companyName}.
                            </Link>
                            <span>&nbsp; {description}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
