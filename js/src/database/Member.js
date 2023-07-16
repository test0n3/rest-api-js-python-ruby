const DB = require("./db.json");

const getAllMembers = () => {
  try {
    const members = DB.members;
    return members;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneMember = (memberId) => {
  try {
    const member = DB.members.find((member) => member.id == memberId);
    if (!member) {
      throw {
        status: 404,
        message: `Can't find member with the id '${memberId}'`,
      };
    }
    return member;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
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
