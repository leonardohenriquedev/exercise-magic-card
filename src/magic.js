const fetch = require('node-fetch');

const getMagicCardUrl = (cardId) => `https://api.magicthegathering.io/v1/cards/${cardId}`;

const getMagicCard = async (cardId) => {
  const url = getMagicCardUrl(cardId);
  const response = await fetch(url);
  const json = await response.json();
  
  const { name, manaCost, types, subtypes, rarity } = json.card;

  return {
    name,
    manaCost,
    types,
    subtypes,
    rarity,
  }
  
};

module.exports = {
  getMagicCard,
};
