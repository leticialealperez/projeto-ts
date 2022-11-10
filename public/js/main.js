"use strict";
function sum(num1, num2) {
    return `${num1 + num2}`;
}
var Tipo;
(function (Tipo) {
    Tipo[Tipo["Entrada"] = 1] = "Entrada";
    Tipo[Tipo["Sa\u00EDda"] = 2] = "Sa\u00EDda";
})(Tipo || (Tipo = {}));
const transacao = {
    valor: 1000,
    tipo: Tipo['Entrada']
};
const transacao2 = {
    valor: 1000,
    tipo: 2
};
let usuario = {
    nome: 'Leticia',
    email: 'leticia@teste.com',
    idade: 27
};
let conta = {
    agencia: 55,
    numero: 111222,
    saldo: 5000.00,
    transacoes: []
};
let dadosCompletos = {
    titular: Object.assign(Object.assign({}, usuario), { email: 'teste@teste.com' }),
    conta: Object.assign({}, conta)
};
/* const lista1 = ['1', '2', '4'];
const lista2 = ['6', '7'];
const lista3 = [...lista1, ...lista2]; */
const dado1 = imprimeDado(dadosCompletos);
console.log(dado1);
function imprimeDado(dado) {
    return dado;
}
