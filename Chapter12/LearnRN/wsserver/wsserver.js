/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

 var WebSocketServer = require('ws').Server,
 wss = new WebSocketServer({port: 8281});
 wss.on('connection', function(ws) {
   console.log('client connected.');
   ws.on('message', function(message) {
     console.log(message);
     ws.send('Hello, I\'m server. Your message is:' + message);
   });
 });