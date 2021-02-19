import axios from "axios";

export default {
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
};
