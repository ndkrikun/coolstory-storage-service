import * as controller from '../controllers/game-controllers'

const setRoutes = app => {

  app.route('/api/games')
    .get(controller.allGames)

  app.route('/api/game')
    .post(controller.createGame)

  app.route('/api/game/:gameId')
    .get(controller.readGame)
    .put(controller.updateGame)
    .delete(controller.removeGame)

};

module.exports = setRoutes;