import AuthService from "../../service/auth-service";
import { useForm } from "react-hook-form";

function Register({ callback: toSignUp }) { 
  const { register, handleSubmit } = useForm(); 

  const handleRegistration = (data) => {
    AuthService.register(data)
    .then(() => (  
        toSignUp()
      ))
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
            <form onSubmit={handleSubmit(handleRegistration)} className="flex flex-col items-center">
              <legend className=" tc f2 ph0 mh0">
                Encore un pas avant d'accéder à la plateforme !
              </legend>
              <div className="mt3 w-full">
                <label htmlFor="firstName" className="db fw6 lh-copy f6 ">
                  First Name
                </label>
                <input
                  className="pa2 input-reset border-2 bg-transparent   w-100 "
                  id="firstName"
                  {...register("firstname")}
                />
              </div>

              <div className="mt3 w-full">
                <label htmlFor="lastName" className="db fw6 lh-copy f6 ">
                  Last Name
                </label>
                <input
                  className="pa2 input-reset border-2 bg-transparent   w-100 "
                  id="lastName"
                  {...register("lastname")}
                />
              </div>
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
              <div className="mt3 w-full">
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
              <div className="mv3 w-full">
                <label className="db fw6 lh-copy f6" htmlFor="dob">
                  Date de naissance
                </label>
                <input
                  className="b pa2 input-reset border-2 bg-transparent  w-100 "
                  type="date"
                  id="dob"
                  {...register("password")}
                />
              </div>
              <input
                className=" sat b ph3 mv3 pv2 input-reset ba  bg-blue-300 grow pointer f6 dib"
                type="submit"
                value="Valider"
              /> 
            </form>
            <p onClick={toSignUp} className="underline mt-2 hover:cursor-pointer">
              Déjà inscrit ? <span className="font-bold ">connectez-vous ici !</span>
            </p>
          </fieldset>
          {/* </LiZnk> */}
        </div>
      </article>
    </div>
      ); 
}
export default Register;
