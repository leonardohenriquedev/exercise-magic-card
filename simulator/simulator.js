const expect = {
  name: "Ancestor's Chosen",
  manaCost: '{5}{W}{W}',
  types: [ 'Creature' ],
  subtypes: [ 'Human', 'Cleric' ],
  rarity: 'Uncommon'
};

const trybeSimulator = (moduleName, functionName) => {
  const apiURL = jest.spyOn(moduleName, functionName);
  apiURL.mockResolvedValue(expect);
  return apiURL;
};

module.exports = {
  trybeSimulator
};
