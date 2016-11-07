# Trossello

Open Source Trello Clone

[![CircleCI](https://circleci.com/gh/GuildCrafts/Trossello/tree/master.png?circle-token=859633aeb7d26e62dd772cda75da1ca27a6237db)](https://circleci.com/gh/GuildCrafts/Trossello/tree/master)

## Contributing

1. Fork this repository
2. Take a ticket from the [trello board](https://trello.com/b/QIKeSwK0/trossello-oss-trello)
3. Cut a topic branch
4. Finish the ticket
5. Submit a pull request

### PARALLEL-WATERBUCK Specs

- [ ] Make List names in-line editable.
- [ ] Make search results say "No Results" when no matches are found.
- [ ] Make Lists drag-and-dropable.
- [ ] Study REACT basics and understand how it's intergrated into the project.

#### Run the Server!

At this point, you should be able to run 'npm start' without errors.


#### Running Tests

Ensure `npm start` is running before you run `npm test` to run the mocha tests

#### Cutting a new branch

###### Setup

```sh
# clone Trossello
# checkout your clone
# add github.com/GuildCrafts/trossello as a remote called `upstream`
git remote add upstream git@github.com:GuildCrafts/Trossello.git
```

###### Cutting a new branch

```sh
git fetch upstream
git checkout -b my-topic-branch upstream/master
git push -fu origin HEAD
```

#### Submitting a pull request

Rebase your branch off of the latest `upstream/master` before submitting your pull request

```sh
git commit ... // commit all your changes
git fetch upstream
git rebase upstream/master
// resolve any conflicts
npm install
npm test
git push -f origin HEAD
```

## Architecture

- Node
- Express
- Webpack
- Babel es2016
- SQL via Knex
- React
- SASS


### Persistence

We're using `knex` to generate our SQL

#### HTTP API

| action               | CRUD   | verb | path                                     |
| -------------------- | ------ | ---- | ---------------------------------------- |
| getBoardsByUserId()  | index  | get  | /api/boards                              |
| createBoard()        | create | post | /api/boards                              |
| getBoardById()       | show   | get  | /api/boards/:boardId                     |
| updateBoard()        | update | post | /api/boards/:boardId                     |
| deleteBoard()        | delete | post | /api/boards/:boardId/delete              |
| createList()         | create | post | /api/boards/:boardId/lists               |
| createCard()         | create | post | /api/boards/:boardId/lists/:listId/cards |
| updateList()         | update | post | /api/lists/:listId                       |
| deleteList()         | delete | post | /api/lists/:listId/delete                |
| updateCard()         | update | post | /api/cards/:cardId                       |
| deleteCard()         | delete | post | /api/cards/:cardId/delete                |

### Contributors

- [deadlyicon](https://github.com/deadlyicon)
- [EthanJStark](https://github.com/EthanJStark)
- [Farhad33](https://github.com/Farhad33)
- [tjfwalker](https://github.com/tjfwalker)
- [AnaSauce](https://github.com/AnaSauce)
- [Moniarchy](https://github.com/Moniarchy)
- [GeneralMeow](https://github.com/GeneralMeow)
- [harmanLearns](https://github.com/harmanLearns)
- [Arayi](https://github.com/Arayi)
- [jason00111](https://github.com/jason00111)
- [ASantos3026](https://github.com/ASantos3026)
- [salmonax](https://github.com/salmonax)
