# exercise-magic-card

Esse é um projeto para o conteúdo sobre `Jest Assíncrono`.

### Antes de iniciar

Crie um fork desse projeto e para isso siga esse [tutorial de como realizar um fork](https://guides.github.com/activities/forking/).

Após feito o fork, clone o repositório criado para o seu computador.

Rode o `npm install`.

Vá para a branch master do seu projeto e execute o comando:
- `git branch -a`

Verifique se as seguintes branchs apareceram:

  * `exercise-one`
  * `exercise-two`

Cada branch dessas será um exercício.

- Mude para a branch `exercise-one` com o comando `git checkout exercise-one`. É nessa branch que você realizará a solução para o exercício 1, e assim por diante.

Observe o que deve ser feito nas instruções para cada exercício.

Após a solução dos exercícios, abra um PR no seu repositório forkado e, se quiser, mergeie para a master, sinta-se a vontade!

**Atenção!** Quando for criar o PR você irá se deparar com essa tela:

![PR do exercício](images/example-pr.png)

É necessário realizar uma mudança. Clique no *base repository* como na imagem abaixo:

![Mudando a base do repositório](images/change-base.png)

Mude para o seu repositório. Seu nome estará na frente do nome dele, por exemplo: `antonio/TicTacToe`. Depois desse passo a página deve ficar assim:

![Após mudança](images/after-change.png)

Agora basta criar o PULL REQUEST clicando no botão `Create Pull Request`.

Para cada PR realize esse processo.

### COMEÇANDO OS EXERCÍCIOS

Nos exercícios de hoje, será usada uma API que retorna cartas do jogo de Magic: The Gathering. Então, se prepare, jovem, pois neste dia, uma carta será comprada do Grimório e outras serão escolhidas como as favoritas. Está com mana suficiente para esta aventura?

## Exercício 1

### Antes de começar

* Confirme que você está na branch `exercise-one`, se não estiver, execute os passos descritos no Readme antes de prosseguir.
* Todas as funções já estão impĺementadas, você precisará se preocupar apenas em testá-las. 
* A função `trybeSimulator` já está pronta e disponível dentro do arquivo `magic.test.js`, onde você implementará seus testes. Mas **atenção**, você **NÃO** precisará modificá-la.
* Não se preocupe em entender a estrutura da função `trybeSimulator`, você aprenderá a implementar este tipo de função futuramente no curso.
* Não se esqueça de atualizar o número de `expect.assertions`, a cada `expect` que você implementar em seus testes.

**Dica de ouro**: leia e entenda cada parte da implementação da função `getMagicCard` que está no arquivo `src/magic.js.` Isso te ajudará a implementar os testes.

### Agora mão na massa

I - Abra o arquivo `tests/magic.test.js`. Nele você encontrará a estrutura inicial dos testes ja montada. Essa estrutura no entanto está incompleta e precisa de ajustes para que a sintaxe do `async/await` seja aplicada de forma correta. Implemente o que falta para que a sintaxe do `async/await` esteja completa.

II - Implemente um teste que verifique se o retorno da função `getMagicCardSimulator` é igual ao objeto `expected`.
***spoiler-alert***: você pode desestruturar o objeto response e obter diretamente suas propriedades.

III - Implemente um teste que verifique se a propriedade `types` é do tipo `Array`.

IV - Implemente um teste que verifique se a propriedade `subtypes` possui `length === 2`.

V - Implemente um teste que verifique se a propriedade `rarity` possui valor `Uncommon`.

VI - Implemente um teste que verifique se a propriedade `name` possui valor `Ancestor's Chosen`.

VII - Implemente um teste que verifique se a propriedade `manaCost` possui valor `{5}{W}{W}`.

---

## Exercício 2

### Antes de começar

* Confirme que você está na branch `exercise-two`, se não estiver, execute os passos descritos no Readme antes de prosseguir.
* Dentro da pasta `data`, você encontrará o arquivo `favoriteCards`, leia e compreenda sua estrutura para realizar os exercícios.
* A função `getMagicCard` sofreu alterações e agora além de realizar a chamada a API, ela também modifica o arquivo favoriteCards, adicionando um novo card a cada execução.
* Não se esqueça de atualizar o número de `expect.assertions`, a cada `expect` que você implementar em seus testes.

**Dica de ouro**: leia e entenda cada parte da implementação da função `getMagicCard` que está no arquivo `src/magic.js.` Isso te ajudará a implementar os testes.


### Agora mão na massa

Agora temos um arquivo com algumas das cartas preferidas do nosso jogador. Você pode verificar a sua estrutura no arquivo `data/favoriteCards.js`. Utilizaremos este arquivo para os próximos passos.

I - Implemente um teste que verifique que após a execução da função `getMagicCard`, `favoriteCards` passa a possuir `length === 5`.

II - Implemente um teste que verifique que na última posição do array `favoriteCards` existe um card com o a propriedade `name` e valor "Beacon of Immortality".

Para os próximos exercícios descomente o teste dentro do escopo do segundo `it`.

III - Após descomentar o teste dentro do segundo `it`, rode os testes. 

Você vai perceber que o teste falhou. Consegue entender porque ele falha? Isso mesmo, a função `getMagicCard` modificou o arquivo `favoriteCards` no escopo do `it` anterior. Desta maneira, para o Jest, o array `favoriteCards` não possui quatro cards, mas sim, seis.

IV - Utilizando a função `afterEach` implemente a função `retrievesFavoriteCards` com uma lógica capaz de restaurar o array `favoriteCards` e que faça com que o teste passe. 

## Bônus

* Este exercício será feito na mesma branch do exercício anterior: `exercise-two`. 
* Este exercício deve ser realizado após a implementação da função `afterEach`.
* Implemente o teste solicitado dentro do escopo do segundo `it`.

I - Utilizando a função `map`, crie um array contendo apenas a propriedade `name` de todos os cards presentes no deck original, ou seja, no `favoriteCards`. Este array deve conter quatro nomes e deve ser salvo em uma nova variável.

II - Implemente um teste que verifique que o array que você obteve com o `map` do exercício anterior contém a seguinte estrutura e valores:

```js
['Ancestor\'s Chosen', 'Angel of Mercy', 'Aven Cloudchaser', 'Ballista Squad']
```
---
