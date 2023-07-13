const DB = require("./db.json");

const getAllMembers = () => {
  return DB.members;
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
