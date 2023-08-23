function Dividir(divisor, dividendo){
    retorno = 0;
    if(divisor != 0){
        retorno = dividendo / divisor;
    }
    return retorno;
}

function Validar(menor, mayor, valor){
    retorno = true;
    if((valor<menor || valor>mayor) || isNaN(valor)){
        retorno = false;
    }
    return retorno;
}

let contadorAlumnos = 0;
let sumaNotas = 0;
let mayorEdad = 0;
let primeraEdad = true;

for(let i=1; i<4; i++){
    let nota = parseFloat(prompt('Alumno n°'+i+'- Ingrese la nota: '));
    while (Validar(0, 10, nota) == false){
        nota = parseFloat(prompt('ERROR!!! Ingrese una nota válida entre 0 y 10\nAlumno n°'+i+'- Ingrese la nota: '));
    }

    console.log(nota);

    let edad = parseInt(prompt('Alumno n°'+i+'- Ingrese la edad: '));
    while(Validar(18, 90, edad) == false){
        edad = parseInt(prompt('ERROR!!! Ingrese una edad válida entre 18 y 90 años\nAlumno n°'+i+'- Ingrese la edad: '));
    }
    
    contadorAlumnos ++;

    if (primeraEdad == true){
        mayorEdad = edad;
        primeraEdad = false;
    }
    else if(edad >= mayorEdad){
        mayorEdad = edad;
    }
    sumaNotas = sumaNotas + nota;
}

console.log('El promedio de notas es: '+ Dividir(contadorAlumnos, sumaNotas)+'\nEl alumno más grande tiene '+mayorEdad+' años');
alert('El promedio de notas es: '+ Dividir(contadorAlumnos, sumaNotas)+'\nEl alumno más grande tiene '+mayorEdad+' años');
