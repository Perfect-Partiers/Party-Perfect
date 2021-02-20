import axios from "axios";

export default {
<<<<<<< HEAD
     getParties: function () {
          return axios.get("/api/parties");
     },
     createParty: function () {
          return axios.post("/api/parties");
     },
     createUser: function (user) {
          return axios.post("/api/user", user);
     },
     // getParty: function (id) {
     //     return axios.get("/api/parties/" + id);
     // },
     // updateParty: function () {
     //     return axios.put("/api/parties/" + id);
     // },
     // deleteParty: function () {
     //     return axios.delete("/api/parties/" + id);
     // },
=======
  getParties: function (uid) {
    return axios.get("/api/parties/all/" + uid);
  },
  createParty: function (formObject) {
    return axios.post("/api/parties/" + formObject.creator, formObject);
  },
  getParty: function (id) {
    return axios.get("/api/parties/" + id);
  },
  updateParty: function (id, updates) {
    return axios.put("/api/parties/" + id, updates);
  },
  saveParty: function (id, uid) {
    console.log("====API.saveParty====");
    return axios.put("/api/parties/save/" + id + "/" + uid);
  },
  deleteParty: function (id, uid) {
    return axios.delete("/api/parties/" + id + "/" + uid);
  },
  updateUser: function (uid) {
    console.log("====API.updateUser====");
    console.log(uid);
    return axios.put("/api/users/" + uid);
  },
  checkUser: function (uid) {
    console.log("====API.checkUser====");
    console.log(uid);
    return axios.get("/api/users/check/" + uid);
  },
  createUser: function (userData) {
    console.log("====API.createUser====");
    return axios.post("/api/users/signup", userData);
  },
  getMapBoxData: function (id) {
    return axios.get("/api/parties/mapbox/" + id);
  },
>>>>>>> a5894c8028f243fdb3e91e716d7c93b14496b191
};
