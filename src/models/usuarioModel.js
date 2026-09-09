var database = require("../database/config");

function cadastrar (nome, email, perfil, senha) {
    console.log(`
        Realizando cadastro de usuário: 
        Nome: ${nome}, 
        Email: ${email}, 
        Tipo de Perfil: ${perfil},
        Senha: ${senha}
    `);

    let instrucaoSQL = `INSERT INTO usuario (id_perfil, nome, email, senha) VALUES (${perfil}, "${nome}", "${email}", "${senha}");`;
    return database.executar(instrucaoSQL);
}

module.exports = {
    cadastrar
}