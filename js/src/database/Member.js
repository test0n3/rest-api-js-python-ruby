const DB = require("./db.json");

const getAllMembers = () => {
  return DB.members;
};

const getOneMember = (memberId) => {
  const member = DB.members.find((member) => member.id == memberId);
  if (!member) {
    throw {
      status: 404,
      message: `Can't find member with the id '${memberId}'`,
    };
  }
  return member;
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
