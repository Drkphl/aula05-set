let nextId = 1;
let criado_em;
let atualizado_em;

const model = (body, id = nextId++) => {

    if(criado_em == ""){
    criado_em = new Date(now)
    
}else{
    if (body.nome != undefined) {
        atualizado_em = new Date(now)

        return {
            id,
            nome: body.nome,
            criado_em: criado_em,
            atualizador_em: atualizado_em,
        };
    }
}};

module.exports = model;