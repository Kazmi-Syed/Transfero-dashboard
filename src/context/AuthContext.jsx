import { createContext, useState } from 'react';
import env from '../config/env';
import api from '../http/api';

const tokenSistema = env.TOKEN_SISTEMA;

const userKey = 'user';
const INITIAL_USER_STATE = JSON.parse(localStorage.getItem(userKey) || '{}');

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(INITIAL_USER_STATE);

  const login = async (email, senha) => {
    const body = {
      tokenSistema,
      chave: email,
      senha: senha,
      comPermissoes: false
    };

    const url = '/api/login/autentica';

    await api
      .put(url, body)
      .then(({ data }) => {
        api.defaults.headers.common.authorization = `Bearer ${data.token}`;
        localStorage.setItem(userKey, JSON.stringify(data));
        setUser(data);
      })
      .catch(() => {
        alert('Wrong email or password'); // TODO: Replace this for a custom alert or toaster
      });
  };

  const logout = async () => {
    api.defaults.headers.common.authorization = null;
    localStorage.setItem(userKey, '{}');
    setUser({});
  };

  const isAuthenticated =
    !user.bloqueado &&
    !!user.nomeUsuario &&
    !user.senhaExpirada &&
    !!user.token &&
    !!user.usuarioGuid &&
    !!user.usuarioId;

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        isAuthenticated,
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
