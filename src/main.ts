
function sum(num1: number, num2: number){
    return `${num1 + num2}`;
}

// number

// string

// boolean

// objetos e arrays
interface Usuario {
    nome: string;
    email: string;
    idade: number;
}

interface Conta {
  numero: number;
  agencia: number;
  saldo: number;
  transacoes: Transacao[];
}

interface Transacao {
  valor: number;
  tipo: TipoTransacao;
}

type TipoTransacao = 1 | 2

enum Tipo {
    'Entrada' = 1,
    'Saída' = 2
}

const transacao: Transacao = {
    valor: 1000,
    tipo: Tipo['Entrada']
} 

const transacao2: Transacao = {
  valor: 1000,
  tipo: 2
}; 


let usuario: Usuario = {
    nome: 'Leticia',
    email: 'leticia@teste.com',
    idade: 27
}

let conta: Conta = {
    agencia: 55,
    numero: 111222,
    saldo: 5000.00,
    transacoes: []
}

let dadosCompletos = {
  titular: {
    ...usuario,
    email: 'teste@teste.com'
  },
  conta: {
    ...conta,
  }
};


/* const lista1 = ['1', '2', '4'];
const lista2 = ['6', '7'];
const lista3 = [...lista1, ...lista2]; */

const dado1 = imprimeDado(dadosCompletos);

console.log(dado1)

function imprimeDado<T>(dado: T): T {
    return dado
}
