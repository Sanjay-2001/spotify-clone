import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("this is song routes");
});

export default router;
