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

function autenticar(req,res){
    let email = req.body.emailServer;
    let senha = req.body.senhaServer;

    usuarioModel.autenticar(email, senha)
        .then(
            function(resultado){
                console.log(`Resultados Encontrados: ${resultado.length}`);
                console.log(`Resultados: ${JSON.stringify(resultado)}`);

                if(resultado.length == 1){
                    res.json(
                        {
                            id : resultado[0].id_usuario,
                            perfil : resultado[0].id_perfil,
                            nome : resultado[0].nome,
                            email : resultado[0].email
                        }
                    );
                    
                } else if (resultado.length == 0) {
                    res.status(403).send(`Email e/ou senha inválido(s)`);
                } else {
                    res.status(403).send(`Mais de um usuário com o mesmo login e senha`);
                }
            }
        ).catch(
            function(erro){
                console.log(erro);
                console.log("Erro ao realizar Login: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

module.exports = { cadastrarUsuario, autenticar}