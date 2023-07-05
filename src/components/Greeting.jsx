import React, { useContext, useEffect, useState } from "react";
import { welcomeMessages } from "../data/speech";
import { UserContext } from "../contexts/UserContext";
import { Typography } from "@mui/material";
import img from "../Component/Images/11_Success-1.jpg"

function Greeting() {
  const { user } = useContext(UserContext);
  const [refresh, setRefresh] = useState(false);
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    if (user) {
      getRandomWelcomeMessage()
    }
  }, [user, refresh]);

  const getRandomWelcomeMessage = () => {
    const randomIndex = Math.floor(Math.random() * welcomeMessages.length);
    const welcomeMessage = welcomeMessages[randomIndex].replace(
      "[USER]",
      user.firstname
    );
    setGreeting(welcomeMessage);
  };

  return (
    user && <main className="flex flex-col p-8 mt-0 items-center justify-center h-screen bg-gray-100">
      <Typography
        variant="h4"
        component="h1"
        className="text-2xl text-gray-700 mb-4"
      >
        Bienvenue, {user.firstname} !
      </Typography>
      <div className="mb-8 mt-8">

      <Typography variant="body1" className="text-lg h-[100px] max-w-3xl text-gray-600">
        {greeting}
      </Typography>
      </div>
      <img className="max-h-[50%]" src={img}></img>
    </main>
  );
}

export default Greeting;
