import React, { Component } from "react";
// import { Link } from 'react-router-dom';

class Register extends Component {
  
  render() {
    return (
      <div className="register" style={{ marginTop: "-8%" }}>
        <div className="tc  white center br3 ba  b--black-10 mv4 w-100 w-50-m w-100-l mw6 shadow-5 center sec_htmlForm">
          <legend className="tc f1 fw6 ph0 mh0 white center">Register</legend>
          <br />
          <label htmlFor="marque_voiture" >Nom : </label>
          <input
            className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2"
            style={{marginleft:"20px"}}
            type="text"
            id="nom"
            name="nom"
          />
          <br></br>
          <label htmlFor="marque_voiture" style={{marginLeft:'-23px'}}>Prenom : </label>
          <input
            className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2"
            type="text"
            id="prenom"
            name="prenom"
          />
          <br></br>

          <label htmlFor="marque_voiture" style={{marginLeft:'-7px'}}>Email : </label>
          <input
            className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2"
            type="text"
            id="email"
            name="email"
          />
          <br></br>

          <label htmlFor="date" style={{marginLeft:'-100px'}}>Date de naissance : </label>
          <input
            className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2"
            type="date"
            id="date"
            name="date"
          />
          <br></br>
          <label htmlFor="marque_voiture" style={{marginLeft:'-38px'}}>Password : </label>
          <input
            className="pa1 input-reset ba bg-transparent hover-bg-black hover-white w-40 b--white mb2"
            type="password"
            id="password"
            name="password"
          />
          
          {/* <Link to='sign-up'> */}
          <div className="">
            <input
              className="mv2 sat b ph3 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib white"
              style={{ margin: "20px 0 20px 0" }}
              type="submit"
              onClick={()=>{this.props.test(1)}}
              value="Register"
            />
          </div>
          {/* </Link> */}
        </div>
      </div>
    );
  }
}
export default Register;
