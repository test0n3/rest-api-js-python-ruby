const Member = require("../database/Member");

const getAllMembers = () => {
  try {
    const allMembers = Member.getAllMembers();
    return allMembers;
  } catch (error) {
    throw error;
  }
};

const getOneMember = (memberId) => {
  try {
    const member = Member.getOneMember(memberId);
    return member;
  } catch (error) {
    throw error;
  }
};

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
