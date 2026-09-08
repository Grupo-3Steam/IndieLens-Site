
let listaNumeros = ["1","2","3","4","5","6","7","8","9","0"];
let listaEspeciais = ["!","@","#","$","%","¨","&","*","(",")","_","-","=","+","{","[","´","`","]","}",`"`,"^","~","|",`\``,",","<",">",":",";","?","/","°","¹","²","³","£","¢","¬","§","ª","º"];

function cadastrar(){
    let nome = nome_input.value;
    let email = email_input.value;
    let senha = senha_input.value;
    let senhaConfirmacao = confirmacao_senha_input.value;

    console.log(validarEmail(email));
    console.log(validarSenha(senha));

}

function validarNulo(input){
    if(input.length <= 0){
        return true;
    }

    return false;
}

function validarSenha(senha){
    if(validarNulo(senha)){return false;}

    let maiuscula = false, minuscula = false, especial = false, numero = false;

    //percorre cada letra da senha
    for (let i = 0; i < senha.length; i++) {
        let char = senha[i];

        //tem algum dos especiais?
        if (listaEspeciais.indexOf(char) != -1) {
            especial = true;
        }

        //tem numero?
        if(listaNumeros.indexOf(char) != -1){
            numero = true;
        }

        //verifica igualdade em letras
        if (char.toUpperCase() !== char.toLowerCase()) {
            if(char.toUpperCase() == char){
                maiuscula = true;
            }

            if(char.toLowerCase() == char){
                minuscula = true;
            }
        }

        if(maiuscula && minuscula && especial && numero){
            return true;
        }
    }

    //TODO fazer retorno baseado em o que está faltando
    //se bem que podemos dar uma tabela para o usuario validar o que está de errado né
    return false;
}

function validarEmail(email){
    if(validarNulo(email)){return false;}

    let especial = false, pontoDepois = false;

    if (email.indexOf("@") != -1) {
        especial = true;
        let posicaoPonto = email.indexOf(".", email.indexOf("@"));
        if(posicaoPonto != -1){
            pontoDepois = true;
        }
    }  

    if (especial && pontoDepois){
        return true
    } else {
        // TODO returno onde está o erro
    }

    return false;
}