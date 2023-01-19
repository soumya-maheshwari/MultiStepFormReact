import React, { Component } from "react";
class Confirm extends Component {
  continue = (e) => {
    this.props.nextStep();
  };
  render() {
    const {
      values: { firstName, lastName, occupation, job, email, city },
    } = this.props;
    return (
      <div>
        <h3 className="heading">Confirm User Details</h3>
        <ul>
          <li primaryText="First Name" secondaryText={firstName}></li>
          <li primaryText="last Name" secondaryText={lastName}></li>
          <li primaryText="email" secondaryText={email}></li>
          <li primaryText="occupation" secondaryText={occupation}></li>
          <li primaryText="job" secondaryText={job}></li>
          <li primaryText="city" secondaryText={city}></li>
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
