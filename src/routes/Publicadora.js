const express = require("express");
const Publicadora_controller = require("../controllers/Publicadora.js");
const router = express.Router();

app.use(express.json());
app.use(toUpperCaseMiddleware);

router.get("/", (req, res) => {
    res.json(Publicadora_controller.index());
});

router.get("/:id", (req, res) => {
    res.json(Publicadora_controller.show(req.params.id));
});

router.post("/", (req, res) => {
    const code = Publicadora_controller.store(req.body);
    res.status(code).json();
});

router.put("/:id", (req, res) => {
    const code = Publicadora_controller.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete("/:id", (req, res) => {
    Publicadora_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;