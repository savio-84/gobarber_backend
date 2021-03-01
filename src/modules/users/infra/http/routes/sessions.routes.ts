import express from 'express';
import SessionsController from '@modules/users/infra/http/controllers/SessionsController';

const sessionsRouter = express.Router();
const sessionsController = new SessionsController();

sessionsRouter.post('/', sessionsController.create);

export default sessionsRouter;
