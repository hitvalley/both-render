const ValleyRouter = require('valley-router');
const mainRouter = new ValleyRouter();

const dataRouter = require('./data');

mainRouter.add('/data', dataRouter);

mainRouter.get('/index', async function(next) {
  await this.context.brender('main', {
    title: 'test main'
  });
  // await next();
});

module.exports = mainRouter;
