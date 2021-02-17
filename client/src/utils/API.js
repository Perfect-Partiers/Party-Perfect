import axios from "axios"

export default {

    getParties: function () {
        return axios.get("/api/parties");
    },
    createParty: function () {
        return axios.post("/api/parties")
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