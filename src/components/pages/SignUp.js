import React, { Component } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="sign_in">
        <article
          className="br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"
          style={{ marginTop: "80px" }}
        >
          <div className="pa4 black-80">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className=" tc f1 fw6 ph0 mh0 white">Sign In</legend>
              <div className="mt3">
                <label
                  className="db fw6 lh-copy f6 white"
                  htmlFor="email-address"
                >
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6 white" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 b--white"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className=" " style={{ marginLeft: "35%" }}>
              {/* <Link to='/Acceuil'> */}
              <input
                className="white sat b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                onClick={()=>{this.props.test(3)}}
              />
              {/* </Link> */}
            </div>
            {/* <Link to='register'> */}
            <div className="lh-copy mt3">
              <p
                className="tc f6 link dim white db pointer"
                path="/services"
                onClick={()=>{this.props.test(2)}}
              >
                Register
              </p>
            </div>
            {/* </LiZnk> */}
          </div>
        </article>
      </div>
    );
  }
}

export default SignUp;
