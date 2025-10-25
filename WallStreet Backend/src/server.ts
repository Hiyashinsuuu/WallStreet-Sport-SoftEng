import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import router from './routes';
import { AppDataSource } from './ormconfig';
import { errorHandler } from './middleware/errorHandler';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const specs = swaggerJsdoc({
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'WallStreet API',
      version: '0.1.0',
      description: 'Backend API for WallStreet booking system',
    },
  },
  apis: ['./src/controllers/*.ts'], 
});
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use('/api', router);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

AppDataSource.initialize()
  .then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error('❌ Database connection failed:', err));
