# Domain — https://ahriplxueu.localtunnel.me


## Requests

### /api/games
- GET (returns list of game states)

### /api/game
- POST (creates state, returns gameHashId)

### /api/game/:gameHashId
- GET (returns game state)
- PUT (updates game state, returns game state)
- DELETE (removes game state, returns success message)
