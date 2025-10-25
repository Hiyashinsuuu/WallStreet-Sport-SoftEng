import { z } from "zod";

// ✅ Admin login validation
export const adminLoginSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// ✅ Booking validation
export const bookingSchema = z.object({
  name: z.string().min(2, "Customer name required"),
  email: z.string().email("Invalid email format"),
  slotId: z.number(),
  date: z.string(), // or z.date() depending on your frontend
  paymentMethod: z.enum(["gcash"]),
  notes: z.string().optional(), 
});
