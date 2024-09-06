const Publicadora_controller = require("../controllers/Publicadora.js");
const Genero_controller = require("../controllers/Genero.js");
const Estudio_controller = require("../controllers/Estudio.js");

let nextId = 1;
let criado_em;
let atualizado_em;

const validarGenero = (Genero) => Genero.every((Genero) => Genero_controller.show(Genero.Genero_id));

const model = (body, id = nextId++) => {
    if (criado_em == "") {
        criado_em = new Date();
    }

    let dataLancamento = body.lancado_em.toISOString().split("T")[0];

    if (
        body.nome != undefined &&
        body.genero_id != undefined &&
        body.estudio_id != undefined &&
        body.publicadora_id != undefined &&
        body.lancado_em != undefined &&
        body.nome != "" &&
        body.genero_id != "" &&
        body.estudio_id != "" &&
        body.publicadora_id != "" &&
        body.lancado_em != "" &&
        validarGenero(body.Genero)
    ) {
        return {
            id,
            nome: body.nome,
            genero: body.genero_id,
            estudio: body.estudio_id,
            publicadora: body.publicadora_id,
            lançamento: dataLancamento,
            criado_em: criado_em,
            atualizado_em: atualizado_em,
        };
    }
};

module.exports = model;