import { Request, Response } from "express";
import { bookingSchema } from "../utils/validator";

export const createBooking = async (req: Request, res: Response) => {
  try {
    const parsed = bookingSchema.parse(req.body);

    const newBooking = {
      id: Math.floor(Math.random() * 10000),
      name: parsed.name,
      email: parsed.email,
      slotId: parsed.slotId,
      date: parsed.date,
      paymentMethod: parsed.paymentMethod,
      status: "pending",
    };

    return res.status(201).json({
      message: "Booking successfully created (pending payment).",
      booking: newBooking,
    });
  } catch (err: any) {
    if (err.errors) {
      return res.status(400).json({ errors: err.errors });
    }
    return res.status(500).json({ message: "Internal server error." });
  }
};
