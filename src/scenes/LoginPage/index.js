/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./styles.css";
import img1 from "./components/img/Transferobranco.png";
import { useRef, useState, useEffect } from 'react';
import {  useNavigate, useLocation } from 'react-router-dom';
// import axios from "axios";
import useAuth from '../hooks/useAuth';


const LoginPage = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('sergio.wellington@transfero.com');
  const [pwd, setPwd] = useState('Tony@123');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          var _erro = false;
          const resp = await main.autentica(user, pwd).catch((err) => {
              _erro = true;
              alert(main.catchPadrao(err))
            });
      
          if (_erro) return;
          const accessToken = resp.data.access_token
          console.log(JSON.stringify(resp?.data));
          //console.log(JSON.stringify(response));
          //const roles = response?.data?.roles;
          const roles = [2001, 1984, 5150]
          setAuth({ user, pwd, roles, accessToken });
          setUser('');
          setPwd('');
          navigate(from, { replace: true });
      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 400) {
              setErrMsg('Missing Username or Password');
          } else if (err.response?.status === 401) {
              setErrMsg('Unauthorized');
          } else {
              setErrMsg('Login Failed');
          }
          errRef.current.focus();
      }
  }
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
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
              />
              <label htmlFor="">Email</label>
            </div>
            <div className="user-box fadeIn third">
              <input
                 type="password"
                 id="password"
                 onChange={(e) => setPwd(e.target.value)}
                 value={pwd}
                 required
              />
              <label htmlFor="">Password</label>
            </div>
            <button className="fadeIn fourth" type="submit">
              Login
            </button>
          </form>
          <h6>© 2022 Transfero, Inc. All Rights Reserved.</h6>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
