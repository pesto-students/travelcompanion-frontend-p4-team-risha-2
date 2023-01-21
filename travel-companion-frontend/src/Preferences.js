import React, { useState } from 'react';
import axios from 'axios';
import store from './store/reducer'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { FaLocationArrow,FaSearchLocation } from "react-icons/fa";
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from 'react-places-autocomplete';


export const Preferences = () => {
  const [prefernceData, setPreferenceData] = useState(
    {
      formSubmit: { sucess: false, fail: true },
      fields: {
        name: null,
        email: store.getState()?.loggedInUser[0]?.email,
        phone: "",
        Iam: "",
        location: "",
        gender: "",
        id: ""
        // intrest: new Map(),
      }
    }
  )
  // const [address, setAdress] = useState("")
  const { coordinates, setCoordinates } = useState({
    lat: null,
    lng: null
  })
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPreferenceData((prefernceData) => ({
      fields: {
        ...prefernceData.fields,
        [name]: value
      }
    }));
  }

  const handleSelect = async value1 => {
    // const results = await geocodeByAddress(value1);
    // const ll = await getLatLng(results[0]);
    // // setLocation(value1);
    // setCoordinates(ll);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (prefernceData.fields.name && prefernceData.fields.email) {
      axios.post('http://localhost:5000/preferences/', prefernceData.fields)
        .then(response => {
          console.log(response)
          setPreferenceData((prefernceData) => ({
            fields: {
              ...prefernceData.fields,
              id: response.data._id
            }
          }));
          dispatch({
            type: 'LOGIN',
            payload: {
                id: response.data._id ,
            }
        })
        navigate('/homePage')
        })
        .catch(Err => {
          console.log(Err)
        })
    } else {
      alert("fill all fields")
    }

  }


  return (
    <div>
      {/* {formSubmit.sucess && (
          <Navigate to="/homePage" replace={true} />
        )} */}
      <div className="container bg-img">
        <h4>Welcome to Travel Companion</h4>
        <h2>Help us trailor a better experience for you </h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="yourName">Your Name</label>
            <input type="text" className="form-control" id="yourName" placeholder="Enter your Name"
              name="name"
              // value={prefernceData?.fields?.firstName}
              onChange={handleChange}
              required={true}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"
              name="email"
              // value={prefernceData?.fields?.email}
              onChange={handleChange}
              required
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phone">Phone</label>
            <input type="text" className="form-control" id="phone"
              maxLength={10}
              name='phone'
              // value={prefernceData?.fields?.phone}
              placeholder="Enter Phone Number"
              onChange={handleChange}
              required
            />
          </div>
          <div className='form-group mb-3' onChange={handleChange}>
            <label htmlFor="exampleFormControlSelect2">I’m a </label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="Iam" id="travellerID" value="Traveller" required
              />
              <label className="form-check-label" htmlFor="travellerID">
                Traveller
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="Iam" id="serviceProviderID" value="Service Provider" required
              />
              <label className="form-check-label" htmlFor="serviceProviderID">
                Service Provider
              </label>
            </div>
          </div>
          <div className="form-group mb-3 col-md-4">
            <label htmlFor="location">I am based out of</label>
            <select id="location" className="form-control" name="location"
              // value={prefernceData?.fields?.location} 
              onChange={handleChange} required>
              <option value="">Choose...</option>
              <option value="hyd">hyd</option>
              <option value="/...">...</option>
            </select>
            <PlacesAutocomplete
                onChange={handleChange}
                onSelect={handleSelect}
                name="location"
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
          <div className="form-group mb-3 col-md-4"
            // value={prefernceData?.fields?.gender}
            onChange={handleChange}>
            <label htmlFor="exampleFormControlSelect2">Gender</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="femaleID" value="female" required
              />
              <label className="form-check-label" htmlFor="femaleID">
                Female
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="maleId" value="male" required
              />field
              <label className="form-check-label" htmlFor="maleID">
                Male
              </label>
            </div>
          </div>
          <div className="form-group mb-3"
          // name="intrest" value={fields.intrest}
          //   onChange={handleChange}
          >
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="intrest" id="adventure" value="adventure" />
              <label className="form-check-label" htmlFor="adventure">adventure</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="intrest" id="shopping" value="shopping" />
              <label className="form-check-label" htmlFor="shooping">shopping</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="intrest" id="culture" value="culture" />
              <label className="form-check-label" htmlFor="culture">culture</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="intrest" id="waterfall" value="waterfall" />
              <label className="form-check-label" htmlFor="waterfall">waterfall</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="intrest" id="historical" value="historical" />
              <label className="form-check-label" htmlFor="historical">historical</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" name="intrest" id="beaches" value="beaches" />
              <label className="form-check-label" htmlFor="beaches">beaches</label>
            </div>
          </div>
          <div className="form-group mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="invalidCheck2" required />
              <label className="form-check-label" htmlFor="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}
          >Submit</button>
        </form>

      </div>
    </div>
  )

}


// export default connect(null, mapDispatchToProps)(Preferences);
export default Preferences