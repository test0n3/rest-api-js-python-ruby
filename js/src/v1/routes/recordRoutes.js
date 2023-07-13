const express = require("express");
const recordController = require("../../controller/recordController");
const router = express.Router();

router.get("/", recordController.getAllRecords);

router.get("/:recordId", recordController.getOneRecord);

router.put("/", recordController.createNewRecord);

router.patch("/:recordId", recordController.updateOneRecord);

router.delete("/:recordId", recordController.deleteOneRecord);

module.exports = router;
