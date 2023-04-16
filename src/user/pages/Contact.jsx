import React from "react";
import icon1 from "../assets/images/contact/icon/01.png";
import icon2 from "../assets/images/contact/icon/02.png";
import contactshape4 from "../assets/images/contact/shape/04.png";
import bannershape8 from "../assets/images/banner/shape/08.png";

function Contact() {
  return (
    <>
      <div
        className="rts-contact-area four rts-section-gap2Bottom"
        id="gettouch"
      >
        <div className="shape-one">
          <img src={bannershape8} alt="" />
        </div>
        <div className="shape-two">
          <img src={contactshape4} alt="" />
        </div>
        <div className="container">
          <div className="row g-24">
            <div className="col-lg-5 pr--60 pr_md--10 pr_sm--15">
              <div className="title-area-home-4 text-start mb--50">
                <span className="pre-title">Get In Touch</span>
                <h2 className="title">Contact Me</h2>
              </div>
              {/* single contact number area */}
              <div className="rts-single-contact-style-four mb--20">
                <div className="icon-area">
                  <img src={icon1} alt="contact-icon" />
                </div>
                <div className="details-area">
                  <span className="name">Phone Number</span>
                  <a href="#" className="number">
                    (+91) 87704-34284
                  </a>
                </div>
              </div>
              {/* single contact number area end */}
              {/* single contact number area */}
              <div className="rts-single-contact-style-four">
                <div className="icon-area">
                  <img src={icon2} alt="contact-icon" />
                </div>
                <div className="details-area">
                  <span className="name">Email Address</span>
                  <a href="#" className="number">
                    naveen.ojha.rewa@gmail.com
                  </a>
                </div>
              </div>
              {/* single contact number area end */}
            </div>
            <div className="col-lg-7">
              {/* form area start */}
              <form className="contact-form-style-four" action="#">
                <div className="dedidation-2">
                  <div className="single">
                    <label htmlFor="name">Full Name*</label>
                    <input type="text" id="name" required />
                  </div>
                  <div className="single">
                    <label htmlFor="Email">Your Email*</label>
                    <input type="text" id="Email" required />
                  </div>
                </div>
                <div className="dedidation-2">
                  <div className="single">
                    <label htmlFor="Phone-Number">Phone Number</label>
                    <input type="text" id="Phone-Number" required />
                  </div>
                  <div className="single">
                    <label htmlFor="Subject">Your Subject*</label>
                    <input type="text" id="Subject" required />
                  </div>
                </div>
                <label htmlFor="message">Type Your Message</label>
                <textarea id="message" defaultValue={""} />
                <a href="javascript:void(0);" className="rts-btn btn-main-2">
                  Send Message
                </a>
              </form>
              {/* form area end */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
