import express from 'express';
import multer from 'multer';
import uploadConfig from '@config/upload';
import CreateUserService from '@modules/users/services/CreateUserService';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';
import { container } from 'tsyringe';
import UsersController from '../controllers/UsersController';

const usersRouter = express.Router();
const upload = multer(uploadConfig);
const usersController = new UsersController();

usersRouter.patch(
  '/avatar',
  ensureAuthenticated,
  upload.single('avatar'),
  usersController.update,
);

usersRouter.post('/', usersController.create);

export default usersRouter;
