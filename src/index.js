import express from 'express';
import debug from 'debug';
import chalk from 'chalk';
import config from './config';

// eslint-disable-next-line import/no-mutable-exports
let app = express();
const port = parseInt(process.env.PORT || '3000', 10);
const log = debug('worker');

app = config(app);

app.get('/', (req, res) => {
  res.send('Welcome to Agro-Mart!');
});

app.listen(port, () => {
  log(chalk.green(`Server running on port ${port}`));
});

export default app;
