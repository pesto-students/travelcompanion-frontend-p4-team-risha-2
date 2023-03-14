// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavbarWithNotificationAndLogout from './Navbar';
import CreatePost from './Tabs/CreatePost';
import 'bootstrap/dist/js/bootstrap.min.js';
import Buddies from './Tabs/Buddies';
import EditProfile from './EditProfile';
import Feed from './Tabs/Feed';
import React, { useState, useEffect, useRef   } from 'react';
import Travel from './Tabs/Travel';
import { ToastContainer, toast } from 'react-toastify';

function HomePage() {
  const [refresh, setRefresh] = useState(false);
  // const isInitialMount = useRef(true);

  const notify = () => toast.success('LoggedIn successfully', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
});

useEffect(() => {
  // if (!isInitialMount.current) {
  //   notify();
  //   isInitialMount.current = true;
  // }
  const timer = setTimeout(() => {
        notify();
  }, 1000);
  return () => clearTimeout(timer);

}, []);
  return (
    <>
      <div className="container">
        <NavbarWithNotificationAndLogout />
        <div className="row h-100">
          <div className="col-12 col-sm-10 col-md-12 mx-auto d-table h-100">
            <div className="d-table-cell align-middle">
              <div className="card-body">
                <div className="row">
                  <div className='col-lg-10 row'>
                    <div className="container">
                      <div className="container">
                        <div className="cover-photo">
                          <div className="graph"></div>
                          <ul className="timeline"></ul>
                        </div>
                        <div className="logo"></div>
                        <div className='d-flex justify-content-end'>
                          <h1 className="title">
                            Uma Varagam
                            <div>varagam@gmail.com</div>
                          </h1>
                          <button className='btn btn-primary edit-btn'>My Feed</button>
                          <div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card" style={{ width: 18 + "rem" }}>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            {/* <a title="Facebook" ><i className="fa fa-facebook"></i></a> */}
                            Invitation Requests</li>
                          <li className="list-group-item">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="sample" className="rounded small-img" />Blocked Accounts</li>
                          <li className="list-group-item">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="sample" className="rounded small-img" />Create Page</li>
                          <li className="list-group-item">
                            <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="sample" className="rounded small-img" />Create Group</li>
                          <li className="list-group-item mx-2">
                            Show More</li>
                        </ul>
                      </div>
                      <div className="card" style={{ width: 18 + "rem" }}>
                        <div className="card-header">
                          <h4>Most Trending</h4>
                        </div>
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item">
                            #korona</li>
                          <li className="list-group-item">
                            #hyd2023</li>
                          <li className="list-group-item">
                            #shimlaBeauty</li>
                          <li className="list-group-item mx-2">
                            Show More</li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-8">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Feed</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="travel-tab" data-bs-toggle="tab" data-bs-target="#travel" type="button" role="tab" aria-controls="travel" aria-selected="false">Travel</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button className="nav-link" id="buddies-tab" data-bs-toggle="tab" data-bs-target="#buddies" type="button" role="tab" aria-controls="buddies" aria-selected="false">Buddies</button>
                        </li>
                      </ul>
                      <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div className="profile-feed">
                            <div className="callout secondary">
                              <div className='p-3 border rounded mt-2'>
                                <h4 className="leave-comment">Create a Post: </h4>
                                <CreatePost refresh={refresh} setRefresh={setRefresh}/>
                              </div>
                            </div>
                            <div><h3 className='my-3'> FEED </h3>
                              <Feed refresh={refresh} setRefresh={setRefresh}/>
                            </div>
                          </div>
                        </div>
                        <div className="tab-pane fade" id="travel" role="tabpanel" aria-labelledby="travel-tab"><Travel /></div>
                        <div className="tab-pane fade" id="buddies" role="tabpanel" aria-labelledby="buddies-tab"><Buddies/></div>
                        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><EditProfile/></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-2">
                    <div className="card" style={{ width: 18 + "rem" }}>
                      <div className="card-header">
                        <h4>Most Active Questions</h4>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Best places in Hyderabad?</li>
                        <li className="list-group-item">
                          No of days to travel hyd in train from delhi?</li>
                        <li className="list-group-item">
                          Local food in hyderabad?</li>
                        <li className="list-group-item">
                          Show More</li>
                      </ul>
                    </div>
                    <div className="card" style={{ width: 18 + "rem" }}>
                      <div className="card-header">
                        <h4>Newest Events</h4>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex">
                          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="sample" className="rounded small-img mx-2" />
                          <div>
                            <span>Event Name</span> <br /><span>Created by Nelson</span>
                          </div></li>
                        <li className="list-group-item d-flex">
                          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="sample" className="rounded small-img mx-2" />
                          <div>
                            <span>Event Name</span> <br /><span>Created by Nelson</span>
                          </div></li>
                        <li className="list-group-item d-flex">
                          <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="sample" className="rounded small-img mx-2" />
                          <div>
                            <span>Event Name</span> <br /><span>Created by Nelson</span>
                          </div></li>
                        <li className="list-group-item mx-2">
                          Show More</li>
                      </ul>
                    </div>
                    <div className="card" style={{ width: 18 + "rem" }}>
                      <div className="card-header">
                        <h4>Most Active Pages</h4>
                      </div>
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          Hyderabad_Beats</li>
                        <li className="list-group-item">
                          Delhi_Masthis</li>
                        <li className="list-group-item">
                          Prayag_Traditions</li>
                        <li className="list-group-item">
                          Show More</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </div >
    </>
  );
}

export default HomePage;