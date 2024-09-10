
let clinica = [];


clinica.push('Cachorro - Rex');
clinica.push('Gato - Mimi');
clinica.push('Coelho - Peter');


console.log("Lista de animais na clínica (antes da remoção):", clinica);


while (clinica.length > 0) {
    let animalRemovido = clinica.shift(); 
    console.log(`Animal removido: ${animalRemovido}`);
}


console.log("Lista de animais na clínica (depois da remoção):", clinica);
