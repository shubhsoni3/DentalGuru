import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import background from "../assets/images/bg/03.jpg";

import { Parallax } from "react-parallax";
import Navbar from "../componants/indexJs/navbar";

import { BsTelephone, FiMail, FiMapPin } from "../assets/icons/vander";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";
import Footer from "../componants/footer/footer";
import SaasNavbar from "../componants/navbar/saasNavbar";

export default function ContactOne() {
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `https://queuemanagementsystemdg.com/api/auth/book_demo`,
        data
      );
      console.log(res.data);

      alert(`Book for Demo is Done!`);

      setTimeout(() => {
        window.location.reload();
      }, 1000);

      setData({
        name: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>
      {/* <SaasNavbar /> */}
      <section className="position-relative overflow-hidden">
        <Parallax
          blur={{ min: 0, max: 0 }}
          bgImage={background}
          bgImageAlt="the dog"
          strength={500}
          bgportfolioImageize="100%"
          bgStyle={{ with: "auto", height: "100%" }}
          style={{ position: "absolute", width: "100%", height: "100%" }}
        ></Parallax>
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="bg-half-170 d-table w-100">
          <div className="container">
            <div className="row mt-5 justify-content-center">
              <div className="col-12">
                <div className="title-heading text-center">
                  <p className="text-white-50 para-desc mx-auto mb-0">
                    Demonstration for Dental Guru software.
                  </p>
                  <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">
                    Demo
                  </h5>
                </div>
              </div>
            </div>

            <div className="position-middle-bottom">
              <nav aria-label="breadcrumb" className="d-block">
                <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                  <li className="breadcrumb-item">
                    <Link to="/">DOAGuru</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dental Guru
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <section className="section pb-0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="p-4 rounded shadow">
                <form onSubmit={handleSubmit}>
                  <p className="mb-0" id="error-msg"></p>
                  <div id="simple-msg"></div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Name <span className="text-danger">*</span>
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          value={data.name}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Name :"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label className="form-label">
                          Your Email <span className="text-danger">*</span>
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          value={data.email}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Email :"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          name="phone"
                          id="phone"
                          type="text"
                          value={data.phone}
                          onChange={handleChange}
                          maxLength={10}
                          className="form-control"
                          placeholder="Phone Number :"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="mb-3">
                        <label className="form-label">
                          Comments <span className="text-danger">*</span>
                        </label>
                        <textarea
                          name="message"
                          id="comments"
                          rows="4"
                          value={data.message}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="Message :"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <div className="d-grid">
                        <button
                          type="submit"
                          id="submit"
                          name="send"
                          className="btn btn-primary"
                        >
                          Send Message
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="card border-0 text-center features feature-primary feature-clean">
                <div className="icons bg-lg text-center rounded-lg  mx-auto">
                  <BsTelephone className="icon d-block h3 mb-0" />
                </div>

                <div className="content mt-4 pt-2 px-4">
                  <h5 className="mb-3">Phone</h5>
                  {/* <p className="text-muted">
                    Start working with Fronter that can provide everything
                  </p> */}
                  <Link to="tel:+91-7477253424" className="link">
                    +91-7477253424
                  </Link>
                  <br />
                  <Link to="tel:+91-7440992424" className="link">
                    +91-7440992424
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-5 mt-sm-0">
              <div className="card border-0 text-center features feature-primary feature-clean">
                <div className="icons bg-lg text-center rounded-lg  mx-auto">
                  <FiMail className="icon d-block h3 mb-0" />
                </div>

                <div className="content mt-4 pt-2 px-4">
                  <h5 className="mb-3">Email</h5>
                  {/* <p className="text-muted">
                    Start working with Fronter that can provide everything
                  </p> */}
                  <Link to="mailto: info@doaguru.com" className="link">
                    info@doaguru.com
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 mt-5 mt-lg-0">
              <div className="card border-0 text-center features feature-primary feature-clean">
                <div className="icons bg-lg text-center mx-auto rounded-lg ">
                  <FiMapPin className="icon d-block h3 mb-0" />
                </div>

                <div className="content mt-4 pt-2 px-4">
                  <h5 className="mb-3">Location</h5>
                  <Link
                    to="https://www.google.com/maps/dir//1815,+Wright+Town,+Jabalpur,+Madhya+Pradesh+482002/@23.163604,79.840588,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3981b116195eee4f:0x62196cfaef1c23c7!2m2!1d79.9229896!2d23.1636254?entry=ttu"
                    className="lightbox text-primary"
                    data-type="iframe"
                    data-group="iframe"
                    data-width="1024px"
                    data-height="576px"
                  >
                    View on Google map
                  </Link>
                  <p className="text-muted">
                    1815, Wright Town, Jabalpur, <br />
                    Madhya Pradesh 482002
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container-fluid mt-100 mt-60">
          <div className="row">
            <div className="col-12 p-0">
              <div className="card map border-0">
                <div className="card-body p-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                    title="myfram"
                    style={{ border: "0" }}
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      {/* <FooterFour /> */}
      <Footer />
      <ScrollTop />
    </>
  );
}
