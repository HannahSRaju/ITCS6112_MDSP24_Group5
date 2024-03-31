import { Router } from "express";
import {
	addNote,
	addNoteToList,
	archiveNote,
	createList,
	deleteList,
	deleteNote,
	editList,
	editNote,
	getAllLists,
	getAllNotes,
	getListsForNote,
	getNote,
	getNotesInList,
	moveNoteToTrash,
	removeNoteFromList,
	restoreNoteFromTrash,
	unArchiveNote,
} from "../controllers/notes.mjs";
import auth from "../middleware/auth.mjs";

import { catererData } from "../src/caterers.mjs";


const router = Router();

router.use(auth);

// Notes

router.get("/", getAllNotes);
router.get("/", getAllNotes);

// Lists

router.get("/lists", getAllLists);
router.get("/list/:id", getNotesInList);
router.post("/list", createList);
router.put("/list/:id", editList);
router.post("/list/:id", addNoteToList);
router.put("/list/:id", removeNoteFromList);
router.delete("/list/:id", deleteList);

// Note

router.get("/:id", getNote);
router.get("/:id/lists", getListsForNote);
router.post("/add", addNote);
router.put("/edit/:id", editNote);
router.put("/archive/:id", archiveNote);
router.put("/unarchive/:id", unArchiveNote);
router.put("/trash/:id", moveNoteToTrash);
router.put("/restore/:id", restoreNoteFromTrash);
router.delete("/delete/:id", deleteNote);

router.get(catererData);
router.put(catererData);
//console.log('catererData: ', catererData); // This will show the data on bash terminal

export default router;
