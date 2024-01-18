import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/sign-up");
  };

  return (
    <>
      <h1>Dashboard</h1>{" "}
      <Button
        className="w-100"
        type="button"
        style={{ backgroundColor: "green" }}
        onClick={handleSignUpClick}
      >
        Be part of our community
      </Button>
    </>
  );
};

export default Dashboard;
