import React from "react";
import { Footer, Navbar } from "../components";
const Register = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Register</h1>
        <hr />

        <h3>Currently we are not open to new members</h3>
        <h4>
          Please mail us if interested to open account with us at
          flopkartshop@hotmail.com
        </h4>
      </div>
      <Footer />
    </>
  );
};

export default Register;
