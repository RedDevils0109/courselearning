import { Button } from "@mui/material";

import { Checkbox } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate
import { useAuthContext } from "../context/auth_context";
import React, { useState } from "react";
import styled from "styled-components";

const SignUpPage = () => {
    const { login } = useAuthContext();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = () => {
    setLoading(true);

    // Simulate an async login operation
    setTimeout(() => {
      // Assume the login was successful for this example
      login();
      setLoading(false);
      navigate("/"); // Redirect to home page after successful login

      // If login fails, you can set the error like below
      // setError(true);
    }, 2000); // Simulate a delay of 2 seconds
    // Add your login logic here
    // If login fails, setError(true);
  };
  return (
    <SignUpWrapper>
      <div className="loginDiv">
        <h4>Sign up Start Learning!</h4>
        <hr className="hr_line_login"></hr>

        <div className="login_inputDiv">
          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="login_pw"
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="login_pw"
          ></input>

          <input
            name="password"
            type="password"
            placeholder="Passward"
            className="login_pw"
          ></input>

          <div className="checkboxDiv">
            <input type="checkbox" className="signup_checkbox"></input>
            <label for="signup_checkbox">
              I'm in for emails with exciting discounts and personalized
              recommendations
            </label>
          </div>

          {/* <button id="signup_input">
          </button> */}
          <Button onClick={() => handleLogin()} id="signup_input">
            {loading ? (
              <CircularProgress style={{ color: "white" }} />
            ) : (
              "Sign up"
            )}
          </Button>

          <h6>
            By signing up you agree to our <a href="#">Terms of use</a> and{" "}
            <a href="#">privacy policy</a>
          </h6>
          <hr className="hr_line_login"></hr>

          <div className="hv_account">
            Alreday have an Account?{" "}
            <span>
              <Link to={"/login"}>Log in</Link>
            </span>
          </div>
        </div>
      </div>
    </SignUpWrapper>
  );
};
const SignUpWrapper = styled.div`
  .loginDiv {
    width: 350px;
    height: 400px;
    margin-left: 500px;
    /* border: 1px solid red; */
    margin-top: 20px;
  }
  .loginDiv h4 {
    margin-left: 20px;
  }
  .loginDiv p {
    margin-left: 80px;
  }
  .hr_line_login {
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .login_inputDiv {
    margin-left: 30px;
  }
  #outlined-basic {
    padding: 15px;
    cursor: pointer;
    width: 600px;
    height: 20px;
    margin-top: 15px;
  }
  .login_pw {
    padding-left: 15px;
    cursor: pointer;
    width: 300px;
    height: 50px;
    margin-top: 15px;
  }
  #signup_input {
    color: #fff;
    background-color: #a435f0;
    border: 1px solid transparent;
    font-weight: 700;
    text-align: center;
    vertical-align: middle;
    touch-action: manipulation;
    cursor: pointer;
    width: 300px;
    height: 50px;
    margin-top: 15px;
    margin-bottom: 25px;
  }

  .hv_account {
    margin-left: 40px;
  }
  .hv_account span {
    font-weight: 600;
  }
  .checkboxDiv {
    margin-top: 20px;
  }
  .signup_checkbox {
    margin-right: 10px;
  }
  .alert {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .alert p {
    margin: 0px;
    padding: 0px;
  }
`;
export default SignUpPage;
