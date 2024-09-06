const express = require("express");

const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server running in ${port} port`);
});

const Jogo_router = require("./routes/Jogo.js");
const Genero_router = require("./routes/Genero.js");
const Estudio_router = require("./routes/Estudio.js");
const Publicadora_router = require("./routes/Publicadora.js");

app.use("/Genero", Genero_router);
app.use("/Jogo", Jogo_router);
app.use("/Estudio", Estudio_router);
app.use("/Publicadora", Publicadora_router);