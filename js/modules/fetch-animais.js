import AnimaNumeros from "./anima-numeros.js";

export default function fetchAnimais(url, target) {
  //Cria a div contendo informações
  //dos animais
  function createAnimal(animal) {
    const div = document.createElement("div");
    div.classList.add("numero-animal");

    div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}</span>`;
    return div;
  }

  const numerosGrid = document.querySelector(target);
  function preencherAnimais(animal) {
    const divAnimal = createAnimal(animal);
    numerosGrid.appendChild(divAnimal);
  }

  //Anima os números de cada animal
  function animaAnimaisNumeros() {
    const animaNumeros = new AnimaNumeros("[data-numero]", ".numeros", "ativo");
    animaNumeros.init();
  }

  //Puxa os animais através de um arquivo json
  //e cria cada animal utilizando createAnimal
  async function criarAnimais() {
    try {
      //Fetch, espera resposta e transforma em json
      const animaisResponse = await fetch(url);
      const animaisJSON = await animaisResponse.json();

      // Após transformação em json, ativa as funções
      //Preencher e animar os números
      animaisJSON.forEach((animal) => preencherAnimais(animal));
      animaAnimaisNumeros();
    } catch (erro) {
      console.log(erro);
    }
  }

  return criarAnimais();
}
