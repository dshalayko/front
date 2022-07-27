import axios from "axios";

const $host = axios.create({
  // baseURL: "http://localhost:8080/",
  baseURL: "https://api.snaptrap.online/",
  // process.env.REACT_APP_API_URL,
  headers: { "content-type": "application/json" },
});

const $authHost = axios.create({
  //baseURL: "http://localhost:8080/",
   baseURL: "https://api.snaptrap.online/",
  // process.env.REACT_APP_API_URL,
  headers: { "content-type": "application/json" },
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${sessionStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptor);

export { $host, $authHost };
