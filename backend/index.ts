import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import ip from 'ip';
import chalk from 'chalk';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV === 'development') {
  app.all('*', (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    next();
  });
}

app.get('/', (req: Request, res: Response) => {
  console.log('hello?');
  res.send('Hello, world!');
});

app.listen(port, () => {
  const url = `http://${ip.address()}:${port}`;
  console.log(`Server is running on ${chalk.underline(chalk.cyan(url))}`);
});
