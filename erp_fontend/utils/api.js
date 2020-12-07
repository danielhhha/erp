import axios from "./axios";

export default {
  login: function(data) {
      console.log(axios.baseURL)
    return axios({
      url: "/user/login/",
      method: "post",
      data
    });
  },
  getUserInfo: function(params) {
    return axios({
      url: "/user/info/",
      method: "get",
      params
    });
  }
};
