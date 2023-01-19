import React, { Component } from "react";
class Confirm extends Component {
  continue = (e) => {
    this.props.nextStep();
  };
  back = (e) => {
    this.props.backStep();
  };
  render() {
    const {
      values: { firstName, lastName, occupation, job, email, city },
    } = this.props;
    return (
      <div>
        <h3 className="heading">Confirm User Details</h3>
        <ul className="lists">
          <li
            className="list-items"
            primaryText="First Name"
            secondaryText={firstName}
          ></li>
          <li
            className="list-items"
            primaryText="last Name"
            secondaryText={lastName}
          ></li>
          <li
            className="list-items"
            primaryText="email"
            secondaryText={email}
          ></li>
          <li
            className="list-items"
            primaryText="occupation"
            secondaryText={occupation}
          ></li>
          <li className="list-items" primaryText="job" secondaryText={job}></li>
          <li
            className="list-items"
            primaryText="city"
            secondaryText={city}
          ></li>
        </ul>
        <button className="btn-continue btn" onClick={this.continue}>
          CONFIRM AND CONTINUE
        </button>
        <button className="btn-back btn" onClick={this.back}>
          BACK
        </button>
      </div>
    );
  }
}

export default Confirm;
