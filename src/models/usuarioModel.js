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

function autenticar (email, senha){
    console.log(`
        Realizando validação de login:
        Email: ${email},
        Senha: ${senha}
    `)

    let instrucaoSQL = `SELECT id_usuario,id_perfil,nome,email,senha FROM usuario WHERE email = "${email}" AND senha = "${senha}";`;
    return database.executar(instrucaoSQL);
}

module.exports = {
    cadastrar,
    autenticar
}