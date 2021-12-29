import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <form>
        <div className="countainer">
          <div className="login-content">
            <div className="texts">
              <NavLink
                className="sign-in-text"
                to="/login"
                activeStyle={{ color: "#59ab6e" }}
              >
                Sign in
              </NavLink>
              <NavLink to="/Register" activeStyle={{ color: "#59ab6e" }}>
                Sign up
              </NavLink>
            </div>
            <div className="login-icon">
              <img src="./img/apple-icon.png" alt="apple icon" />
            </div>
            <div>
              <input className="Emailone" placeholder="Email" type="email" />
            </div>
            <div>
              <input placeholder="Password" type="password" />
            </div>
            <div className="checkbox-one">
              <input type="checkbox" /> Remember me?
            </div>
            <div>
              <button className="button-styleone" type="submit">
                Sign in
              </button>
            </div>
            <div className="solo-border"></div>
            <div className="forgetpass">
              <a href="#">Forget Password?</a>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
export default Login;
