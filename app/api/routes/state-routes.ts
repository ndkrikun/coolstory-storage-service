import * as controller from '../controllers/state-controllers'

const setRoutes = app => {

  app.route('/api/states')
    .get(controller.allStates)

  app.route('/api/state')
    .post(controller.createState)

  app.route('/api/state/:gameId')
    .get(controller.readState)
    .put(controller.updateState)
    .delete(controller.removeState)

};

module.exports = setRoutes;