var policy = require ("./policy");
var sinergis = require ("sinergis");

var app = require ("kriting-app");
var api = require ("kriting-api");

var server = sinergis(policy);
server.use (app(policy));
server.use (api(policy));

server.listen (policy.server.port);
console.log ("running an example server on " + policy.server.port + " ~> " + process.env.NODE_ENV);