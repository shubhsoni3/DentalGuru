import React,{useState} from "react";
import { Link } from "react-router-dom";

import background from "../assets/images/bg/04.jpg"
import digitalBg from "../assets/images/digital/bg01.jpg"
import about1 from "../assets/images/business/about01.jpg"
import about2 from "../assets/images/business/about02.jpg"
import about3 from "../assets/images/business/about03.jpg"

import Navbar from "../componants/indexJs/navbar";

import { Parallax } from 'react-parallax';
import CountUp from 'react-countup';
import {accordionData} from "../data/data";

import ModalVideo from 'react-modal-video';
import "../../node_modules/react-modal-video/scss/modal-video.scss"

import {MdArrowForward,FiPlay} from "../assets/icons/vander"
import ClientsTwo from "../componants/clientsTwo";
import FooterFour from "../componants/footer/footerFour";
import ScrollTop from "../componants/scrollTop";

export default function AboutUs(){
    const [isOpen, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0)
    return(
        <>
        <Navbar navClass="defaultscroll sticky" manuClass="navigation-menu nav-right nav-light" logoLight={true}/>
        <section className="position-relative overflow-hidden">
            <Parallax
                blur={{ min: 0, max: 0}}
                bgImage={background}
                bgImageAlt="the dog"
                strength={500}
                bgportfolioImageize="100%"
                bgStyle={{with:"auto", height:"100%" }}
                style={{position:"absolute", width:"100%" , height:"100%"}}
            >
            </Parallax>
            <div className="bg-overlay bg-gradient-overlay-2"></div>
            <div className="bg-half-170 d-table w-100">
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <p className="text-white-50 para-desc mx-auto mb-0">Who we are?</p>
                                <h5 className="heading fw-semibold mb-0 sub-heading text-white title-dark">About Our Company</h5>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/">Fronter</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">About Us</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
        <div className="position-relative">
            <div className="shape overflow-hidden text-white">
                <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                </svg>
            </div>
        </div>
        <section className="section" id="about">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="about-image position-relative">
                            <img src={about1} className="img-fluid rounded shadow" alt=""/>

                            <div className="about-image-position">
                                <img src={about2} className="img-fluid rounded shadow-lg" alt=""/>
                                <div className="play-icon">
                                    <Link to="#!" onClick={() => setOpen(true)} className="play-btn lightbox">
                                        <i className="mdi mdi-play text-primary rounded-circle bg-white shadow-lg"></i>
                                    </Link>
                                </div>
                                <ModalVideo
                                    channel="youtube"
                                    youtube={{ mute: 0, autoplay: 0 }}
                                    isOpen={isOpen}
                                    videoId="yba7hPeTSjk"
                                    onClose={() => setOpen(false)} 
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title ms-lg-5">
                            <h6 className="text-primary fw-normal">Creative Vision & Mission</h6>
                            <h4 className="title mb-4">We develop & create <br/> digital future.</h4>
                            <p className="text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                            <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                        
                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">Read More <MdArrowForward/></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="container mt-100 mt-60">
                <div className="row">
                    <div className="col-md-3 col-6">
                        <div className="counter-box position-relative text-center">
                            <h2 className="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><CountUp className="counter-value" start={0} end={5458}/></h2>
                            <span className="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Investment Projects</span>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="counter-box position-relative text-center">
                            <h2 className="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><CountUp className="counter-value" start={0} end={15}/></h2>
                            <span className="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Years of Experience</span>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="counter-box position-relative text-center">
                            <h2 className="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><CountUp className="counter-value" start={0} end={54}/></h2>
                            <span className="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Offices in the World</span>
                        </div>
                    </div>

                    <div className="col-md-3 col-6">
                        <div className="counter-box position-relative text-center">
                            <h2 className="mb-0 display-2 fw-bold title-dark mt-2 opacity-1"><CountUp className="counter-value" start={0} end={214}/></h2>
                            <span className="counter-head fw-normal title-dark position-absolute top-50 start-0 end-0">Successful Cases</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid mt-100 mt-60 position-relative">
                <div className="row">
                    <Parallax
                        blur={{ min: 0, max: 0}}
                        bgImage={digitalBg}
                        bgImageAlt="the dog"
                        strength={500}
                        bgportfolioImageize="100%"
                        bgStyle={{with:"auto", height:"100%" }}
                        style={{position:"absolute", width:"100%" , height:"100%"}}
                    >
                    </Parallax>
                    <div className="bg-half-170 ">
                        <div className="bg-overlay"></div>
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-12 text-center">
                                    <div className="section-title">
                                        <h4 className="title title-dark text-white mb-4">Stop leaving money on the table.</h4>
                                        <p className="text-light para-dark para-desc mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                        <Link to="#!" onClick={() => setOpen(true)} className="play-btn border border-light mt-4 lightbox">
                                            <FiPlay className="fea icon-ex-md text-white title-dark"/>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row align-items-center">
                    <div className="col-md-6 order-1 order-md-2">
                        <div className="ms-lg-5">
                            <img src={about3} className="img-fluid rounded shadow" alt=""/>
                        </div>
                    </div>

                    <div className="col-md-6 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <div className="section-title">
                            <h6 className="text-primary fw-normal">How it work?</h6>
                            <h4 className="title mb-4">Don't wait. <br/> The time will never be just right.</h4>
                            
                            <div className="accordion mt-4" id="buyingquestion">
                                {accordionData.map((item,index)=>{
                                    return(
                                        <div className="accordion-item rounded shadow mt-2" key={index}>
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className={`${activeIndex === item.id ? "active accordion-button fw-normal border-0 bg-light rounded shadow" : "accordion-button fw-normal border-0 bg-light rounded shadow collapsed"} `} onClick={() => setActiveIndex(item.id)}>
                                                    {item.title}
                                                </button>
                                            </h2>
                                            {activeIndex === item.id ? 
                                                <div id="collapseOne" className="accordion-collapse border-0 collapse show" >
                                                    <div className="accordion-body text-muted bg-transparent">
                                                    {item.desc}
                                                    </div>
                                                </div>:""
                                            }
                                        </div>
                                    )
                                })}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-100 mt-60">
                <div className="row justify-content-center">
                    <div className="col">
                        <div className="section-title text-center mb-4 pb-2">
                            <h6 className="text-primary fw-normal mb-2">Testimonial</h6>
                            <h4 className="title mb-4">What our customer <br/> say about us</h4>
                            <p className="text-muted para-desc mb-0 mx-auto">Start working with Fronter that can provide everything you need to generate awareness, drive traffic, connect.</p>
                        </div>
                    </div>
                </div>

                <ClientsTwo position={false}/>
            </div>
        </section>
        <FooterFour/>
        <ScrollTop/>
        </>
    )
}