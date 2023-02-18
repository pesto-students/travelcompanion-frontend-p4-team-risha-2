import React, { useState } from 'react'
// import logo from './assests/images/logo.png';
import { useNavigate } from 'react-router-dom'
import Axios from "axios";

export const SignIn = () => {
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [Iam, setIam] = useState("");
    const [location, setLocation] = useState("");
    const [gender, setGender] = useState("");
    const [intrest, setIntrest] = useState("");
    // const [data, setData] = useState(null);
    const navigate = useNavigate();
    const register = (e) => {
        e.preventDefault();
        Axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
                email: email,
                phone: phone,
                Iam: Iam,
                location: location,
                gender: gender,
                intrest: intrest,
            },
            url: "http://localhost:5000/register",
        }).then((res) => console.log(res));
    };

    return (
        <div className="container h-100 bg-img-sign-up">
            <div className="row">

                <div className='col-lg-4 m-auto text-light'>
                    <h1>Already have a account?</h1>
                    <h3>Lets jump into the adventure</h3>
                    Explore the world with ease
                    <div className="text-center mt-3">
                        {/* <a href="index.html" className="btn btn-lg btn-primary" ></a> */}
                        <button type="submit" className="btn btn-lg btn-primary" onClick={() => navigate('/')}>Log In</button>
                    </div>
                </div>
                <div className="col-sm-10 col-md-8 col-lg-5 mx-auto d-table h-100">
                    <div className="d-table-cell align-middle">
                        <div className="card">
                            <div className="card-body">
                                <div className="m-sm-4">
                                    <div className="my-4">
                                        <h1>
                                            Lets get started
                                        </h1>
                                    </div>
                                    <form>
                                        <div className="form-group">
                                            <label>UserName</label>
                                            <input className="form-control form-control-lg" type="text" name="username" placeholder="Enter your UserName"
                                                onChange={(e) => setRegisterUsername(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input className="form-control form-control-lg" type="email" name="email" placeholder="Enter your email"
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="form-group mb-3">
                                            <label htmlFor="phone">Phone</label>
                                            <input type="text" className="form-control form-control-lg" id="phone"
                                                maxLength={10}
                                                name='phone'
                                                // value={prefernceData?.fields?.phone}
                                                placeholder="Enter Phone Number"
                                                onChange={(e) => setPhone(e.target.value)}
                                                required
                                            />
                                        </div>
                                        <div className='form-group mb-3' onChange={(e) => setIam(e.target.value)}>
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
                                                onChange={(e) => setLocation(e.target.value)} required>
                                                <option value="">Choose...</option>
                                                <option value="hyd">hyd</option>
                                                <option value="/...">...</option>
                                            </select>
                                            {/* <PlacesAutocomplete
                onChange={handleChange}
                onSelect={handleSelect}
                name="location"
              > */}
                                            {/* {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
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
              </PlacesAutocomplete> */}
                                        </div>
                                        <div className="form-group mb-3 col-md-4"
                                            // value={prefernceData?.fields?.gender}
                                            onChange={(e) => setGender(e.target.value)}>
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
                                                />
                                                <label className="form-check-label" htmlFor="maleID">
                                                    Male
                                                </label>
                                            </div>
                                        </div>
                                        <div className="form-group mb-3"
                                        // name="intrest" value={fields.intrest}
                                          onChange={(e) => setIntrest(e.target.value)}
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
                                        <div className="form-group">
                                            <label>Create Password</label>
                                            <input className="form-control form-control-lg" type="password" name="password" placeholder="Enter your password"
                                                onChange={(e) => setRegisterPassword(e.target.value)}
                                            />
                                            <small>
                                                <p>By continuing you agree to terms & conditions and Privacy Policy</p>
                                            </small>
                                        </div>
                                        {/* <div>
                                            <div className="custom-control custom-checkbox align-items-center">
                                                <input type="checkbox" className="custom-control-input" value="remember-me" name="remember-me" checked="" />
                                                <label className="custom-control-label text-small">Remember me next time</label>
                                            </div>
                                        </div> */}
                                        <div className="text-center mt-3">
                                            {/* <a href="index.html" className="btn btn-lg btn-primary" ></a> */}
                                            <button type="submit" className="btn btn-lg btn-primary" onClick={register}>Create Account</button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )

}

export default SignIn
