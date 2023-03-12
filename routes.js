const UserController = require('./src/controllers/UseController')

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers,
  },
  {
    endpoint: '/products',
    method: 'GET',
    handler: UserController.listUsers,
  },
]