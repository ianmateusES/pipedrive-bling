import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { errors } from 'celebrate';

const app = express();
const port = 3333;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  return res.json({ message: 'Hello world' });
});

app.use(errors());

app.listen(port, () => {
  console.log(`🚀 Pipedrive Bling - Server started on port ${port}`);
});
