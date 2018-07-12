let suits =["Spades","Clubs","Hearts","Diamonds"];
let values =["Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King"];
//console.log(suits[1].toUpperCase());
//console.log(decks);
function decks(){
	let deck = [];
for (let suit = 0;suit<=3;suit++){
	console.log(suits[suit] +" All Cards:");

for(let val = 0;val <=12;val++){
	
	//console.log(values[val] + " of " + suits[suit]);
   /// deck.push(values[val] + " of " + suits[suit]);
let card={
          suiit:suits[suit],
          va:values[val]

}
	deck.push(card);
	
}
}
//console.log(deck);
return deck;
}

//shuffling of deck

function shuffleDeck(deck){
	for(let i =0;i<deck.length;i++){
		let swapindex = Math.trunc(Math.random() * deck.length);
		let tmp = deck[swapindex];
		deck[swapindex]=deck[i];
		deck[i]=tmp;
	}


}
//getting strings of careds

function getCardString(card){

	return card.va + " Of " + card.suiit;
}
//calling shuffling of decks
let deck = decks();
shuffleDeck(deck);

var allCards = " ";

for(let i =0;i<deck.length;i++){
//console.log(getCardString(deck[i]));	
//allCards = allCards + getCardString(deck[i]) + "\n";
allCards = allCards + getCardString(deck[i]);

}
let textarea = document.getElementById("all-cards");
textarea.innerText = allCards;
var imagess = ["clubs.jpg","diamonds.png","hearts.png","spades.png","clubs.jpg","diamonds.png","hearts.png","spades.png","clubs.jpg","diamonds.png","hearts.png","spades.png","clubs.jpg","diamonds.png","hearts.png","spades.png","clubs.jpg","diamonds.png","hearts.png","spades.png","clubs.jpg","diamonds.png","hearts.png","spades.png","clubs.jpg","diamonds.png","hearts.png","spades.png","clubs.jpg","diamonds.png","hearts.png","spades.png","clubs.jpg","diamonds.png","hearts.png","spades.png","clubs.jpg","diamonds.png","hearts.png","spades.png","clubs.jpg","diamonds.png","hearts.png","spades.png","clubs.jpg","diamonds.png","hearts.png","spades.png","clubs.jpg","diamonds.png","hearts.png","spades.png"];

let btn = document.getElementById('shuffleBtn');
btn.addEventListener('click',decksuffle){
	
function decksuffle(){
let deck = decks();
shuffleDeck(deck);

var allCards = " ";

for(let i =0;i<deck.length;i++){
//console.log(getCardString(deck[i]));	
allCards = allCards + getCardString(deck[i]);
}
let textarea = document.getElementById("all-cards");
textarea.innerText = allCards;
//forimages shuffle
// for(let i =0;i<imagess.length;i++){
// 		let swapping = Math.trunc(Math.random() * imagess.length);
// 		let temps = imagess[swapping];
// 		imagess[swapping] = imagess[i];
// 		imagess[i]  = temps;

// 		document.images[i].src = imagess[i];
// 	}
// 	for(let j = 0;j<imagess.length;j++){
// 		document.images[i].src = imagess[i];
// 	}

}
//images shuffle
	// function init(){
	// 	for(let i =0;i<imagess.length;i++){
	// 		let swapping = Math.trunc(Math.random() * imagess.length);
	// 		let temps = imagess[swapping];
	// 		imagess[swapping] = imagess[i];
	// 		imagess[i]  = temps;

	// 		document.images[i].src = imagess[i];
	// 	}
	// 	for(let j = 0;j<imagess.length;j++){
	// 		document.images[i].src = imagess[i];
	// 	}
	//document.images[2].src = imagess[1];
}
console.log(imagess[1]);



//defination
/*function Adddddd(a,b){
//body
return a+b;
}
//function call
//console.log("sum is "+ Adddddd(23,12));
let arrays = [1,22,3,34,5,65,7,83,9,10];
let c = SumOfEvenNumbers(arrays);
console.log("sum is"+c);
function SumOfEvenNumbers(n){
	let sum =0;
for(let nums =0;nums<=n.length;nums++){
	if((nums%2)===0){
    sum = sum+nums;

	}
}

}*/



/*console.log("Your Hand");
console.log(" "+"King of Spades");
console.log(" "+"Nine of Diamonds");*/

