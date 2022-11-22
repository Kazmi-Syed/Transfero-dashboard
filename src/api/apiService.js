import axios from "axios";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
//axios.defaults.headers.common["Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS"]
//axios.defaults.headers.common["Access-Control-Allow-Headers", "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"]

const http = axios.create({
  baseURL: "https://sso-lastec.azurewebsites.net/api/login/autentica",
});

http.interceptors.request.use(function (config) {
  const d = new Date().toUTCString();
  config.headers.dataEnvio = d;
  return config;
});

http.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    var _erros = "";
    if (error.response) {
      if (error.response.status === 400) {
        if (error.response.data.detail) {
          _erros = {
            erros: [
              {
                chave: "000.0000",
                mensagem: error.response.data.detail,
              },
            ],
          };
        } else _erros = error.response.data;
      } else if (error.response.status === 401) {
        const originalRequest = error.config;
        if (originalRequest._retry) {
          _erros = {
            erros: [
              {
                chave: "000.0401",
                mensagem: "Url não autorizada",
              },
            ],
          };
        }
      } else if (error.response.status === 404) {
        _erros = {
          erros: [
            {
              chave: "000.0404",
              mensagem: "Url não encontrada",
            },
          ],
        };
      } else {
        _erros = {
          erros: [
            {
              chave: "000.0000",
              mensagem: error,
            },
          ],
        };
      }
    } else {
      _erros = {
        erros: [
          {
            chave: "000.0000",
            mensagem: error,
          },
        ],
      };
    }

    return Promise.reject(_erros);
  }
);

export default {
  listaConfiguracaoLogin: async () => {
    return http.get("login/listaConfiguracao");
  },
  autentica: (email, senha) => {
    const params = {
      email: email,
      senha: senha,
    };
    return http.put("login", params);
  },
  listaTimezones: (token) => {
    return http.get("timezones?maximo_registros=0", {
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};
