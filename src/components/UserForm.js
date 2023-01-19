import React, { Component } from "react";
import UserDetails from "./UserDetails";
import PersonalDetails from "./PersonalDetails";
import Success from "./success";
import Confirm from "./Confirm";
class UserForm extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    occupation: "",
    email: "",
    city: "",
    bio: "",
  };

  // proceed
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  // back
  backStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  // for updating changes
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
      // set input to e.target.value
    });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName, city, occupation, email, bio } = this.state;
    const { values } = { firstName, lastName, city, occupation, email, bio };

    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            value={values}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            value={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            value={values}
          />
        );
      case 4:
        return (
          <Success
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            value={values}
          />
        );
    }
  }
}

export default UserForm;
