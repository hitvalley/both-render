const fs = require('fs');
const path = require('path');

const ValleyServer = require('valley-server');
const ValleyTpl = require('valley-tpl');
const ValleyRouter = require('valley-router');

const BothRender = require(path.join(__dirname, 'module/both-render'));

const server = new ValleyServer();
const config = {
  port: 8080
};

let viewPath = path.join(__dirname, 'assets/views');
server.use('prepare-tpl', new ValleyTpl({ viewPath }));
server.staticPath(path.join(__dirname, 'assets/static'));
server.use('both-render', BothRender);
server.use('router', require(path.join(__dirname, 'routers/main')));

server.use('/', async function(next) {
  // console.log('404', this.context.req.url)
  let res = this.context.response;
  // console.log(res)
  if (res && res.state == 404) {
    this.context.text('404');
    await next();
  }
});

server.listen(config.port).then(res => console.log(`http:\/\/localhost:${config.port}`));
