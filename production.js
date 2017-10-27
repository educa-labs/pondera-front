const Koa = require('koa');
const serve = require('koa-static');
const mount = require('koa-mount');
const path = require('path');

const app = new Koa();


app.use(mount('/', serve(path.join(__dirname, '/dist/'))));

app.listen(8080, () => {
  console.log('App listening on http://localhost:8080');
});
