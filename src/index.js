const { port } = require('./config')

const server = require('./server')

server.listen(port, () => {
  console.info(`Server started on port ${port} `)
});

const src = server
module.exports = src
