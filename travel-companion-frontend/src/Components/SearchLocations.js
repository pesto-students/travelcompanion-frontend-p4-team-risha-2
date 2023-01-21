import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { FaLocationArrow,FaSearchLocation } from "react-icons/fa";

import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';


function SearchLocations() {
  const [address, setAdress] = useState("")
  const { coordinates, setCoordinates } = useState({
    lat: null,
    lng: null
  })

  const handleSelect = async value1 => {
    const results = await geocodeByAddress(value1);
    const ll = await getLatLng(results[0]);
    setAdress(value1);
    setCoordinates(ll);
  }

  const handleChange = (event) => {
    setAdress(event)
  }

  const notify = () => toast.success('Searching..', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

  const search = (event) => {
    event.preventDefault();
    if (address) {
      axios.post('http://localhost:5000/mapPlaces/', { location: address })
        .then(response => {
          console.log(response)
          notify()
        })
        .catch(Err => {
          console.log(Err)
        })
        axios.get(`http://localhost:5000/mapPlacesbySearch/${address}`,)
                .then(response => {
                  console.log(response)
                    // setState({
                    //     name: response.data.name,
                    //     email: response.data.email,
                    //     phone: response.data.phone
                    // });
                })
                .catch(Err => {
                    console.log(Err)
                })
    }
  }

  return (
    <div>
      <div className="container">
        <div className="tabs h-auto">
          <div className="tab">
            <input type="radio" name="css-tabs" id="tab-1" defaultChecked={true} className="tab-switch" />
            <label htmlFor="tab-1" className="tab-label">Search by Locations</label>
            <div className="tab-content  w-100 d-flex h-auto">
              <PlacesAutocomplete
                onChange={handleChange}
                onSelect={handleSelect}
                value={address}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div
                    key={suggestions.description}
                  >
                    <h4>Find buddies based on location Search</h4><br />
                    <input class="input-inset" type="text"
                      {...getInputProps({
                        placeholder: 'Search Places ...',
                        className: 'location-search-input',
                      })}
                    />
                    <button className="btn btn-primary mx-3 bg-light text-dark" type="submit" onClick={search}><FaLocationArrow /></button>

                    <div className="autocomplete-dropdown-container">
                      {loading && <div>Loading...</div>}
                      {suggestions.map(suggestion => {
                        const className = suggestion.active
                          ? 'suggestion-item--active'
                          : 'suggestion-item';
                        // inline style for demonstration purpose
                        // const style = suggestion.active
                        //   ? { backgroundColor: '#fafafa', cursor: '' }
                        //   : { backgroundColor: '#ffffff', cursor: '' };
                        return (
                          <div
                            {...getSuggestionItemProps(suggestion, {
                              className,
                              // style,
                            })}
                          >
                            <span class="icon"><FaSearchLocation/> {suggestion.description} </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
          </div>
          <div className="tab">
            <input type="radio" name="css-tabs" id="tab-2" className="tab-switch" />
            <label htmlFor="tab-2" className="tab-label">Find Buddies</label>
            <div className="tab-content h-auto">
            <div className="container profile-page">
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
                                    <p className="social-icon m-t-5 m-b-0">
                                        <a title="Twitter" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Facebook" href="javascript:void(0);"><i className="fa fa-facebook"></i></a>
                                        <a title="Google-plus" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Behance" href="javascript:void(0);"><i className="fa fa-behance"></i></a>
                                        <a title="Instagram" href="javascript:void(0);"><i className="fa fa-instagram "></i></a>
                                    </p>
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
                                    <p className="social-icon m-t-5 m-b-0">
                                        <a title="Twitter" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Facebook" href="javascript:void(0);"><i className="fa fa-facebook"></i></a>
                                        <a title="Google-plus" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Behance" href="javascript:void(0);"><i className="fa fa-behance"></i></a>
                                        <a title="Instagram" href="javascript:void(0);"><i className="fa fa-instagram "></i></a>
                                    </p>
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
                                    <p className="social-icon m-t-5 m-b-0">
                                        <a title="Twitter" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Facebook" href="javascript:void(0);"><i className="fa fa-facebook"></i></a>
                                        <a title="Google-plus" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Behance" href="javascript:void(0);"><i className="fa fa-behance"></i></a>
                                        <a title="Instagram" href="javascript:void(0);"><i className="fa fa-instagram "></i></a>
                                    </p>
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
                                    <p className="social-icon m-t-5 m-b-0">
                                        <a title="Twitter" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Facebook" href="javascript:void(0);"><i className="fa fa-facebook"></i></a>
                                        <a title="Google-plus" href="javascript:void(0);"><i className="fa fa-twitter"></i></a>
                                        <a title="Behance" href="javascript:void(0);"><i className="fa fa-behance"></i></a>
                                        <a title="Instagram" href="javascript:void(0);"><i className="fa fa-instagram "></i></a>
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
      </div>
      <ToastContainer />
    </div>
  )

  // const {isLoaded} = useLoadScript({googleMapsApiKey: "AIzaSyAMK3vI-Vqdf6l-EwT7xTw3UF-3npnKBGY"})

  // if(!isLoaded) return <div>Loading...</div>;
  // return (
  //   <div><GoogleMap 
  //   zoom={10} 
  //   center={{lat:44, lng:-80}} 
  //   mapContainerClassName="map-continer"
  //   ></GoogleMap></div>
  // )
}

// function Map(e){
//   e.preventDefault();
//     return  <GoogleMap 
//     zoom={10} 
//     center={{lat:44, lng:-80}} 
//     mapContainerClassName="map-continer"
//     ></GoogleMap>
// }

export default SearchLocations