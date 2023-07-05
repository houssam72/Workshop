import React, { Component, useState } from "react";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import AuthService from "../../service/auth-service";

function SignUp({ callback: toRegistration }) {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    AuthService.login(data.email, data.password)
      .then((res) => {
        localStorage.setItem("access_token", res.data.token);
        navigate("/profile");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="sign_in">
      <article
        className="br3   bg-white b--black-10 mv4  min-w-400 mw6 shadow-5 center"
        style={{ marginTop: "80px" }}
      >
        <div className="pa4 black-80">
          <fieldset
            id="sign_up"
            className=" ph0 mh0 "
          >
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
              <legend className=" tc f1 fw6 ph0 mh0">
                Bienvenue sur SMILE 🙂 !
              </legend>
              <div className="mt3 w-full">
                <label className="db fw6 lh-copy f6 " htmlFor="email">
                  Email
                </label>
                <input
                  className="pa2 input-reset border-2 bg-transparent   w-100 "
                  id="email"
                  {...register("email")}
                />
              </div>
              <div className="mv3 w-full">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="b pa2 input-reset border-2 bg-transparent  w-100 "
                  type="password"
                  id="password"
                  {...register("password")}
                />
              </div>
              <input
                className=" sat b ph3 pv2 input-reset ba  bg-blue-300 grow pointer f6 dib"
                type="submit"
                value="Sign in"
              />
            </form>
            <p onClick={toRegistration} className="underline mt-2 hover:cursor-pointer">
              Pas enregistré ? <span className="font-bold ">cliquez ici</span>{" "}
              pour vous inscrire !{" "}
            </p>
          </fieldset>
          {/* </LiZnk> */}
        </div>
      </article>
    </div>
  );
}

export default SignUp;
