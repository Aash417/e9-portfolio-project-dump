import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Express } from 'express';
import userRouter from './routes/user.routes';

const app: Express = express();
app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
);
app.use(
  express.urlencoded({
    extended: true,
    limit: '16kb',
  })
);
app.use(express.json({ limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// routes declare
app.use('/', userRouter);

export { app };
