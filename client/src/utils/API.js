import axios from "axios"

export default {

    getParties: function () {
        return axios.get("/api/parties");
    },
    createParty: function () {
        return axios.post("/api/parties/5C9Z1q5LFlR8ehaw5Obf2LQx7f72")
    },
    // getParty: function () {
    //     return axios.get("/api/parties/" + id);
    // },
    // updateParty: function () {
    //     return axios.put("/api/parties/" + id);
    // },
    // deleteParty: function () {
    //     return axios.delete("/api/parties/" + id);
    // },
}