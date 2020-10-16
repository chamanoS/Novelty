const http = require('http');
const app = require('./app');
const server = http.createServer(app);
const port = process.env.PORT || 5001;

const db = require('./config/db');

server.listen(port, () => {
  console.log('Server is listening on port ' + port);
});