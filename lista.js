//Exercicio A
const verificaçãoDeSenha = (senha1, senha2) => {
    return senha1 === senha2 ? true : false;
}

console.log(verificaçãoDeSenha("minhaSenha123", "minhaSenha123"));

//Exercicio B
const verificarNota = (nota1, nota2) => {
    return (nota1 > 6 && nota2 > 6) ? true : false;
}
console.log(verificarNota(7, 8));

//Exercicio C
const descobrirTipo = (dados) => {
    return typeof dados;
}

console.log(descobrirTipo(123));
console.log(descobrirTipo("Olá Mundo"));
console.log(descobrirTipo(true));

//Exercicio D
const conceitoDeMedia = (media) => {
    if (media >= 9) {
        return "A"; 
    } else if (media >= 7) {
        return "B";
    } else if (media >= 5) {
        return "C";
    } else if (media >= 2) {
        return "D";
    } else {
        return "E";
    }
}

console.log(conceitoDeMedia(8.5));

//Exercicio E
const cotacaoDeDolar = (produto) => { 
    return valorEmDolar = produto * 5.39
}

console.log("Dolar Hoje: 5,39");
console.log("Valor do produto em reais é", cotacaoDeDolar(10))

//Exercicio F 
const maiorValor = (num1, num2, num3) => {
    return maior = Math.max(num1, num2, num3);
}

console.log("O maior é", maiorValor(5,6,3));


