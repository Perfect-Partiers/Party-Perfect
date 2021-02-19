import axios from "axios";

export default {

    getParties: function () {
        return axios.get("/api/parties");
    },
    createParty: function (formObject) {
        return axios.post("/api/parties/" + formObject.creator, formObject)
    },
    getParty: function (id) {
        return axios.get("/api/parties/" + id);
    },
    getPartyMap: function (id) {
        return axios.get("/api/parties/mapbox/" + id)
    }
    // updateParty: function () {
    //     return axios.put("/api/parties/" + id);
    // },
    // deleteParty: function () {
    //     return axios.delete("/api/parties/" + id);
    // },
}

