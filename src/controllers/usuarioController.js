var usuarioModel = require("../models/usuarioModel");

function cadastrarUsuario(req, res){
    let nome = req.body.nomeServer;
    let email = req.body.emailServer;
    let tipo = req.body.tipoServer;
    let senha = req.body.senhaServer;

    usuarioModel.cadastrar(nome,email,tipo,senha)
        .then(
            function(resultado) {
                res.json(resultado);
            }
        ).catch(
            function(erro){
                console.log(erro);
                console.log(`Erro no cadastro: ${erro.sqlMessage}`);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = { cadastrarUsuario }