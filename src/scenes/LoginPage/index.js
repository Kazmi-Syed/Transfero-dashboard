/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import teste from "../../services/mainServices"
import "./styles.css";
import img1 from "./components/img/Transferobranco.png";
import { useState } from "react";


const LoginPage = () => {
  
  console.log('LoginPage')
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.email === "" || form.password === "") {
      return;
    }
    teste.getConfiguration()
      .then((response) => response.json())
      .catch((error) =>  alert(" Not possible login in the system "))
      .console.log(form.email, form.password);
  };

    
  return (
    <div id="login">
      <div className="container">
        <div className="login-box fadeInDown">
          <div className="logoLogin">
            <img src={img1} id="logo" width="200px" height="40px" />
          </div>
          <h4 className="fadeIn first"> Use yours credentials to access</h4>

          <form action="" onSubmit={handleSubmit}>
            <div className="user-box fadeIn second">
              <input
                type="text"
                value="sergio.wellington@transfero.com"
                required=""
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <label htmlFor="">Email</label>
            </div>
            <div className="user-box fadeIn third">
              <input
                type="password"
                value="Tony@123"
                required=""
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <label htmlFor="">Password</label>
            </div>
            <button className="fadeIn fourth" type="submit">
              Login
            </button>
            <h6>© 2022 Transfero, Inc. All Rights Reserved.</h6>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
