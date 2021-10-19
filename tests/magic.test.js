const magic = require('../src/magic.js');
const { trybeSimulator } = require('../simulator/simulator.js');

const expected = {
  name: "Ancestor's Chosen",
  manaCost: '{5}{W}{W}',
  types: ['Creature'],
  subtypes: ['Human', 'Cleric'],
  rarity: 'Uncommon'
};



describe(' Testa a função getMagicCard', () => {
  let result;

  beforeEach(async() => {
    const getMagicCardSimulator = trybeSimulator(magic, 'getMagicCard');
    result = await getMagicCardSimulator('130550');
  })

  it('um teste que verifique se o retorno da função getMagicCardSimulator é igual ao objeto expected', () => {
    expect(result).toEqual(expected);
  });

  it('um teste que verifique se a propriedade types é do tipo Array.', () => {
    const { types } = result;
    expect(Array.isArray(types)).toEqual(true);
  });

  it('um teste que verifique se a propriedade subtypes possui length === 2', () => {
    const { subtypes } = result;
    expect(2).toEqual(subtypes.length);
  });

  it('um teste que verifique se a propriedade rarity possui valor Uncommon.', () => {
    const { rarity } = result;
    expect('Uncommon').toEqual(rarity);
  });

  it('um teste que verifique se a propriedade name possui valor Ancestors Chosen.', () => {
    const { name } = result;
    expect("Ancestor's Chosen").toEqual(name);
  });

  it('um teste que verifique se a propriedade manaCost possui valor {5}{W}{W}.', () => {
    const { manaCost } = result;
    expect('{5}{W}{W}').toEqual(manaCost);
  });


});
