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
  return deck;
}

function shuffle (deck){
  for (let round = 0; round < 1000; round++) {
    const idx1 = Math.floor(Math.random() * deck.length);
    let idx2 = Math.floor(Math.random() * deck.length);
    while (idx1 === idx2) {
      idx2 = Math.floor(Math.random() * deck.length);
    }
    [deck[idx2], deck[idx1]] = [deck[idx1], deck[idx2]];
  }
  return deck;
};

export default {creatCard, creatDeck, shuffle}