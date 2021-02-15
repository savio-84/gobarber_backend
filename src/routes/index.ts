import { Router } from 'express';
import appointmentsRouter from './appointmentsRouter';

const router = Router();

router.use('/appointments', appointmentsRouter);

export default router;
