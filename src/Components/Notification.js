import React from 'react'
import { useNavigate } from 'react-router-dom'


function Notification() {
    const navigate = useNavigate();

    return (

        <div className="container">
            <nav className="nav nav-borders">
                <ul className="nav profile-navbar">
                    <li className="nav-item">
                        <a className="nav-link active" href="src/Components#">
                            <i className="mdi mdi-account-outline"></i>
                            Feed
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="src/Components#">
                            <i className="mdi mdi-newspaper"></i>
                            Travel
                        </a>
                    </li>
                    <li className="nav-item" onClick={() => navigate('/influncers')}>
                        <a className="nav-link" href="src/Components#">
                            <i className="mdi mdi-calendar"></i>
                            Influncers
                        </a>
                    </li>
                    <li className="nav-item" onClick={() => navigate('/notification')}>
                        <a className="nav-link" href="src/Components#">
                            <i className="mdi mdi-calendar"></i>
                            Notifications
                        </a>
                    </li>
                    <li className="nav-item" onClick={() => navigate('/EditProfile')}>
                        <a className="nav-link" href="src/Components#">
                            <i className="mdi mdi-attachment"></i>
                            Profile
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="row">
                <div className="col-lg-3 left">
                    <div className="box shadow-sm mb-3 rounded bg-white ads-box text-center">
                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" className="img-fluid" alt="Responsive" />
                        <div className="p-3 border-bottom">
                            <h6 className="font-weight-bold text-dark">Notifications</h6>
                            <p className="mb-0 text-muted">You’re all caught up! Check back later for new notifications</p>
                        </div>
                        <div className="p-3">
                            <button type="button" className="btn btn-outline-success btn-sm pl-4 pr-4">View settings</button>
                        </div>
                    </div>
                    <div className="box mb-3 shadow-sm rounded bg-white profile-box text-center">
                        <div className="p-5">
                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" className="img-fluid" alt="Responsive" />
                        </div>
                        <div className="p-3 border-top border-bottom">
                            <h5 className="font-weight-bold text-dark mb-1 mt-0">Envato</h5>
                            <p className="mb-0 text-muted">Melbourne, AU</p>
                        </div>
                        <div className="p-3">
                            <div className="d-flex align-items-top mb-2">
                                <p className="mb-0 text-muted">Posted</p>
                                <p className="font-weight-bold text-dark mb-0 mt-0 ml-auto">1 day ago</p>
                            </div>
                            <div className="d-flex align-items-top">
                                <p className="mb-0 text-muted">Applicant Rank</p>
                                <p className="font-weight-bold text-dark mb-0 mt-0 ml-auto">25</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-9 right">
                    <div className="box shadow-sm rounded bg-white mb-3">
                        <div className="box-title border-bottom p-3">
                            <h6 className="m-0">Recent</h6>
                        </div>
                        <div className="box-body p-0">
                            <div className="p-3 d-flex align-items-center bg-light border-bottom osahan-post-header">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                </div>
                                <div className="font-weight-bold mr-3">
                                    <div className="text-truncate">DAILY RUNDOWN: WEDNESDAY</div>
                                    <div className="small">Income tax sops on the cards, The bias in VC funding, and other top news for you</div>
                                </div>
                                <span className="ml-auto mb-auto">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="text-right text-muted pt-1">3d</div>
                                </span>
                            </div>
                            <div className="p-3 d-flex align-items-center osahan-post-header">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                </div>
                                <div className="font-weight-bold mr-3">
                                    <div className="mb-2">We found a job at askbootstrap Ltd that you may be interested in Vivamus imperdiet venenatis est...</div>
                                    <button type="button" className="btn btn-outline-success btn-sm">View Jobs</button>
                                </div>
                                <span className="ml-auto mb-auto">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="text-right text-muted pt-1">4d</div>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="box shadow-sm rounded bg-white mb-3">
                        <div className="box-title border-bottom p-3">
                            <h6 className="m-0">Earlier</h6>
                        </div>
                        <div className="box-body p-0">
                            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                                <div className="dropdown-list-image mr-3 d-flex align-items-center bg-danger justify-content-center rounded-circle text-white">DRM</div>
                                <div className="font-weight-bold mr-3">
                                    <div className="text-truncate">DAILY RUNDOWN: MONDAY</div>
                                    <div className="small">Nunc purus metus, aliquam vitae venenatis sit amet, porta non est.</div>
                                </div>
                                <span className="ml-auto mb-auto">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right" >
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="text-right text-muted pt-1">3d</div>
                                </span>
                            </div>
                            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                                <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></div>
                                <div className="font-weight-bold mr-3">
                                    <div className="text-truncate">DAILY RUNDOWN: SATURDAY</div>
                                    <div className="small">Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper</div>
                                </div>
                                <span className="ml-auto mb-auto">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="text-right text-muted pt-1">3d</div>
                                </span>
                            </div>
                            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                </div>
                                <div className="font-weight-bold mr-3">
                                    <div className="mb-2"><span className="font-weight-normal">Congratulate Gurdeep Singh Osahan (iamgurdeeposahan)</span> for 5 years at Askbootsrap Pvt.</div>
                                    <button type="button" className="btn btn-outline-success btn-sm">Say congrats</button>
                                </div>
                                <span className="ml-auto mb-auto">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="text-right text-muted pt-1">4d</div>
                                </span>
                            </div>
                            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" />
                                </div>
                                <div className="font-weight-bold mr-3">
                                    <div>
                                        <span className="font-weight-normal">Congratulate Mnadeep singh (iamgurdeeposahan)</span> for 4 years at Askbootsrap Pvt.
                                        <div className="small text-success"><i className="fa fa-check-circle"></i> You sent Mandeep a message</div>
                                    </div>
                                </div>
                                <span className="ml-auto mb-auto">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="text-right text-muted pt-1">4d</div>
                                </span>
                            </div>
                            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                                <div className="dropdown-list-image mr-3 d-flex align-items-center bg-success justify-content-center rounded-circle text-white">M</div>
                                <div className="font-weight-bold mr-3">
                                    <div className="text-truncate">DAILY RUNDOWN: MONDAY</div>
                                    <div className="small">Nunc purus metus, aliquam vitae venenatis sit amet, porta non est.</div>
                                </div>
                                <span className="ml-auto mb-auto">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="text-right text-muted pt-1">3d</div>
                                </span>
                            </div>
                            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                                <div className="dropdown-list-image mr-3"><img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></div>
                                <div className="font-weight-bold mr-3">
                                    <div className="text-truncate">DAILY RUNDOWN: SATURDAY</div>
                                    <div className="small">Pellentesque semper ex diam, at tristique ipsum varius sed. Pellentesque non metus ullamcorper</div>
                                </div>
                                <span className="ml-auto mb-auto">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="text-right text-muted pt-1">3d</div>
                                </span>
                            </div>
                            <div className="p-3 d-flex align-items-center border-bottom osahan-post-header">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                                </div>
                                <div className="font-weight-bold mr-3">
                                    <div className="mb-2"><span className="font-weight-normal">Congratulate Gurdeep Singh Osahan (iamgurdeeposahan)</span> for 5 years at Askbootsrap Pvt.</div>
                                    <button type="button" className="btn btn-outline-success btn-sm">Say congrats</button>
                                </div>
                                <span className="ml-auto mb-auto">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="text-right text-muted pt-1">4d</div>
                                </span>
                            </div>
                            <div className="p-3 d-flex align-items-center osahan-post-header">
                                <div className="dropdown-list-image mr-3">
                                    <img className="rounded-circle" src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" />
                                </div>
                                <div className="font-weight-bold mr-3">
                                    <div>
                                        <span className="font-weight-normal">Congratulate Mnadeep singh (iamgurdeeposahan)</span> for 4 years at Askbootsrap Pvt.
                                        <div className="small text-success"><i className="fa fa-check-circle"></i> You sent Mandeep a message</div>
                                    </div>
                                </div>
                                <span className="ml-auto mb-auto">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-light btn-sm rounded" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="mdi mdi-dots-vertical"></i>
                                        </button>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-delete"></i> Delete</button>
                                            <button className="dropdown-item" type="button"><i className="mdi mdi-close"></i> Turn Off</button>
                                        </div>
                                    </div>
                                    <br />
                                    <div className="text-right text-muted pt-1">4d</div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Notification
