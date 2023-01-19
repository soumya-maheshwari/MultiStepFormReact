import React, { Component } from "react";

class UserDetails extends Component {
  continue = (e) => {
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <h3 className="heading"> Enter User Details</h3>
        <div className="inputs">
          <input
            type="text"
            id="input"
            placeholder="FIRST NAME"
            onChange={handleChange("firstName")}
          />
          <br />
          <input
            type="text"
            id="input"
            placeholder="LAST NAME"
            onChange={handleChange("lastName")}
          />
          <br />
          <input
            type="text"
            id="input"
            placeholder="Email"
            onChange={handleChange("Email")}
          />
        </div>
        <button
          className="btn-continue btn"
          primary={true}
          onClick={this.continue}
        >
          CONTINUE
        </button>
      </div>
    );
  }
}

export default UserDetails;
