import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import paymentRoutes from "./routes/payment.js";
dotenv.config();
const app = express();

app.use(express.json());
const allowOrigins = [`${process.env.URL}`];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked by CORS:", origin);
        callback(new Error("Cors Error"));
      }
    },

    credentials: true,
  })
);

app.use("/api/payment", paymentRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "App is running Razorpay" });
});
app.listen(process.env.PORT || 4000, (req, res) => {
  console.log("App is running on PORT", process.env.PORT || 4000);
});
