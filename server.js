import mongoose from "mongoose";
import app from "./app.js";

const mong =
  "mongodb+srv://qwe:r1T6QXqsoBOdvv3j@cluster0.tsxivj7.mongodb.net/db-contacts?";

mongoose
  .connect(mong)
  .then(() => {
    app.listen(3002, () => {
      console.log("Database connection successful");
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
