// Importing the express library and the Request and Response interfaces from it
import express, { Request, Response } from 'express';
import albumsRouter from './artists/artists.routes';
import artistsRouter from './albums/albums.routs';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Defining the port number that the application will listen on
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
console.log(process.env.MY_SQL_DB_HOST);


if (process.env.NODE_ENV == 'development') {
    // add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode baby');
}

app.get('/', (req: Request, res: Response) => {
    res.send('<h1>Welcome to the Music API</h1>');

});

app.use('/', [albumsRouter, artistsRouter]);

// Starting the application and listening on the specified port number
app.listen(port, () => {
    // Printing a message to the console indicating that the application is running
    console.log(`Example app listening at http://localhost:${port}`)
    

});



