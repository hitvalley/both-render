const fs = require('fs');
const path = require('path');

const ValleyServer = require('valley-server');
const ValleyTpl = require('valley-tpl');

const server = new ValleyServer();
const config = {
  port: 8080
}

server.use('prepare-tpl', new ValleyTpl({
  viewPath: path.join(__dirname, 'assets/views')
}));
server.staticPath(path.join(__dirname, 'assets/static'));
server.use('both-render', require(path.join(__dirname, 'module/both-render')));

server.use('/', async function(next){
  // this.text('render');
  this.context.brender('main', {
    title: 'test main'
  });
  await next();
});

server.listen(config.port).then(res => console.log(`http:\/\/localhost:${config.port}`));
