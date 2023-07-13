const DB = require("./db.json");

const getAllWorkouts = () => {
  return DB.workouts;
};

const getOneWorkout = () => {};

const CreateNewWorkout = () => {};

const updateOneWorkout = () => {};

const deleteOneWorkout = () => {};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  CreateNewWorkout,
  updateOneWorkout,
  deleteOneWorkout,
};
