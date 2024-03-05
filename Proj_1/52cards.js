var suits = ['H', 'C', 'D', 'S'];
var ranks = ['2','3','4','5','6','7','8','9','T','J','Q','K','A'];

var deck = [];

// for(var suitCounter = 0; suitCounter < 4; suitCounter++) {
//     // console.log(suitCounter);
//     console.log(suits[suitCounter]);
// }
// for (var rankCounter = 0; rankCounter < 13; rankCounter++) {
//     // console.log(rankCounter);
//     console.log(ranks[rankCounter]);
// }

for (var suitCounter = 0; suitCounter < 4; suitCounter++) {
    for (var rankCounter = 0; rankCounter < 13; rankCounter++) {
        // console.log(ranks[rankCounter] + suits[suitCounter]);
        deck.push(ranks[rankCounter] + suits[suitCounter]);
    }
}

console.log(deck);