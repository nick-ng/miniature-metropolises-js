require('dotenv').config();
const express = require('express');
const compression = require('compression');
const path = require('path');

const { applyMiddlewares } = require('./middleware');
const { applyRouters } = require('./router');

const app = express();
const router = express.Router();

app.use(compression());
app.use(express.json());

applyMiddlewares(app);
applyRouters(router);
app.use(router);

// serve static files
app.use(express.static('assets'));
app.use(express.static('dist'));

// redirect all requests to index.html
app.use((req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'));
});

// starting listening
const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`${new Date()} Website server listening on ${port}.`)
);
