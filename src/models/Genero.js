let nextId = 1;
let criado_em;
let atualizado_em;

const model = (body, id = nextId++) => {
    if (criado_em == "") {
        criado_em = new Date();
    } else {
        if (body.genero != undefined && isNaN(body.genero) && body.genero != "") {
            atualizado_em = new Date();

            return {
                id,
                genero: body.genero,
                criado_em: criado_em,
                atualizador_em: atualizado_em,
            };
        }
    }
};
