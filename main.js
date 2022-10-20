const age = Number( prompt("Inserisci la tua età") );
const travelKilometers = Number( prompt("Inerisci i kilometri che vuoi percorrere") );
const travel = travelKilometers * 0.25;
console.log(travel);
let result;
if(age <= 18){
    result = travel 
}else{
    result = ("maggiore18")
}
let totalejung = travel - (travel * 0.2);
console.log(totalejung + "€");
let resultover;
if(age <= 65){
    resultover = travel
}else{
    result = ("minore65")
}
let totaleover = travel - (travel * 0.4);
console.log(totaleover + "€");