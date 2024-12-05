"use client";
import Navbar from "../_component/Navigation";
import Footer from "../_component/commenComponent/Footer";
import Login from "../_component/Login";
import SignUp from "../_component/SignUp";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Ecommerce = () => {
  const [login, setLogin] = useState(true);

  return (
    <div>
      <Navbar />
      {login ? <Login /> : <SignUp />}
      <div className="d-flex justify-content-center py-3">
        <button onClick={() => setLogin(!login)} className="btn btn-primary">
          {login
            ? "If you haven't an account yet, Sign up"
            : "If you have an account already, Log in"}
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Ecommerce;
