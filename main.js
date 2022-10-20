const age = Number( prompt("Inserisci la tua età") );
const travelKilometers = Number( prompt("Inerisci i kilometri che vuoi percorrere") );
const travel = travelKilometers * 0.25;
let resultjunior;
if(age <= 18){
    resultjunior = travel - (travel * 0.2);
    console.log( "Prezzo scontato junior" + " " + resultjunior + "€")
}else{
    console.log( "Prezzo intero" + " " + travel + "€");
}

let resultsenior;
if(age >= 65){
    resultsenior = travel - (travel * 0.4);
    console.log( "Prezzo scontato senior" + " " + resultsenior + "€")
}else{
    console.log( "Prezzo intero" + " " + travel + "€");
}

