const fs = require('fs');
const path = require('path');

const ValleyServer = require('valley-server');
const ValleyTpl = require('valley-tpl');
const ValleyRouter = require('valley-router');
const ValleyMongo = require('valley-mongo');

const BothRender = require(path.join(__dirname, 'module/both-render'));

const server = new ValleyServer();
const config = {
  port: 8080
};
const mongoConfig = require('./mongo-config.js');

let viewPath = path.join(__dirname, 'assets/views');
server.staticPath(path.join(__dirname, 'assets/static'));
server.use('prepare-tpl', new ValleyTpl({ viewPath }));
server.use('mongo', new ValleyMongo(mongoConfig));
server.use('both-render', BothRender);
server.use('router', require(path.join(__dirname, 'routers/main')));

server.use('/', async function(next) {
  // console.log('404', this.context.req.url)
  let res = this.context.res;
  if (res && res.state == 404) {
    this.context.text('404');
    await next();
  }
});

server.listen(config.port).then(res => console.log(`http:\/\/localhost:${config.port}/index`));
