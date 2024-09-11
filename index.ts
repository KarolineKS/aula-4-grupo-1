//importamos a classe veiculo
import { Veiculo } from "./Veiculo";
import prompt from "prompt-sync";

//atalho para abrir prompt
const teclado = prompt();

//criamos o veiculo
console.log('Criação de veículo');
const carro: Veiculo = criaVeiculo();

//menu de opções de ações. Aqui ficam os cases
while(true){
    console.log("########### MENU ###########");
    console.log("1 - Acelerar");
    console.log("2 - Frear");
    console.log("3 - Subir marcha");
    console.log("4 - Descer marcha");
    console.log("5 - Imprimir dados do veículo");
<<<<<<< HEAD
    console.log("7 - Pisca Alerta");
=======
    console.log("6 - Airbag");
>>>>>>> origin/airbag
    console.log("0 - Sair");

    const opcao = +teclado('Escolha uma opção: ');
    if(opcao === 0){
        break;
    }
    switch (opcao) {
        case 1:
            acelerar(carro);
            break;
    
        default:
            break;
    }
}


console.table(carro);


// função acelerar do carro 
function acelerar(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
    veiculo.velocidade += veiculo.potencia*0.1;
    console.log(veiculo.velocidade);
}}


//função de criar o veiculo
function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}


