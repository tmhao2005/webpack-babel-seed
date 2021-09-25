import express from "express";
import {register} from './controller';

const router = express.Router();

router.post(`/api/user/register`, register);

export { router };
