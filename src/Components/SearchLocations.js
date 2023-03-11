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
      axios.post('https://travelcompanion-q32wjds34a-as.a.run.app/mapPlaces/', { location: address })
        .then(response => {
          console.log(response)
          notify()
        })
        .catch(Err => {
          console.log(Err)
        })
        axios.get(`https://travelcompanion-q32wjds34a-as.a.run.app/mapPlacesbySearch/${address}`,)
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
      <div className="">
        {/* <div className="tabs h-auto"> */}
          {/* <div className="tab"> */}
            {/* <input type="radio" name="css-tabs" id="tab-1" defaultChecked={true} className="tab-switch" /> */}
            {/* <h2>Search Destination</h2> */}
            <div className="w-100 d-flex h-auto">
              <PlacesAutocomplete
                onChange={handleChange}
                onSelect={handleSelect}
                value={address}
              >
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                  <div
                    key={suggestions.description}
                  >
                    <input className="input-inset" type="text"
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
                            <span className="icon"><FaSearchLocation/> {suggestion.description} </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </PlacesAutocomplete>
            </div>
          {/* </div> */}
        {/* </div> */}
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