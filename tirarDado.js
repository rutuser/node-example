module.exports = {
    tirarDados
}

function tirarDados(numCaras){
    return (Math.floor(Math.random()*numCaras)+1);
}

