import axios from "axios";

// axios.defaults.withCredentials = true;
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
var username = 'fictionapps1@gmail.com';
var password = 'e1a9048c19c1601a';
var basicAuth = 'Basic ' + btoa(username + ':' + password);

axios.interceptors.request.use((config) => {
  try {
    config.headers.Authorization = `${basicAuth}`;
  } catch (error) {
    config.headers.Authorization = `${basicAuth}`;
  }
  config.headers.Accept = "application/json";
  config.headers["Content-Type"] = "application/json";
  return config;
});

