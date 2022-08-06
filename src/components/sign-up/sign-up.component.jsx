import React from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {OptionLink} from "../header/header.styles";

import {
  auth,
  createUserProfileDocument,
  signInWithGoogle,
} from "../../firebase/firebase.utils";

import { SignUpContainer } from "./sign-up.styles";
import { ButtonsBarContainer } from "./sign-up.styles";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpContainer>
        <span style={{ fontSize: "30px" }}>Create An Account</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit"> Sign UP </CustomButton>

            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              <img
                style={{
                  height: "25px",
                  width: "25px",
                  margin: "15px 0px 5px -5px",
                }}
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt=""
              />
              SignUp with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
        <OptionLink to="/signin">
          <p style={{ textDecoration: "underline", fontSize: "20px",color:"black" }}>
            I already have an account
          </p>
        </OptionLink>
      </SignUpContainer>
    );
  }
}

export default SignUp;
