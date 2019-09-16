import express from 'express';
import path from 'path';

const app = express();

const publicPath = path.join(__dirname, './showcase');
const { PORT: port = 8080 } = process.env;

app.use(express.static(publicPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
