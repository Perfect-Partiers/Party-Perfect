const router = require("express").Router();
const userController = require("../../controllers/userController");

// matches with "/api/users"
router.route("/").get(userController.findAllUsers);

// matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findUserById)
  .put(userController.updateUser)
  .delete(userController.removeUser);

// matches with "/api/users/signup"
router.router("/signup").post(userController.createUser);

// matches with "/api/users/login"
router.route("/login").post(userController.loginUser);

module.exports = router;
