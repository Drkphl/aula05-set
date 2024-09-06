let nextId = 1;
let criado_em;
let atualizado_em;

const model = (body, id = nextId++) => {
    if (criado_em == "") {
        criado_em = new Date();
    } else {
        if (body.nome != undefined && body.nome != "") {
            atualizado_em = new Date();

            return {
                id,
                nome: body.nome,
                criado_em: criado_em,
                atualizador_em: atualizado_em,
            };
        }
    }
};

module.exports = model;
