import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("this is album route");
});

export default router;
