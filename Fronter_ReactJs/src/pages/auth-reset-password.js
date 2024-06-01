import React from "react";
import {Link} from 'react-router-dom'
import bgImg from "../assets/images/bg/07.jpg"
import logo from "../assets/images/logo-icon-80.png"

export default function ResetPassword(){
    return(
        <>
        <section className="bg-home d-flex align-items-center" style={{backgroundImage:`url(${bgImg})`}}>
            <div className="bg-overlay bg-gradient-overlay"></div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="form-signin p-4 bg-white rounded shadow-md">
                            <form>
                                <Link to="/"><img src={logo} className="mb-4 d-block mx-auto" alt=""/></Link>
                                <h5 className="mb-3">Reset your password</h5>

                                <p className="text-muted">Please enter your email address. You will receive a link to create a new password via email.</p>

                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>

                                <button className="btn btn-primary w-100" type="submit">Send</button>

                                <div className="col-12 text-center mt-3">
                                    <span><span className="text-muted me-2">Remember your password ? </span> <Link to="/auth-login" className="text-dark fw-medium">Sign in</Link></span>
                                </div>

                                <p className="mb-0 text-muted mt-3 text-center">© {new Date().getFullYear()} Fronter.</p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}