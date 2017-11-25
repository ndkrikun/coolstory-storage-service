import * as controller from '../controllers/character-controllers'

const setRoutes = app => {

  app.route('/api/characters')
    .get(controller.allCharacters)

  app.route('/api/character')
    .post(controller.createCharacter)

  app.route('/api/character/:characterId')
    .get(controller.readCharacter)
    .put(controller.updateCharacter)
    .delete(controller.removeCharacter)

};

module.exports = setRoutes;