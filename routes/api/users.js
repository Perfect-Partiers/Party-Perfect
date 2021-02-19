const router = require("express").Router();
const userController = require("../../controllers/userController");

// matches with "/api/users"
router.route("/").get(userController.findAllUsers);

// matches with "/api/users/:id"
router
  .route("/:id") // :id is the firebase uid from the front end (currentUser.uid)
  .get(userController.findUserById)
  .put(userController.updateUser)
  .delete(userController.removeUser);

// matches with "/api/users/signup"
router.route("/signup").post(userController.createUser);

// matches with "/api/users/check/:id"
router.route("/check/:id").get(userController.checkUser);

module.exports = router;
