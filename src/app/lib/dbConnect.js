import mongoose from "mongoose";
export async function ConnectDB() {
  let isConnected = false;
  if (isConnected) return "DB is alraady Connect";
  try {
    let connect = await mongoose.connect(process.env.MONGODB_URI);
    console.log("DB is Connect Successfully");
    if (connect.connection.readyState == 1) connect = true;
  } catch (error) {
    console.log("error=>",error);
  }
}
