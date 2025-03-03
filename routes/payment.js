import express from "express";
import Razorpay from "razorpay";
import crypto, { sign } from "crypto";
import dotenv from "dotenv";
import { log } from "console";
dotenv.config();
const router = express.Router();

let razorpayInstance = new Razorpay({
  key_id: process.env.KEY_ID,
  key_secret: process.env.KEY_SECRET,
});
router.post("/order", (req, res) => {
  try {
    const { amount } = req.body;

    razorpayInstance.orders.create(
      {
        amount: Number(amount * 100),
        currency: "INR",
        // receipt: "receipt#1",
        receipt: crypto.randomBytes(10).toString("hex"),
      },
      function (error, order) {
        if (order) {
          res.status(200).json(order);
        }
        if (error) {
          console.log(error);

          res.status(500).json({ error });
        }
      }
    );
  } catch (error) {
    res.status(500).json({ error: error?.message });
    console.log("2", error);
  }
});
router.post("/verify", async (req, res) => {
  try {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } =
      req.body;

    if (!razorpay_payment_id || !razorpay_order_id || !razorpay_signature) {
      res.status(204).json({ message: "No content" });
    }
    const sign = razorpay_order_id + "|" + razorpay_payment_id;
    // .update(`${razorpay_order_id}|${razorpay_payment_id}`)
    const generatedSignatre = crypto
      .createHmac("sha256", process.env.KEY_SECRET)
      .update(sign.toString())
      .digest("hex");
    if (generatedSignatre === razorpay_signature) {
      res.status(200).json({ message: "Payment  Successful" });
    } else {
      res.status(400).json({ message: "Payment Failure" });
    }
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});
export default router;
