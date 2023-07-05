import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AccessDeniedPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("ahahah")
    const redirectTimeout = setTimeout(() => {
      navigate("/profile");
    }, 5000);

    return () => {
      clearTimeout(redirectTimeout);
    };
  }, [navigate]);

  return (
    <div>
      <h1>Access Denied</h1>
      <p>You are not authorized to access this page.</p>
      <p>You will be redirected to the profile page in 5 seconds.</p>
    </div>
  );
};

export default AccessDeniedPage;
