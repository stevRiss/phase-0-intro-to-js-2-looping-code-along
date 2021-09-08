
/*for(let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}


const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for(let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }
    return gifts;
}
wrapGifts(gifts);  
beforeEach( () => {
    spy = sinon.spy( console, 'log' );
  } );

  afterEach( () => {
    spy.restore();
  } );
*/
const names = ["Lisa", "Kaitlyn", "Jan"];
const eventName = "surprise";
const messages = [];
function writeCards(names, eventName){
    
    for(let i = 0; i < names.length; i++){
       const messages = [console.log(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`)];
    }
    return messages;
}

writeCards(names, eventName);

const number = 0;
function countDown(number){
    let num = number;
    while(num >= 0){
        console.log(num--);
    }
    return num;
}
countDown(12);