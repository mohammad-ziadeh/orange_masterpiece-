import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate(); 

  const goToContact = () => {
    navigate("contact"); 
  };

  return (
    <div>
      Home
      <button onClick={goToContact}>Go to Contact</button>
    </div>
  );
}
