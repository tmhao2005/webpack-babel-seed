import express from "express";
import request from 'supertest';
import {register} from './controller';
import { router } from './main';

jest.mock('./controller');

it('register', async () => {
  // @ts-ignore
  register.mockImplementation((_req, res: any) => {
    res.status(200).json({ name: 'john' });
  });

  const app = express();
  app.use('/', router);

  await request(app).post('/api/user/register');

  expect(register).toHaveBeenCalled();
});
