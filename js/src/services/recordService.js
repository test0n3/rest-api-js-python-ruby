const Record = require("../database/Record");

const getAllRecords = () => {
  try {
    const allRecords = Record.getAllRecords();
    return allRecords;
  } catch (error) {
    throw error;
  }
};

const getOneRecord = (recordId) => {
  try {
    const record = Record.getOneRecord(recordId);
    return record;
  } catch (error) {
    throw error;
  }
};

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
