const ValleyRouter = require('valley-router');

const router = new ValleyRouter();

router.get('/list', async function(next){
  let mdb = this.context.db;
  let collection = mdb.db('gty_test_db').collection('info');
  let list = await collection.find().toArray();
  await this.context.json({
    list
  });
});

module.exports = router;
