let myArray = [
  'Marvel Rivals',
  'The Witcher',
  'Construction Simulator',
  'Lies of P', 
  'Overwatch 2', 
  'World of Warcraft', 
  'Final Fantasy', 
  'Dragon Age', 
  'Baldurs Gate 3'
  
  
  
];
let myArraytwo =[
{ name: 'Tor', age 5, isPresent: false},
{ name: 'Hans', age 25, isPresent: true},
{ name: 'Alex', age 15, isPresent: true},
{ name: 'Jørgen', age 35, isPresent: true},
{ name: 'Emil', age 14, isPresent: false}
];


//toString( Henter ut elementet, så retunerer han elementet som en streng), 
//push( Plasserer det elementer i slutten av Arrayet ditt). 
//pop( Fjerner elementet fra arrayet/elementet fra slutten av arrayet), 
//shift( fjerner første elementet i begynnelsen av arrayet og returnerer det), 
//unShift(setter inn nye elementet i slutten av arrayet og returnerer det)
//splice() - fjerner elemtner fra et array på en bestemt posisjon. Må kombineres med indexOf eller andre elementer for å fungere

myArray.push('Ashes of Creation');

const removedGame = myArray.pop();
console.log(removedGame);

myArray.shift();

const removedFirstGame = myArray.shift();

console.log(removedFirstGame);


myArray.unshift('Pilars of Eternity');
console.log(myArray);


// myArray.splice(4);


console.log(myArray);
