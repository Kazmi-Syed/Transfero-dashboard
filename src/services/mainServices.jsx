const getConfiguration = async() => {
  const baseUrl = "https://sso-lastec.azurewebsites.net/api/";
  const path = "login/listaConfiguracao?tokenSistema=6bef6bd2-f6f1-11ec-b32c-566fe1410274";

  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
  };

  return await fetch(baseUrl+path, options)
}

export default getConfiguration;