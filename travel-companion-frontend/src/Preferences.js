import React from 'react'

const Preferences = () => {
  const { fields, errors } = this.state;
  return (
    <div>
      <h4>Welcome to Travel Companion</h4>
      <h2>Help us trailor a better experience for you </h2>
      <div>
        <div className="border">
          <div>
            <div>
              <label>First name:</label>
              <input
                type="text"
                name="firstName"
                value={fields.firstName}
                onChange={event => this.handleUserInput(event)}
                placeholder="First Name"
              />
            </div>
            <div>
              <span className="text-danger">{errors.firstName}</span>
            </div>
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={fields.email}
              onChange={event => this.handleUserInput(event)}
              placeholder="Email Address"
            />
            <div>
              <span className="text-danger">{errors.email}</span>
            </div>
          </div>
          <div>
            <label>Mobile:</label>
            <input
              name="mobile"
              value={fields.mobile}
              onChange={event => this.handleUserInput(event)}
              placeholder="mobile"
            />
            <div>
              <span className="text-danger">{errors.mobile}</span>
            </div>
          </div>
          <div>
            <label>Password:</label>
            <input
              type="Password"
              name="password"
              value={fields.password}
              onChange={event => this.handleUserInput(event)}
              placeholder="Password"
            />
            <div>
              <span className="text-danger">{errors.password}</span>
            </div>
          </div>
          <div>
            <label>Confirm Password:</label>
            <input
              type="Password"
              name="confirmPassword"
              value={fields.confirmPassword}
              onChange={event => this.handleUserInput(event)}
              placeholder="confirm Password"
            />
            <div>
              <span className="text-danger">{errors.confirmPassword}</span>
            </div>
          </div>
        </div>
        <br />
        <button
          type="button"
          className="login-button pointer"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Preferences  