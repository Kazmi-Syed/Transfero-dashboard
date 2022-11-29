/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useEffect } from 'react';
import './styles.css';
import img1 from './components/img/Transferobranco.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const wrongCredentialsMessage = 'Wrong email or password';

const LoginPage = () => {
  const { isAuthenticated, login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: '',
    password: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.email === '' || form.password === '') {
      return;
    }

    await login(form.email, form.password)
      .then(() => {
        navigate('/');
      })
      .catch(() => {
        alert(wrongCredentialsMessage); // TODO: Replace this for a custom alert or toaster
      });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, []);

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
