import React from 'react'

class Preferences extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: {
        name: "",
        email: "",
        phone: "",
        Iam: "",
        location: "",
        gender: "",
        intrest: new Map(),
      },
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      fields: {
        ...this.state.fields,
        [event.target.name]: event.target.value,
        [event.target.intrest]:event.target.value
      }

    });

  };

  handleSubmit(event) {
    const { fields } = this.state;
    event.preventDefault();
    console.log("print", fields)
  }

  render() {
    const { fields } = this.state;
    return (
      <div className="container bg-img">
        <h4>Welcome to Travel Companion</h4>
        <h2>Help us trailor a better experience for you </h2>
        <form>
          <div className="form-group mb-3">
            <label htmlFor="yourName">Your Name</label>
            <input type="text" className="form-control" id="yourName" placeholder="Enter your Name"
              name="name"
              value={fields.firstName}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email">Email address</label>
            <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"
              name="email"
              value={fields.email}
              onChange={this.handleChange}
            />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group mb-3">
            <label htmlFor="phone">Phone</label>
            <input type="text" className="form-control" id="phone"
              maxLength={10}
              name='phone'
              value={fields.phone}
              placeholder="Enter Phone Number"
              onChange={this.handleChange}
            />
          </div>
          <div className='form-group mb-3' value={fields.Iam} onChange={this.handleChange}>
            <label htmlFor="exampleFormControlSelect2">I’m a </label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="Iam" id="travellerID" value="Traveller"
              />
              <label className="form-check-label" htmlFor="travellerID">
                Traveller
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="Iam" id="serviceProviderID" value="Service Provider"
              />
              <label className="form-check-label" htmlFor="serviceProviderID">
                Service Provider
              </label>
            </div>
          </div>
          <div className="form-group mb-3 col-md-4">
            <label htmlFor="location">I am based out of</label>
            <select id="location" className="form-control" name="location" value={fields.location} onChange={this.handleChange}>
              <option value="">Choose...</option>
              <option value="hyd">hyd</option>
              <option value="/...">...</option>
            </select>
          </div>
          <div className="form-group mb-3 col-md-4" value={fields.gender}
            onChange={this.handleChange}>
            <label htmlFor="exampleFormControlSelect2">Gender</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="femaleID" value="female"
              />
              <label className="form-check-label" htmlFor="femaleID">
                Female
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="gender" id="maleId" value="male"
              />field
              <label className="form-check-label" htmlFor="maleID">
                Male
              </label>
            </div>
          </div>
          <div className="form-group mb-3" name="intrest" value={fields.intrest}
            onChange={this.handleChange}>
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
          <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}
          >Submit</button>
        </form>

      </div>
    )
  }

}

export default Preferences  