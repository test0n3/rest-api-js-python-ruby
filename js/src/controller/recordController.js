const recordService = require("../services/workoutService");

const getAllRecords = (req, res) => {
  const allWorkouts = recordService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};

const getOneRecord = (req, res) => {
  const record = recordService.getOneWorkout();
  res.send("Get an existing record");
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
