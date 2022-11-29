import { useEffect } from 'react';
import { createContext, useCallback, useState } from 'react';
import env from '../config/env';
import api from '../http/api';

const tokenSistema = env.TOKEN_SISTEMA;

const wrongCredentialsMessage = 'Wrong email or password';

const userKey = 'user';
const INITIAL_USER_STATE = JSON.parse(localStorage.getItem(userKey) || '{}');

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(INITIAL_USER_STATE);

  const isAuthenticated = useCallback((userData) => {
    const notExpired = userData.expiresIn
      ? Date.now() < new Date(userData.expiresIn).getTime()
      : true;

    return (
      !userData.bloqueado &&
      !!userData.nomeUsuario &&
      !userData.senhaExpirada &&
      !!userData.token &&
      !!userData.usuarioGuid &&
      !!userData.usuarioId &&
      !!notExpired
    );
  }, []);

  const setBearerToken = (token) => {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
  };

  const login = async (email, senha) => {
    const body = {
      tokenSistema,
      chave: email,
      senha: senha,
      comPermissoes: false
    };

    const url = '/api/login/autentica';

    await api.put(url, body).then(({ data }) => {
      if (!isAuthenticated(data)) {
        throw new Error(wrongCredentialsMessage);
      }

      // ! 24 hours for login expiration
      data.expiresIn = new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString();

      setBearerToken(data.token);
      localStorage.setItem(userKey, JSON.stringify(data));
      setUser(data);
    });
  };

  const logout = () => {
    api.defaults.headers.common.authorization = null;
    localStorage.setItem(userKey, '{}');
    setUser({});
  };

  useEffect(() => {
    if (!isAuthenticated(INITIAL_USER_STATE)) {
      logout();
      return;
    }
    setBearerToken(INITIAL_USER_STATE.token);
    setUser(INITIAL_USER_STATE);
  }, [INITIAL_USER_STATE]);

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAuthenticated: isAuthenticated(user),
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
