import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './user.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();
routes.use('/sessions', sessionsRouter);
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

routes.get('/', (request, response) => {
  response.json({ msg: 'Gobarber' });
});

export default routes;
