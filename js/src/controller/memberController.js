const memberService = require("../services/memberService");

const getAllMembers = (req, res) => {
  const allMembers = memberService.getAllMembers();
  res.send({ status: "OK", data: allMembers });
};

const getOneMember = (req, res) => {
  const member = memberService.getOneMember();
  res.send("Get an existing member");
};

const createNewMember = (req, res) => {
  const createdMember = memberService.createNewMember();
  res.send("Create a new member");
};

const updateOneMember = (req, res) => {
  const updatedMember = memberService.updateOneMember();
  res.send("Update an existing member");
};

const deleteOneMember = (req, res) => {
  memberService.deleteOneMember();
  res.send("Delete an existing member");
};

module.exports = {
  getAllMembers,
  getOneMember,
  createNewMember,
  updateOneMember,
  deleteOneMember,
};
