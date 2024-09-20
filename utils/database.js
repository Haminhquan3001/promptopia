import mongoose from "mongoose";

let isConnected = false; //track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    return;
  } else {
    try {
      await mongoose.connect(process.env.MONGO_DB_URI, {
        dbName: "share_prompt",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      isConnected = true;
    } catch (error) {
      console.log("error is: ", error);
    }
  }
};
