const DB = require("./db.json");

const getAllRecords = () => {
  try {
    const records = DB.records;
    return records;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneRecord = (recordId) => {
  try {
    const record = DB.records.find((record) => record.id == recordId);
    if (!record) {
      throw {
        status: 404,
        message: `Can't find record with id '${recordId}'`,
      };
    }
    return record;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
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
