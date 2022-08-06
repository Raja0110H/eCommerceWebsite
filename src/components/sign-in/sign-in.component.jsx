import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { OptionLink } from "../header/header.styles";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

import {
  SignInContainer,
  ButtonsBarContainer,
} from "./sign-in.styles";


class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInContainer>
        <span style={{ fontSize: "30px" }}>Sign In</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <ButtonsBarContainer>
            <CustomButton type="submit"> Sign in </CustomButton>
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
              Sign in with Google
            </CustomButton>
          </ButtonsBarContainer>
        </form>
        <OptionLink to="/signup">
          <p style={{ textDecoration: "underline", fontSize: "20px",color:"black" }}>
            I don't have an account
          </p>
        </OptionLink>
      </SignInContainer>
    );
  }
}

export default SignIn;
