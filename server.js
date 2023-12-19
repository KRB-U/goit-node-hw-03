import mongoose from "mongoose";
import app from "./app.js";
import { mong } from "./config.js";

// const mong =
//   "mongodb+srv://qwe:r1T6QXqsoBOdvv3j@cluster0.tsxivj7.mongodb.net/db-contacts?";

// const mong =
//   "mongodb+srv://user-test:xzHmucx8gbL7wmC7@cluster0.tkmkwho.mongodb.net/db-contacts?retryWrites=true&w=majority";

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
