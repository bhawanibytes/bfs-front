const express = require("express");
const {
  register,
  login,
  login2,
  verifyLogin,
  verifyLogin2,
  verifyRegister,
} = require("../controllers/userController");

const router = express.Router();

router.post("/register", login2);
router.post("/verify-register", verifyRegister);
router.post("/login", verifyLogin2);
router.post("/verify-login", verifyLogin);

module.exports = router;
