const express = require("express");
const memberController = require("../../controller/memberController");
const router = express.Router();

router.get("/", memberController.getAllMembers);

router.get("/:memberId", memberController.getOneMember);

router.put("/", memberController.createNewMember);

router.patch("/:memberId", memberController.updateOneMember);

router.delete("/:memberId", memberController.deleteOneMember);

module.exports = router;
