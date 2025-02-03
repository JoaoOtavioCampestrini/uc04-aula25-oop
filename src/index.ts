import { Pessoa } from "./classes/pessoa";
import { Forma } from "./classes/forma";
import { Quadrado } from "./classes/quadrado";

const pessoa = new Pessoa("Cezar", 34, "12345678901", "M");

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.cpf);
console.log(pessoa.sexo);

pessoa.idade = 35;

const forma1 = new Quadrado([1, 1, 1, 1]);
const forma2 = new Forma("Triangulo", [1, 2, 3], 3);
