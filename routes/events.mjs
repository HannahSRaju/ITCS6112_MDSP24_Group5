import { Router } from "express";
import {
	addEvent,
	deleteEvent,
	editEvent,
	moveEventToTrash,
	getAllEvents,
	getEvent,
	restoreEventFromTrash,
} from "../controllers/events.mjs";
import auth from "../middleware/auth.mjs";

import { catererData } from "../src/caterers.mjs";

const router = Router();

router.use(auth);
router.get("/", getAllEvents);
router.get("/:id", getEvent);
router.post("/add", addEvent);
router.put("/edit/:id", editEvent);
router.put("/trash/:id", moveEventToTrash);
router.put("/restore/:id", restoreEventFromTrash);
router.delete("/delete/:id", deleteEvent);

router.get(catererData);
router.put(catererData);
console.log('catererData: ', catererData); 

export default router;
