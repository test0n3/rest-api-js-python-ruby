const recordService = require("../services/recordService");

const getAllRecords = (req, res) => {
  try {
    const allRecords = recordService.getAllRecords();
    res.send({ status: "OK", data: allRecords });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getOneRecord = (req, res) => {
  const {
    params: { recordId },
  } = req;
  if (!recordId) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter 'recordId' can not be empty" },
    });
  }

  try {
    const record = recordService.getOneRecord(recordId);
    res.send({ status: "OK", data: record });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewRecord = (req, res) => {
  const createdRecord = recordService.createNewWorkout();
  res.send("Create a new record");
};

const updateOneRecord = (req, res) => {
  const updatedRecord = recordService.updateOneWorkout();
  res.send("Update an existing record");
};

const deleteOneRecord = (req, res) => {
  recordService.deleteOneWorkout();
  res.send("Delete an existing record");
};

module.exports = {
  getAllRecords,
  getOneRecord,
  createNewRecord,
  updateOneRecord,
  deleteOneRecord,
};
