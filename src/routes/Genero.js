const express = require("express");
const Genero_controller = require("../controllers/Genero.js");
const router = express.Router();

app.use(express.json());
app.use(toUpperCaseMiddleware);

router.get("/", (req, res) => {
    res.json(Genero_controller.index());
});

router.get("/:id", (req, res) => {
    res.json(Genero_controller.show(req.params.id));
});

router.post("/", (req, res) => {
    const code = Genero_controller.store(req.body);
    res.status(code).json();
});

router.put("/:id", (req, res) => {
    const code = Genero_controller.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete("/:id", (req, res) => {
    Genero_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;