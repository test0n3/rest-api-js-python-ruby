const Member = require("../database/Member");

const getAllMembers = () => {
  const allMembers = Member.getAllMembers();
  return allMembers;
};

const getOneMember = () => {};

const createNewMember = () => {};

const updateOneMember = () => {};

const deleteOneMember = () => {};

module.exports = {
  getAllMembers,
  getOneMember,
  createNewMember,
  updateOneMember,
  deleteOneMember,
};
