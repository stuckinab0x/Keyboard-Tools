import express from 'express';

const port = 8000;

const app = express();

const serveStatic = express.static('public', { extensions: ['html'] });

app.use(serveStatic);

app.listen(port, () => {
  console.log(`keyboard tools server listening on ${ port } `)
});