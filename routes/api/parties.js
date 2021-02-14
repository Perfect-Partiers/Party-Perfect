const router = require("express").Router();
const partyController = require("../../controllers/partyController");

// Matches with "/api/parties"
router
  .route("/")
  .get(partyController.findAllParties)
  .post(partyController.createParty);

// Matches with "/api/parties/:id"
router
  .route("/:id")
  .get(partyController.findPartyById)
  .put(partyController.updateParty)
  .delete(partyController.removeParty);

module.exports = router;
