import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo/naveen.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { apiEndPoint } from "../../enviroment";

export default function Header() {
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
      <header className="header-one header--sticky header-four">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6">
              <Link to="/" className="thumbnail">
                <img src={logo} alt="pixxi_logo" />
              </Link>
            </div>
            <div className="col-xl-8 justify-content-center d-flex d-none d-xl-block">
              <nav className="main-nav">
                <ul id="nav">
                  {response.map((category) => {
                    const { name, url } = category;
                    return (
                      <li>
                        <a href={`/#${url}`}>{name}</a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <div className="col-xl-2 col-lg-6 col-md-6 col-sm-6 col-6 justify-content-end d-flex">
              <div className="open-h2-menu-area header-four" id="menu-btn">
                <span>INTRO</span>
                <a href="#" className="ml--20">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <rect
                      x="0.000488281"
                      width={4}
                      height={4}
                      rx={2}
                      fill="#141414"
                    />
                    <rect
                      x="0.000488281"
                      y={7}
                      width={4}
                      height={4}
                      rx={2}
                      fill="#141414"
                    />
                    <rect
                      x="0.000488281"
                      y={14}
                      width={4}
                      height={4}
                      rx={2}
                      fill="#141414"
                    />
                    <rect
                      x="7.00049"
                      width={4}
                      height={4}
                      rx={2}
                      fill="#141414"
                    />
                    <rect
                      x="7.00049"
                      y={7}
                      width={4}
                      height={4}
                      rx={2}
                      fill="#141414"
                    />
                    <rect
                      x="7.00049"
                      y={14}
                      width={4}
                      height={4}
                      rx={2}
                      fill="#141414"
                    />
                    <rect
                      x="14.0005"
                      width={4}
                      height={4}
                      rx={2}
                      fill="#141414"
                    />
                    <rect
                      x="14.0005"
                      y={7}
                      width={4}
                      height={4}
                      rx={2}
                      fill="#141414"
                    />
                    <rect
                      x="14.0005"
                      y={14}
                      width={4}
                      height={4}
                      rx={2}
                      fill="#141414"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
