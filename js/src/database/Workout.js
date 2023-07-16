const DB = require("./db.json");

const getAllWorkouts = () => {
  try {
    const workouts = DB.workouts;
    // console.log("workouts:", workouts, "size:", workouts.length);
    return workouts;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneWorkout = (workoutId) => {
  try {
    const workout = DB.workouts.find((workout) => workoutId == workout.id);
    if (!workout) {
      throw {
        status: 404,
        message: `Can't find workout with the id '${workoutId}'`,
      };
    }
    return workout;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
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
