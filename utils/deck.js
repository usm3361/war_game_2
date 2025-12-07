const rankCard = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
const suiteCard = ["H", "C", "D", "S"];
const deck = [];
const specielRanks = {
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

function creatCard(rank, suite) {
  const card = {};
  if (typeof rank === "number") {
    card.rank = rank;
    card.suite = suite;
    card.value = rank;
    return card;
  } else {
    card.rank = rank;
    card.suite = suite;
    card.value = specielRanks[rank];

    return card;
  }
}

function creatDeck(rankCard, suiteCard) {
  rankCard.forEach((rank) => {
    suiteCard.forEach((suite) => {
      deck.push(creatCard(rank, suite));
    });
  });
}




creatDeck(rankCard, suiteCard);
console.log(deck)
