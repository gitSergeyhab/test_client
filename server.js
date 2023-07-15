import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = process.env.PORT || 8080;

const app = express();

const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);

app.use(express.static(__dirname));
app.use(express.static(path.resolve(__dirname, 'build')));


app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
})


const start = () => {
  try {
    app.listen(PORT, () => console.log(`express server for react static started on PORT: ${PORT}`));
  } catch (err) {
    console.log('Error On Start: ', {err})
  }
}

start();
