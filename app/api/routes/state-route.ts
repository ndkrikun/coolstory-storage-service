import * as controller from '../controllers/state-controller'

const routes = app => {

  app.route('/states')
    .get(controller.allStates)

  app.route('/state')
    .post(controller.createState)

  app.route('/state/:gameId')
    .get(controller.readState)
    .put(controller.updateState)
    .delete(controller.removeState)

};

module.exports = routes;