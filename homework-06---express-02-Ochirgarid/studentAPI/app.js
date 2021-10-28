// 1. imports
const express = require('express');
const studentsRouter = require('./routes/students');

const morgan = require('morgan');
const path = require('path');
const cors = require('cors')
const fs = require('fs');


// 2. init
const app = express();
// create a write stream (in append mode)
const logger = morgan('common', {
    stream: fs.createWriteStream(
        path.join(__dirname, 'access.log'),
        { flags: 'a' }
    )
})

// 3. config
app.disable('etag');
app.disable('x-powered-by');

// 4. middleware
app.use(cors());
app.use(logger)
app.use('/picture', express.static(path.join(__dirname, 'assets/pics')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// 5. routes
app.use('/students', studentsRouter);

// error handling
app.use((err, req, res, next) => {
    console.log(err);
});

app.listen(3000, _ => console.log(`listening port=3000`))