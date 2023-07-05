import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUp from "../components/pages/SignUp";
import Register from "../components/pages/Register";
function Home() {
  const [toggleRegistration, setToggleRegistration] = useState(false);
 

  return (
    <div className="bg-white z-50 absolute left-0 top-0 w-full h-full m-0 p-0">
      <button onClick={() => setToggleRegistration((current) => !current)}>
        {toggleRegistration ? <p>Se connecter</p> : <p>s'inscrire</p>}
      </button>
      {toggleRegistration ? (
      <Register callback={()=>setToggleRegistration(false)} />
      ) : (
        <SignUp callback={()=>setToggleRegistration(true)}/>
      )}
    </div>
  );
}

export default Home;
