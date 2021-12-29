import React, { Fragment, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import { Suger } from "react-preloaders";
import Helmet from "react-helmet";
import registerUser from "../../services/userServic";

const Register = ({ history }) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [policy, setPolicy] = useState("");
  const [loading, setLoading] = useState("");
  const [, forceUpdate] = useState("");

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "this field is required",
        min: "It shouldn't be less than 5 words",
        email: "The email was not entered correctly",
      },
      element: (message) => <div style={{ color: "red" }}>{message}</div>,
    })
  );

  const rest = () => {
    setFullname("");
    setEmail("");
    setPassword("");
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    const user = {
      fullname,
      email,
      password,
    };
    try {
      if (validator.current.allValid()) {
        setLoading(true);
        const { status } = await registerUser(user);
        if (status === 201) {
          toast.success("User created successfully.", {
            potion: "top-right",
            closeOneClick: true,
          });
          setLoading(false);
          history.pushState("/login");
          rest();
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      toast.error("There was a problem.", {
        position: "top-right",
        closeOneClick: true,
      });
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Helmet>
        <title>Sign Up</title>
      </Helmet>
      {loading ? (
        <Suger time={0} color="fc03d7" customLoading={loading} />
      ) : null}
      <form onSubmit={handelSubmit}>
        <div className="countainertwo">
          <div className="login-content">
            <div className="texts">
              <NavLink
                className="sign-in-text"
                to="/Login"
                activeStyle={{ color: "#59ab6e" }}
              >
                Sign in
              </NavLink>
              <NavLink to="/Register" activeStyle={{ color: "#59ab6e" }}>
                Sign up
              </NavLink>
            </div>
            <div className="login-icon">
              <img src="./img/apple-icon.png" alt="" />
            </div>
            <div className="name">
              <input
                placeholder="First Name"
                name="fullname"
                type="text"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                  validator.current.showMessageFor("fullname");
                }}
              />
              {validator.current.message(
                "fullname",
                fullname,
                "required|min:5"
              )}
              <input placeholder="Last Name" type="text" />
            </div>
            <div>
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validator.current.showMessageFor("email");
                }}
              />
              {validator.current.message("email", email, "required|email")}
            </div>
            <div className="pass">
              <input
                placeholder="Password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validator.current.showMessageFor("password");
                }}
              />
              {validator.current.message(
                "password",
                password,
                "required|min:5"
              )}
              <input placeholder="Confirm Password" type="password" />
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="chackbox"
                value={policy}
                oneChange={(e) => {
                  setPolicy(e.taget.value);
                  validator.current.showMessageFor("policy");
                }}
              />
              {validator.current.message("policy", policy, "required")}
              &nbsp;I accept the&nbsp;
              <a href="#">Terms of Us</a>&nbsp;&&nbsp;
              <a href="#">Privacy Policy</a>
            </div>
            <div>
              <button className="button-styletwo" type="submit">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};
export default Register;
