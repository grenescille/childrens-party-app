const Express = require('express');
const app = Express();
const cors = require('cors');
const PORT = 3001;
const router = require('./router');

app.use(cors());
app.use(Express.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`);
});
