/* App JS - App.js */

const http	= require('http');
const express	= require('express');
const socketIO	= require('socket.io');
const util	= require('util');
const route	= require('./routes/routes');

const app	= express();
app.use(route);

const server	= http.createServer(app);
const io	= socketIO(server);
const port	= 8080;

console.log("Start NodeJS HTTP server");
io.on("connect", socket => {
	console.log(util.inspect(socket));
	console.log("New Client !");
});
io.on("disconnect", socket => {
	console.log(util.inspect(socket));
});
server.listen(port, () => console.log(`Listening on por ${port}`));
