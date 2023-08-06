import React, { useEffect, useState } from "react";
import testimonialsquote2 from "../assets/images/testimonials/quote-2.png";
import axios from "axios";
import { apiEndPoint } from "../../enviroment";
import Rating from "@mui/material/Rating";

export default function Testimonials() {
  const [response, setResponse] = useState([]);
  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `${apiEndPoint}testimonials`,
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
      <div className="rts-client-feedback rts-section-gap2">
        <div className="container">
          <div className="row">
            <div className="title-area-home-4 text-center">
              <span className="pre-title">Testimonials</span>
              <h2 className="title">Client’s Feedbacks</h2>
            </div>
          </div>
          <div className="row g-5 mt--10">
            {response.map((value) => {
              const { name, desgination, image, description, rating } = value;
              return (
                <div className="col-lg-4 col-md-6 col-sm-12 col-12 text-anim">
                  {/* single-testimonials */}
                  <div className="rts-single-testimonials-h3 style-four text-center">
                    <div className="top-area">
                      <img
                        className="quote"
                        src={testimonialsquote2}
                        alt="Quote"
                      />
                      <p className="disc">{description}</p>
                      <div className="start-area">
                        {/* <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" /> */}
                        <Rating
                          name="read-only"
                          value={rating}
                          readOnly
                          style={{ fontSize: "25px" }}
                        />
                      </div>
                    </div>
                    <div className="client-profile-area">
                      <img src={image} alt="Profile" className="imgRounded" />
                      <div className="discription">
                        <p className="name">{name}</p>
                        <span>{desgination}</span>
                      </div>
                    </div>
                  </div>
                  {/* single-testimonials End */}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
