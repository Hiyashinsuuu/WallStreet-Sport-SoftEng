import { Router } from "express";
import { adminLogin } from "../controllers/admin.controller";
import { createBooking } from "../controllers/booking.controller";

const router = Router();

router.post("/admin/login", adminLogin);
router.post("/bookings", createBooking);

export default router;
