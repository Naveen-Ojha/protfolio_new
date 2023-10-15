import React from "react";
import icon1 from "../assets/images/contact/icon/01.png";
import icon2 from "../assets/images/contact/icon/02.png";
import contactshape4 from "../assets/images/contact/shape/04.png";
import bannershape8 from "../assets/images/banner/shape/08.png";
import emailjs from "@emailjs/browser";

function Contact() {
  const [state, setstate] = React.useState(null);

  const [contact, setContact] = React.useState({
    name: "",
    email: "",
    number: "",
    subject: "",
    message: "",
  });

  const getValue = (event) => {
    const { name, value } = event.target;
    setContact((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const templateParams = {
      name: contact.name,
      email: contact.email,
      number: contact.number,
      subject: contact.subject,
      message: contact.message,
    };

    emailjs
      .send(
        "service_cox1m7t",
        "template_grp08sa",
        templateParams,
        "user_4N7iNzhIHVW4JRSaTRWRT"
      )
      .then(
        (response) => {
          setstate("SUCCESS!", response.status, response.text);
        },
        (err) => {
          setstate("FAILED...", err);
        }
      );
  };

  return (
    <>
      <div
        className="rts-contact-area four rts-section-gap2Bottom"
        id="contacts"
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
              <form className="contact-form-style-four" onSubmit={sendEmail}>
                <div className="dedidation-2">
                  <div className="single">
                    <label htmlFor="name">Full Name*</label>
                    <input onChange={getValue} type="text" name="name" id="name" required />
                  </div>
                  <div className="single">
                    <label htmlFor="Email">Your Email*</label>
                    <input onChange={getValue} type="text" name="email" id="Email" required />
                  </div>
                </div>
                <div className="dedidation-2">
                  <div className="single">
                    <label htmlFor="Phone-Number">Phone Number</label>
                    <input onChange={getValue} type="text" id="Phone-Number" required />
                  </div>
                  <div className="single">
                    <label htmlFor="Subject">Your Subject*</label>
                    <input onChange={getValue} type="text" name="subject" id="Subject" required />
                  </div>
                </div>
                <label htmlFor="message">Type Your Message</label>
                <textarea onChange={getValue} name="message" id="message" defaultValue={""} />
                <div className="text-success text-sm h5">{state}</div>
                <button type="submit" className="rts-btn btn-main-2">
                  Send Message
                </button>
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
