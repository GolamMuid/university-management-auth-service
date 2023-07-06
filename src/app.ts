import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
import { UserRoutes } from './app/modules/user/user.route';

const app: Application = express();

app.use(cors());

// * parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// * Application routes

app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/academic-semesters/', AcademicSemesterRoutes);

app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully');
});

// * Global Error Handler

app.use(globalErrorHandler);

export default app;
