import axios from "axios";

export default {
<<<<<<< HEAD
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
    console.log(userData)
    return axios.post("/api/users/signup", userData);
  },
  getMapBoxData: function (id) {
    return axios.get("/api/parties/mapbox/" + id);
  },
>>>>>>> b3d9a207191097d89fdc5282c580a98d2db0d41f
};
