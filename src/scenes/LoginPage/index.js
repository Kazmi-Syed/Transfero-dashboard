/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./styles.css";
import img1 from "./components/img/Transferobranco.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
const myNavegate = useNavigate()
   
  const [form, setForm] = useState({

    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.email === "" || form.password === "") {
      return;
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "application/json",
      },
    };
    const baseUrl = "http://localhost:3000/api/login";
   
    fetch(baseUrl, options, myNavegate)
      .then((response) => response.json())
      .then((data) =>  {   myNavegate("/") })
      // segunda data sera redirecioanmento para o dashbord após o login !
      .catch((error) => console.log("not possible login in the system"))
      .console.log(form.email, form.password);
  };
  return (
    <div id="login">
      <div className="container">
        <div className="login-box fadeInDown">
          <div className="logoLogin">
            <img src={img1} id="logo" width="200px" height="40px" />
          </div>
          <h4 className="fadeIn first"> Use your credentials to access</h4>

          <form action="" onSubmit={handleSubmit}>
            <div className="user-box fadeIn second">
              <input
                type="text"
                name=""
                required=""
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <label htmlFor="">Email</label>
            </div>
            <div className="user-box fadeIn third">
              <input
                type="password"
                name=""
                required=""
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <label htmlFor="">Password</label>
            </div>
            <button className="fadeIn fourth" type="submit">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
