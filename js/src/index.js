const express = require("express");
const morgan = require("morgan");
const dotenvSafe = require("dotenv-safe");

dotenvSafe.config({
  path: "./.env",
});
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const v1RecordRouter = require("./v1/routes/recordRoutes");
const v1MemberRouter = require("./v1/routes/memberRoutes");

const app = express();
const loggerMiddleWare = morgan("dev", {
  stream: { write: (message) => console.log(message.trim()) },
});
const PORT = process.env.PORT || 3000;

app.use(loggerMiddleWare);
app.use("/api/v1/workouts", v1WorkoutRouter);
app.use("/api/v1/records", v1RecordRouter);
app.use("/api/v1/members", v1MemberRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});
