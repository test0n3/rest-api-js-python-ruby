const Record = require("../database/Record");

const getAllRecords = () => {
  const allRecords = Record.getAllRecords();
  return allRecords;
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
