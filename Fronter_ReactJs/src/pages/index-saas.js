import React, { useState } from "react";
import { Link } from "react-router-dom";

import background from "../assets/images/saas-shape.png";
import lapy from "../assets/images/lapy.png";
import square from "../assets/images/square/square-white.png";
import SuperAdmin from "../assets/images/app/SuperAdmin.png";
import Admin from "../assets/images/app/Admin.png";
import Resepnist from "../assets/images/app/Resepnist.png";
import Doctor from "../assets/images/app/Doctor.png";
import Accountend from "../assets/images/app/Accountend.png";
import Lab from "../assets/images/app/Lab.png";
import faqs from "../assets/images/faqs.png";

import SaasNavbar from "../componants/navbar/saasNavbar";
import Partners from "../componants/partners";
import ClientsTwo from "../componants/clientsTwo";
import Footer from "../componants/footer/footer";
import ScrollTop from "../componants/scrollTop";

import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import {
  BiWater,
  TfiDropbox,
  MdFilterCenterFocus,
  AiOutlineFire,
  MdSchema,
  PiFlower,
  AiOutlineCheckCircle,
  MdKeyboardArrowRight,
  FiPlay,
} from "../assets/icons/vander";

import { accordionData2 } from "../data/data";

export default function IndexSaas() {
  const [isOpen, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const featureData = [
    {
      icon: BiWater,
      title: "Support",
      desc: "Mon - Sat , 10 AM To 6 PM",
    },
    {
      icon: TfiDropbox,
      title: "Secured Database",
      desc: "We provide secure databases, ensuring data protection through encryption and controls.",
    },
    {
      icon: MdFilterCenterFocus,
      title: "Multi-Platform Access ",
      desc: "Accessible across various devices including desktops and tablets for flexibility and convenience.",
    },
    {
      icon: AiOutlineFire,
      title: "Cost-Effective",
      desc: "Affordable pricing plans and options that deliver high value without breaking the budget.",
    },
    {
      icon: MdSchema,
      title: "Employee Management",
      desc: "Tools to manage employee roles, schedules, and performance",
    },
    {
      icon: PiFlower,
      title: "User-Friendly Interface",
      desc: " Navigate effortlessly through our software with its intuitive design.",
    },
  ];

  const pricingData = [
    {
      price: "12,000/-",
      title: "YEARLY PLAN",
      subTitle: [
        "Including 8 Month Maintence",
        // "Number of People 1 Person",
        // "Unlimited Projects",
        // "Club Access Unlimited Access",
        // "Class Access Fitness Classes",
        // "Enhanced Security",
      ],
      status: false,
    },
    {
      price: "7,200/-",
      title: "HALF YEARLY",
      subTitle: [
        "Including 3 Month Maintence",
        // "Number of People 5 Person",
        // "Unlimited Projects",
        // "Club Access Unlimited Access",
        // "Class Access Fitness Classes",
        // "Enhanced Security",
      ],
      status: true,
    },
    {
      price: "4,500/-",
      title: "QUATERLY",
      subTitle: [
        "Including 1 Month Maintence",
        // "Number of People 10 Person",
        // "Unlimited Projects",
        // "Club Access Unlimited Access",
        // "Class Access Fitness Classes",
        // "Enhanced Security",
      ],
      status: false,
    },
    {
      price: "2,000/-",
      title: "MONTHLY",
      subTitle: [
        "Including 1 Month Maintence",
        // "Number of People 1 Person",
        // "Unlimited Projects",
        // "Club Access Unlimited Access",
        // "Class Access Fitness Classes",
        // "Enhanced Security",
      ],
      status: false,
    },
    {
      price: "50000/-",
      title: "5 Year",
      subTitle: [
        "Annual Maintenance Charge ₹2400/-",
        // "Number of People 1 Person",
        // "Unlimited Projects",
        // "Club Access Unlimited Access",
        // "Class Access Fitness Classes",
        // "Enhanced Security",
      ],
      status: false,
    },
  ];
  return (
    <>
      <SaasNavbar />
      <section
        className="bg-home bg-primary d-flex align-items-center"
        id="home"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 text-center mt-0 mt-md-5 pt-0 pt-md-5">
              <div className="title-heading margin-top-100">
                <h1 className="heading text-white title-dark mt-5">
                  Enhance Your Dental Practice with Our Comprehensive Software
                  Solution
                </h1>
                {/* <p className="para-desc mx-auto text-white-50">
                  Launch your campaign and benefit from our expertise on
                  designing and managing conversion centered bootstrap html
                  page.
                </p> */}

                <Link
                  to="#!"
                  onClick={() => setOpen(true)}
                  className="play-btn border border-light mt-4 lightbox"
                >
                  <FiPlay className="fea icon-ex-md text-white title-dark" />
                </Link>
              </div>
              <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="yba7hPeTSjk"
                onClose={() => setOpen(false)}
              />

              <div className="home-dashboard">
                <img src={lapy} alt="" className="img-fluid" />
              </div>

              <img
                src={square}
                className="img-fluid rounded-pill position-absolute top-0 start-50 translate-middle-x avatar avatar-md-md zoom-in-out z-index-0"
                alt=""
              />
              <img
                src={square}
                className="img-fluid rounded-pill bg-image-position avatar avatar-md-md mover-2 z-index-0"
                alt=""
              />
              <img
                src={square}
                className="img-fluid rounded-md avatar avatar-md-md bg-image-position-2 spin-anything z-index-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section mt-0 mt-md-5 overflow-hidden" id="features">
        <div className="container">
          {/* <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">Our solution for your business</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with Fronter that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
              </div>
            </div>
          </div> */}

          <div className="row">
            {featureData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                  <div className="d-flex features feature-primary">
                    <div className="feature-icon rounded text-center">
                      <Icon className="icon  h4 mb-0" />
                    </div>
                    <div className="flex-1 ms-4">
                      <h5 className="mt-0">{item.title}</h5>
                      <p className="text-muted mb-0">{item.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-5">
              <div className="app-feature-shape-left position-relative">
                <div className="text-center text-md-start">
                  <img src={SuperAdmin} className="img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-7 mt-5 mt-sm-0">
              <div className="section-title">
                <h1 className="title mb-3">
                  We build high-performing Super Admin applications that set the
                  standard for excellence.
                </h1>
                <p className="para-desc text-muted">
                  "As the owners of our software, super admins have the
                  authority to oversee and manage all branches. They can admit
                  or remove any individual in any branch, enhancing their
                  efficiency and administrative capabilities. Various actions
                  performed by the super admin, such as monitoring the history
                  of patient visits, representing the past medical records of
                  patients, and managing employee leaves, assist in the
                  organization and scheduling of branch operations. Our software
                  operates with directorial stability and ease, ensuring
                  adaptability in every function and fostering growth in
                  services."
                </p>
                {/* <ul className="list-unstyled text-muted">
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <AiOutlineCheckCircle className="align-middle" />
                    </span>
                    Digital Marketing Solutions for Tomorrow
                  </li>
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <AiOutlineCheckCircle className="align-middle" />
                    </span>
                    Our Talented & Experienced Marketing Agency
                  </li>
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <AiOutlineCheckCircle className="align-middle" />
                    </span>
                    Create your own skin to match your brand
                  </li>
                </ul>
                <div className="mt-4">
                  <Link to="#" className="mt-3 h6 text-primary">
                    Find Out More <MdKeyboardArrowRight />
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
              <div className="section-title">
                <h1 className="title mb-3">
                  We craft high-performing Admin applications that redefine
                  excellence For Yor
                </h1>
                <p className="para-desc text-muted">
                  In our DentalGuru software, the Admin module acts as the
                  backbone, acting as the managerial hub overseeing all aspects
                  of the clinic operations. Everything from managing staff and
                  patient data to overseeing financial transactions and system
                  configuration.
                </p>
                <div className="mt-4">
                  <Link to="#" className="btn btn-primary">
                    Learn More <MdKeyboardArrowRight />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-5 order-1 order-md-2">
              <div className="app-feature-shape-right position-relative">
                <div className="text-center text-md-end">
                  <img src={Admin} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-5">
              <div className="app-feature-shape-left position-relative">
                <div className="text-center text-md-start">
                  <img src={Resepnist} className="img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-7 mt-5 mt-sm-0">
              <div className="section-title">
                <h1 className="title mb-3">
                  We design top-tier receptionist applications for dental
                  clinics that elevate the standard of excellence.
                </h1>
                <p className="para-desc text-muted">
                  Introducing our Receptionist Module, a meticulously designed
                  solution to revolutionize your dental clinic's front desk
                  operations. Seamlessly handle appointment bookings, patient
                  registrations, and doctor schedules with unparalleled ease.
                </p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <AiOutlineCheckCircle className="align-middle" />
                    </span>
                    Effortless Appointment Booking
                  </li>
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <AiOutlineCheckCircle className="align-middle" />
                    </span>
                    Maintain patient profiles
                  </li>
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <AiOutlineCheckCircle className="align-middle" />
                    </span>
                    Generate Bills
                  </li>
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <AiOutlineCheckCircle className="align-middle" />
                    </span>
                    Manage Inquiries
                  </li>
                </ul>
                {/* <div className="mt-4">
                  <Link to="#" className="mt-3 h6 text-primary">
                    Find Out More <MdKeyboardArrowRight />
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
              <div className="section-title">
                <h1 className="title mb-3">
                  We pioneer game-changing dental Software, setting new
                  standards in excellence.
                </h1>
                <p className="para-desc text-muted">
                  "Experience the holistic care approach of our Doctor Module
                  tailored for both adults and children in your dental software.
                  Begin with a comprehensive patient examination, seamlessly
                  transitioning to handling security deposits and payments.
                  Whether it's a single dental procedure or multiple treatments,
                  our module caters to diverse needs, suggesting appropriate
                  medications and providing detailed treatment plans. Elevate
                  patient care with our all-inclusive dental solution."
                </p>
                {/* <div className="mt-4">
                  <Link to="#" className="btn btn-primary">
                    Learn More <MdKeyboardArrowRight />
                  </Link>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-5 order-1 order-md-2">
              <div className="app-feature-shape-right position-relative">
                <div className="text-center text-md-end">
                  <img src={Doctor} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-5">
              <div className="app-feature-shape-left position-relative">
                <div className="text-center text-md-start">
                  <img src={Lab} className="img-fluid" alt="" />
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-7 mt-5 mt-sm-0">
              <div className="section-title">
                <h1 className="title mb-3">
                  We revolutionize lab software, setting a new standard for
                  excellence with peak performance.
                </h1>
                <p className="para-desc text-muted">
                  "Introducing our Lab Module for Dental Practices – your
                  all-inclusive solution for streamlined laboratory operations.
                  our module offers a range of functionalities to increase
                  efficiency and accuracy Easily manage lab workflow, track
                  samples, and access detailed reports, all within one intuitive
                  platform. Upgrade your dental practice with our lab module
                  today!”
                </p>
                <ul className="list-unstyled text-muted">
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <AiOutlineCheckCircle className="align-middle" />
                    </span>
                    ORAL TEST
                  </li>
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <AiOutlineCheckCircle className="align-middle" />
                    </span>
                    PATHOLOGY TEST
                  </li>
                  <li className="mb-1">
                    <span className="text-primary h5 me-2">
                      <AiOutlineCheckCircle className="align-middle" />
                    </span>
                    RADIOLOGY TEST
                  </li>
                </ul>
                {/* <div className="mt-4">
                  <Link to="#" className="mt-3 h6 text-primary">
                    Find Out More <MdKeyboardArrowRight />
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-100 mt-60">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-7 order-2 order-md-1 mt-5 mt-sm-0">
              <div className="section-title">
                <h1 className="title mb-3">
                  "We Revolutionizing dental Accountant with unmatched precision
                  and performance."
                </h1>
                <p className="para-desc text-muted">
                  "Unlock the full potential of your dental practice with
                  Accountend software. Bid farewell to paperwork hassles and
                  embrace seamless efficiency. Our module empowers you to
                  effortlessly manage patient billing, employee leave,
                  transaction history, income, and expense reports. Plus, with
                  intuitive reporting tools and a user-friendly interface,
                  Dental Practice Management ensures smooth operations.
                  Experience the difference with our all-in-one solution,
                  tailored to elevate your practice to new heights."
                </p>
                {/* <div className="mt-4">
                  <Link to="#" className="btn btn-primary">
                    Learn More <MdKeyboardArrowRight />
                  </Link>
                </div> */}
              </div>
            </div>

            <div className="col-lg-6 col-md-5 order-1 order-md-2">
              <div className="app-feature-shape-right position-relative">
                <div className="text-center text-md-end">
                  <img src={Accountend} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <<< This section is open when we have more client >>> */}
        {/* <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="section-title mb-4 pb-2">
                <h4 className="title mb-4">
                  More than 1K+ users are use DENTALGURU
                </h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start practicing with our comprehensive dental software
                  solution that provides everything you need to generate
                  awareness, drive traffic, and connect.
                </p>
              </div>
            </div>
          </div>
          <Partners />
        </div> */}
      </section>

      {/* <<< This section is open when we have testimonial >>> */}
      {/* <section className="section bg-primary" id="testi">
        <div className="container mb-4">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title text-white title-dark mb-4">
                  What our users says !
                </h4>
                <p className="text-white-50 para-desc mx-auto mb-0">
                  Start working with Fronter that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <<<this also when we have client review >>> */}
      {/* <section className="section pb-0">  
        <div className="container">
          <ClientsTwo />
        </div>
      </section> */}

      <section className="" id="pricing">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-4">Pricing Plans</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Start working with Fronter that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            {pricingData.map((item, index) => {
              return (
                <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                  <div className="card pricing price-two rounded text-center border-0 shadow px-4 py-5 bg-white">
                    <div className="d-flex justify-content-center mb-5">
                      <span className="mb-0 mt-2">₹</span>
                      <span className="price h1 mb-0">{item.price}</span>
                      {/* <span className="align-self-end mb-1">/Per Month</span> */}
                    </div>

                    <div className="p-2 bg-soft-primary h6 mx-5 rounded-lg">
                      <span className="text-uppercase">{item.title}</span>
                    </div>

                    <ul className="list-unstyled mb-0 mt-4">
                      {item.subTitle.map((el, index) => {
                        return (
                          <li className="text-muted mt-3" key={index}>
                            {el}
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-4 pt-2">
                      {item.status === false ? (
                        <Link to="#" className="btn btn-light">
                          Start Now
                        </Link>
                      ) : (
                        <Link to="#" className="btn btn-primary">
                          Start Now
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container mt-100 mt-60 mb-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title mb-4 pb-2 text-center">
                <h4 className="title mb-3">Frequently Asked Questions</h4>
                <p className="text-muted mx-auto para-desc mb-0">
                  Discover the transformative magic of Dental Guru, simple
                  designs that elevate your Dental hospital. Learn more today!
                </p>
              </div>
            </div>
          </div>

          <div className="row align-items-center">
            <div className="col-md-6 mt-4 pt-2">
              <img src={faqs} className="img-fluid" alt="" />
            </div>

            <div className="col-md-6 mt-4 pt-2">
              <div className="accordion" id="buyingquestion">
                {accordionData2.map((item, index) => (
                  <div className="accordion-item rounded mt-3" key={index}>
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className={`${
                          activeIndex === item.id
                            ? "active accordion-button fw-normal border-0 bg-light rounded shadow"
                            : "accordion-button fw-normal border-0 bg-light rounded shadow collapsed"
                        }`}
                        onClick={() =>
                          setActiveIndex(
                            activeIndex === item.id ? null : item.id
                          )
                        }
                      >
                        {item.title}
                      </button>
                    </h2>
                    {activeIndex === item.id && (
                      <div
                        id={`collapse${item.id}`}
                        className="accordion-collapse border-0 collapse show"
                      >
                        <div className="accordion-body text-muted bg-white">
                          <p>{item.desc}</p>
                          {item.features && (
                            <ul>
                              {item.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="section">
            <div className="bg-overlay bg-gradient-primary"></div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <div className="section-title text-center">
                            <h4 className="title text-white title-dark mb-3">Get your free quote today?</h4>
                            <p className="para-desc mx-auto text-white-50">Explore and learn more about everything from machine learning and global payments to  scaling your team.</p>

                            <div className="subcribe-form mt-5">
                                <form>
                                    <div className="mb-3">
                                        <input type="email" id="email" className="bg-white rounded-lg opacity-5" required placeholder="Type your mail id..."/>
                                        <button type="submit" className="btn btn-pills btn-primary">Get Started</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
      <Footer />
      <ScrollTop />
    </>
  );
}
