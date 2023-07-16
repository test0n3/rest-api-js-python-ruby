const memberService = require("../services/memberService");

const getAllMembers = (req, res) => {
  const allMembers = memberService.getAllMembers();
  res.send({ status: "OK", data: allMembers });
};

const getOneMember = (req, res) => {
  const {
    params: { memberId },
  } = req;
  if (!memberId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter 'memberId' can not be empty" },
    });
  }

  try {
    const member = memberService.getOneMember(memberId);
    res.send({ status: "OK", data: member });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
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
