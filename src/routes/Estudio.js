const express = require("express");
const Estudio_controller = require("../controllers/Estudio.js");
const router = express.Router();

router.get("/", (req, res) => {
    res.json(Estudio_controller.index());
});

router.get("/:id", (req, res) => {
    res.json(Estudio_controller.show(req.params.id));
});

router.post("/", (req, res) => {
    const code = Estudio_controller.store(req.body);
    res.status(code).json();
});

router.put("/:id", (req, res) => {
    const code = Estudio_controller.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete("/:id", (req, res) => {
    Estudio_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;