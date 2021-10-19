const { getMagicCard } = require('../src/magic.js');
const favoriteCards = require('../data/favoriteCards.js');

const retrievesFavoriteCards = async() => {
  // implemente sua função aqui
  await getMagicCard('130553')
}

describe(' Testa a função getMagicCard', () => {

  afterEach(() => {
    retrievesFavoriteCards();
  })

  it('Testa se um novo card é adicionado a cada execução', async() => {

    expect.assertions(1);

    await getMagicCard('130553');

    // implemente seus testes aqui

    expect(5).toEqual(favoriteCards.length)

  });

  it('Deve retornar favoriteCards contendo apenas os cards favoritos iniciais', () => {

    expect.assertions(2);

    // implemente seus testes aqui

    let newArray = favoriteCards.map((card) => card.name)

    let expec = ['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad', 'Beacon of Immortality']

    expect(favoriteCards).toHaveLength(5);

    expect(newArray).toEqual(expec);
  });

  it('um teste que verifique que na última posição do array favoriteCards existe um card com o a propriedade name e valor "Beacon of Immortality"', async() => {

    expect.assertions(1);

    await getMagicCard('130553');

    // implemente seus testes aqui

    expect('Beacon of Immortality').toEqual(favoriteCards[favoriteCards.length - 1].name)

  });
});
