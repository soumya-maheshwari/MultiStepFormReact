import React, { Component } from "react";

class PersonalDetails extends Component {
  continue = (e) => {
    this.props.nextStep();
  };
  back = (e) => {
    this.props.backStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <h3 className="heading"> Enter Personal Details</h3>
        <div className="inputs">
          <input
            type="text"
            id="input"
            placeholder="OCCUPATION"
            onChange={handleChange("occupation")}
          />
          <br />
          <input
            type="text"
            id="input"
            placeholder="CITY"
            onChange={handleChange("city")}
          />
          <br />
          <input
            type="text"
            id="input"
            placeholder="BIO"
            onChange={handleChange("bio")}
          />
        </div>
        <button className="btn-continue btn" onClick={this.continue}>
          CONTINUE
        </button>

        <button className="btn-back btn" onClick={this.back}>
          BACK
        </button>
      </div>
    );
  }
}

export default PersonalDetails;
