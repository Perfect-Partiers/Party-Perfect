const router = require("express").Router();
const partyController = require("../../controllers/partyController");

// matches with "/api/parties/all/:id"
router.route("/all/:id").get(partyController.findAllParties)
 // :id is the firebase uid from the front end (currentUser.uid); // :id is the firebase uid from the front end (currentUser.uid)

// matches with "/api/parties/:id"
router
  .route("/:id")
  .get(partyController.findPartyById) // :id is the party _id
  .post(partyController.createParty) // :id is the firebase uid from the front end (currentUser.uid)
  .put(partyController.updateParty) // :id is the party _id
  .delete(partyController.removeParty); // :id is the party _id

// matches with "/api/parties/mapbox/:id"
router.route("/mapbox/:id").get(partyController.getMapBoxData); // :id is the party _id

module.exports = router;
