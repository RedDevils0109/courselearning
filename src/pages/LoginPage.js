import React, { useState } from "react";
import styled from "styled-components";

import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate, Link } from "react-router-dom"; // Import useNavigate
import { useAuthContext } from "../context/auth_context";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize the navigate function
  const { login } = useAuthContext();

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
    <LoginWrapper>
      <div className="loginDiv">
        <h4>Log In to Your ILearning Account!</h4>
        <hr className="hr_line_login" />

        {/* <div className="img_tag">
          <img
            src="	https://img-c.udemycdn.com/user/50x50/anonymous_3.png"
            alt=""
          />
          <p>Welcome back, {"Yashas"}</p>
        </div> */}

        <div className="login_inputDiv">
          <input
            name="email"
            type="email"
            placeholder="email"
            className="login_pw"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            className="login_pw"
          />

          {/* <button id="login_input">Log in</button> */}
          <button onClick={() => handleLogin()} id="login_input">
            {loading ? (
              <CircularProgress style={{ color: "white" }} />
            ) : (
              "Log in"
            )}
          </button>
        </div>

        <div className="login_org">
          <p>
            Don't have an account?{" "}
            <span>
              <Link to={"/signup"}>Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </LoginWrapper>
  );
};
const LoginWrapper = styled.div`
  .loginDiv {
    width: 350px;
    height: 400px;
    margin: auto;
    margin-top: 4%;
  }
  .loginDiv h4 {
    margin-left: 20px;
  }

  .img_tag {
    text-align: center;
  }

  .hr_line_login {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .login_inputDiv {
    margin-left: 30px;
  }
  .login_pw {
    padding-left: 15px;
    cursor: pointer;
    width: 300px;
    height: 50px;
    margin-top: 15px;
  }
  #login_input {
    color: #fff;
    background-color: #a435f0;
    border: 1px solid black;
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

  .forgot_pw {
    text-decoration: none;
    margin-left: 120px;
  }
  .diff_acct {
    margin-left: 90px;
  }
  .diff_acct a {
    text-decoration: none;
  }
  .login_org {
    margin-left: 80px;
    margin-top: 20px;
    line-height: 25px;
  }
  .login_org a {
    text-decoration: none;
    font-weight: 600;
  }
  .login_org a:hover {
    color: blue;
  }
  .forgot_pws {
    line-height: 25px;
  }
`;

export default LoginPage;
