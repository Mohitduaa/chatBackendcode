
import express from 'express'
import morgan from 'morgan';
import connect from './db/db.js';
import useRouter from "./routes/user.routes.js"
import projectRoutes from './routes/projects.routes.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
connect();
const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());

app.use('/users',useRouter);
app.use('/projects',projectRoutes)

app.use('/',(req,res)=>{
    res.send('hello world');
})
export default app; 