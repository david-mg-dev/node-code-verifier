import { LogError, LogSucces } from './src/utils/logger';
import dotenv from 'dotenv';
import server from './src/server/index';

// Configuration the .env file
dotenv.config();

const port = process.env.PORT || 8000;

// Execute SERVER
server.listen(port, () => {
    LogSucces(`[SERVER ON]: Running in http://localhost:${port}/api`);
});

// Control SERVER PORT
server.on('error', (error) => {
    LogError(`[SERVER ERROR]: ${error}`);
});



