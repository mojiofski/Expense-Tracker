import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI is not defined in .env.local");
}

const connectDB = async () => {
  try {
    // بررسی اتصال قبلی
    if (mongoose.connection.readyState >= 1) {
      console.log("✅ Already connected to MongoDB");
      return;
    }

    // اتصال به MongoDB
    await mongoose.connect(MONGO_URI, {
      dbName: "Expense-Tracker", // نام دیتابیس شما
    });

    console.log("✅ Connected to MongoDB");

    // مدیریت خطا در صورت بروز
    mongoose.connection.on("error", (error) => {
      console.error("❌ MongoDB connection error:", error);
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // برنامه را متوقف می‌کند
  }
};

export default connectDB;
