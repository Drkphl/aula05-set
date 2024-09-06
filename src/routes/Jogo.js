const express = require("express");
const Jogo_controller = require("../controllers/Jogo.js");
const router = express.Router();

router.get("/", (req, res) => {
    res.json(Jogo_controller.index());
});

router.get("/:id", (req, res) => {
    res.json(Jogo_controller.show(req.params.id));
});

router.post("/", (req, res) => {
    const code = Jogo_controller.store(req.body);
    res.status(code).json();
});

router.put("/:id", (req, res) => {
    const code = Jogo_controller.update(req.body, req.params.id);
    res.status(code).json();
});

router.delete("/:id", (req, res) => {
    Jogo_controller.destroy(req.params.id);
    res.json();
});

module.exports = router;