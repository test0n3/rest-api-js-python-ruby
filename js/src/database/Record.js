const DB = require("./db.json");

const getAllRecords = () => {
  return DB.records;
};

const getOneRecord = () => {};

const createNewRecord = () => {};

const updateOneRecord = () => {};

const deleteOneRecord = () => {};

module.exports = {
  getAllRecords,
  getOneRecord,
  createNewRecord,
  updateOneRecord,
  deleteOneRecord,
};
