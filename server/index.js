const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const dbConnect = require('./config/dbConnect');
dbConnect();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;
const { errorHandler } = require('./middlewares/errorHandler');

//including different router files
const indexRouter = require('./router/indexRouter');
const userRouter = require('./router/userRouter'); 

app.set('trust proxy', 1);

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    origin : process.env.FRONTEND_URI,
    credentials : true,
}));

//setting routes for different routers
app.use('/',indexRouter);
app.use('/user',userRouter);

//global error middleware - placed after all routes
app.use(errorHandler);

app.listen(PORT,()=>{
    console.log(`server running at PORT : ${PORT}`);
});