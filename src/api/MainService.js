import api from "./apiService";

export default {
  listaConfiguracaoLogin: async () => await api.listaConfiguracaoLogin(),
  autentica: async (email, senha) => await api.autentica(email, senha),
  async listaTimezones(token) {
    const ret = await api.listaTimezones(token);
    return ret;
  },
  catchPadrao: (response) => {
    let mensagemErro = "";
    if (response) {
      if (response.erros) {
        let _mensagem = "";
        response.erros.forEach((el) => {
          _mensagem += el.mensagem;
        });
        mensagemErro = _mensagem;
      } else if (response.msg) mensagemErro = response.msg ?? response;
      else mensagemErro = response.message ?? response;
    } else {
      mensagemErro = "Mensagem não identificada";
    }
    return mensagemErro;
  },
};
