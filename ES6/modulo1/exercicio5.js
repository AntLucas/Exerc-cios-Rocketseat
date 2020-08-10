//5.1

const arr = [1, 2, 3, 4, 5, 6];

const [a, ...r] = arr;
//

function soma(...params) {
  return params.reduce((total, next) => total + next);
}
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
//

//5.2
const usuario = {
  nome: "Diego",
  idade: 23,
  endereco: {
    cidade: "Rio do Sul",
    uf: "SC",
    pais: "Brasil",
  },
};

const usuario2 = { ...usuario, nome: "Gabriel" };
const usuario3 = { ...usuario, endereco: { cidade: "Lontras" } };

console.log(usuario2);
console.log(usuario3);
