const express = require("express");
const router = express.Router();

const carreierController = require("../controllers/carreier.controllers");

/* ROUTES */

router.post("/", carreierController.createCarreier);
router.get("/", carreierController.getAllCarreiers);
router.get("/:id", carreierController.getCarreierById);
router.put("/:id", carreierController.updateCarreier);
router.delete("/:id", carreierController.deleteCarreier);
router.patch("/toggle/:id", carreierController.toggleStatus);

module.exports = router;