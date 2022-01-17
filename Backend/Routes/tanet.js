const express = require("express");
// const {
//   createManagment,
//   getAllManagment,
//   updateManagement,
//   deleteManagement,
// } = require("../Controller/management");

const {
  createTanet,
  getAllTanets,
  DeleteTanet,
} = require("../Controller/tenet");

const router = express.Router();

router.post("/tanet/create", createTanet);
router.get("/tanet", getAllTanets);
// router.put("/management/:id", updateManagement);
router.delete("/tanet/:id", DeleteTanet);

module.exports = router;
