const DB = require("./db.json");

const getAllRecords = () => {
  return DB.records;
};

const getOneRecord = (recordId) => {
  const record = DB.records.find((record) => record.id == recordId);
  if (!record) {
    throw {
      status: 404,
      message: `Can't find record with id '${recordId}'`,
    };
  }
  return record;
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
