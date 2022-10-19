import React, { useContext } from "react";
import { AuthContext } from "../Context/userContext";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h3>welcome to about {user?.email}</h3>
    </div>
  );
};

export default About;
