import { Router } from "express";
import { pessoaRoutes } from "controller/pessoaController";

const router = Router();

router.use("/pessoa", pessoaRoutes);

router.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

export { router };
