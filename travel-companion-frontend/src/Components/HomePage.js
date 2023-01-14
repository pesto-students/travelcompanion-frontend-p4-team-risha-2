import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom'

function HomePage() {
    const navigate = useNavigate();
    return (
   <>
    <div className="container h-100">
        <div className="row h-100">
            <div className="col-12 col-sm-10 col-md-12 mx-auto d-table h-100">
                <div className="d-table-cell align-middle">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="d-block d-md-flex justify-content-between mt-4 mt-md-0">
                                    <div className="text-center mt-4 mt-md-0">
                                        <button className="btn btn-outline-primary">Message</button>
                                        <button className="btn btn-primary">Request</button>
                                    </div>
                                </div>
                                <div className="mt-4 py-2 border-top border-bottom">
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
                                        <li className="nav-item"  onClick={() => navigate('/EditProfile')}>
                                            <a className="nav-link" href="#">
                                                <i className="mdi mdi-attachment"></i>
                                                Profile
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="profile-feed">
                                    <div className="d-flex align-items-start profile-feed-item">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="profile" className="img-sm rounded-circle" />
                                        <div className="ml-4">
                                            <h6>
                                                Mason Beck
                                                <small className="ml-4 text-muted"><i className="mdi mdi-clock mr-1"></i>10 hours</small>
                                            </h6>
                                            <p>
                                                There is no better advertisement campaign that is low cost and also successful at the same time.
                                            </p>
                                            <p className="small text-muted mt-2 mb-0">
                                                <span>
                                                    <i className="mdi mdi-star mr-1"></i>4
                                                </span>
                                                <span className="ml-2">
                                                    <i className="mdi mdi-comment mr-1"></i>11
                                                </span>
                                                <span className="ml-2">
                                                    <i className="mdi mdi-reply"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start profile-feed-item">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="profile" className="img-sm rounded-circle" />
                                        <div className="ml-4">
                                            <h6>
                                                Willie Stanley
                                                <small className="ml-4 text-muted"><i className="mdi mdi-clock mr-1"></i>10 hours</small>
                                            </h6>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="sample" className="rounded mw-100" />
                                            <p className="small text-muted mt-2 mb-0">
                                                <span>
                                                    <i className="mdi mdi-star mr-1"></i>4
                                                </span>
                                                <span className="ml-2">
                                                    <i className="mdi mdi-comment mr-1"></i>11
                                                </span>
                                                <span className="ml-2">
                                                    <i className="mdi mdi-reply"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-start profile-feed-item">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="profile" className="img-sm rounded-circle" />
                                        <div className="ml-4">
                                            <h6>
                                                Dylan Silva
                                                <small className="ml-4 text-muted"><i className="mdi mdi-clock mr-1"></i>10 hours</small>
                                            </h6>
                                            <p>
                                                When I first got into the online advertising business, I was looking for the magical combination
                                                that would put my website into the top search engine rankings
                                            </p>
                                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="sample" className="rounded mw-100" />
                                            <p className="small text-muted mt-2 mb-0">
                                                <span>
                                                    <i className="mdi mdi-star mr-1"></i>4
                                                </span>
                                                <span className="ml-2">
                                                    <i className="mdi mdi-comment mr-1"></i>11
                                                </span>
                                                <span className="ml-2">
                                                    <i className="mdi mdi-reply"></i>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </>
  );
}

export default HomePage;