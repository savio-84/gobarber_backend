import express from 'express';
import AppointmentsController from '@modules/appointments/infra/http/controllers/AppointmentsController';
import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';

const appointmentsRouter = express.Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

appointmentsRouter.post('/', appointmentsController.create);

appointmentsRouter.use(ensureAuthenticated);

// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();
//   return response.status(200).json(appointments);
// });

export default appointmentsRouter;
