import React from 'react'
import { useNavigate } from 'react-router-dom'

function Influncers() {
    const navigate = useNavigate();
    return (
        <div className="container profile-page">
            <nav className="nav nav-borders">
                <ul className="nav profile-navbar">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">
                            <i className="mdi mdi-account-outline"></i>
                            Feed
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">
                            <i className="mdi mdi-newspaper"></i>
                            Travel
                        </a>
                    </li>
                    <li className="nav-item" onClick={() => navigate('/influncers')}>
                        <a className="nav-link" href="#">
                            <i className="mdi mdi-calendar"></i>
                            Influncers
                        </a>
                    </li>
                    <li className="nav-item" onClick={() => navigate('/notification')}>
                        <a className="nav-link" href="#">
                            <i className="mdi mdi-calendar"></i>
                            Notifications
                        </a>
                    </li>
                    <li className="nav-item" onClick={() => navigate('/EditProfile')}>
                        <a className="nav-link" href="#">
                            <i className="mdi mdi-attachment"></i>
                            Profile
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-12">
                    <div className="card profile-header">
                        <div className="body">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="profile-image float-md-right"> <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" /> </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <h4 className="m-t-0 m-b-0"><strong>Michael</strong> Deo</h4>
                                    <span className="job_post">Ui UX Designer</span>
                                    <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                    <div>
                                        <button className="btn btn-primary btn-round">Follow</button>
                                        <button className="btn btn-primary btn-round btn-simple">Message</button>
                                    </div>
                                    {/* <p className="social-icon m-t-5 m-b-0">
                                        <a title="Twitter" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Facebook" href="javascript:void(0);"><i className="fa fa-facebook"></i></a>
                                        <a title="Google-plus" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Behance" href="javascript:void(0);"><i className="fa fa-behance"></i></a>
                                        <a title="Instagram" href="javascript:void(0);"><i className="fa fa-instagram "></i></a>
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-xl-6 col-lg-7 col-md-12">
                    <div className="card profile-header">
                        <div className="body">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="profile-image float-md-right"> <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /> </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <h4 className="m-t-0 m-b-0"><strong>Michael</strong> Deo</h4>
                                    <span className="job_post">Ui UX Designer</span>
                                    <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                    <div>
                                        <button className="btn btn-primary btn-round">Follow</button>
                                        <button className="btn btn-primary btn-round btn-simple">Message</button>
                                    </div>
                                    {/* <p className="social-icon m-t-5 m-b-0">
                                        <a title="Twitter" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Facebook" href="javascript:void(0);"><i className="fa fa-facebook"></i></a>
                                        <a title="Google-plus" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Behance" href="javascript:void(0);"><i className="fa fa-behance"></i></a>
                                        <a title="Instagram" href="javascript:void(0);"><i className="fa fa-instagram "></i></a>
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-xl-6 col-lg-7 col-md-12">
                    <div className="card profile-header">
                        <div className="body">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="profile-image float-md-right"> <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /> </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <h4 className="m-t-0 m-b-0"><strong>Michael</strong> Deo</h4>
                                    <span className="job_post">Ui UX Designer</span>
                                    <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                    <div>
                                        <button className="btn btn-primary btn-round">Follow</button>
                                        <button className="btn btn-primary btn-round btn-simple">Message</button>
                                    </div>
                                    {/* <p className="social-icon m-t-5 m-b-0">
                                        <a title="Twitter" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Facebook" href="javascript:void(0);"><i className="fa fa-facebook"></i></a>
                                        <a title="Google-plus" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Behance" href="javascript:void(0);"><i className="fa fa-behance"></i></a>
                                        <a title="Instagram" href="javascript:void(0);"><i className="fa fa-instagram "></i></a>
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="col-xl-6 col-lg-7 col-md-12">
                    <div className="card profile-header">
                        <div className="body">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-12">
                                    <div className="profile-image float-md-right"> <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="" /> </div>
                                </div>
                                <div className="col-lg-8 col-md-8 col-12">
                                    <h4 className="m-t-0 m-b-0"><strong>Michael</strong> Deo</h4>
                                    <span className="job_post">Ui UX Designer</span>
                                    <p>795 Folsom Ave, Suite 600 San Francisco, CADGE 94107</p>
                                    <div>
                                        <button className="btn btn-primary btn-round">Follow</button>
                                        <button className="btn btn-primary btn-round btn-simple">Message</button>
                                    </div>
                                    {/* <p className="social-icon m-t-5 m-b-0">
                                        <a title="Twitter" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Facebook" href="javascript:void(0);"><i className="fa fa-facebook"></i></a>
                                        <a title="Google-plus" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Behance" href="javascript:void(0);"><i className="fa fa-behance"></i></a>
                                        <a title="Instagram" href="javascript:void(0);"><i className="fa fa-instagram "></i></a>
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Influncers