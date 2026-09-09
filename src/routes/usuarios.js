var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrarUsuario",
    function(req,res){
        usuarioController.cadastrarUsuario(req,res);
    }
);

module.exports = router;