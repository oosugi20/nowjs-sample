
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , nowjs = require('now'); // nowjs 読み込み

var app = module.exports = express.createServer();
var everyone = nowjs.initialize(app); // nowjs 初期化

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.listen(3600);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);



everyone.now.serverAlert = function (message) {
  everyone.now.clientAlert(message);
};

everyone.now.serverAlertClose = function () {
  everyone.now.clientAlertClose();
};
