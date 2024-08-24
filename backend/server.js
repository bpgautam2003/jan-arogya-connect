//configuring dotenv
require('dotenv').config();

const express = require('express');
const errorMiddleware = require('./middlewares/error-middleware.js');
const app = express();
const authrouter = require('./routes/auth-routes.js');
const doctorrouter = require('./routes/doctor-routes.js');
const patientrouter = require('./routes/patient-routes.js');
const connectDb = require('./utils/db.js');
const port = process.env.PORT;
const cors = require('cors');
const queue = require('./models/queue.js')
//middleware
app.use(express.json());

//cors middleware

const corsOption = {
    origin : "http://localhost:3000",
    methods : "GET, POST, PUT, DELETE, PATCH",
    credentials : true
}
app.use(cors(corsOption));

app.use(errorMiddleware);

// authrouter
app.use('/api/auth', authrouter);
app.use('/api/doctor', doctorrouter);
app.use('/api/patient', patientrouter);

//Connecting database
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`Server is running at ${port}`);
    })
})
