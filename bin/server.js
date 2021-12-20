const http = require('http');
const app = require('../app');

const port = process.env.PORT || 8000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => {
    console.log(`app starts at http://localhost:${port}`)
})