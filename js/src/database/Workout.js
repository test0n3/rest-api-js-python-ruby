const DB = require("./db.json");

const getAllWorkouts = () => {
  return DB.workouts;
};

const getOneWorkout = (workoutId) => {
  const workout = DB.workouts.find((workout) => workoutId == workout.id);
  if (!workout) {
    throw {
      status: 400,
      message: `Can't find workout with the id '${workoutId}'`,
    };
  }
  return workout;
};

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
