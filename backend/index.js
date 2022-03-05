const express = require("express");
const app = express();
const {spawn} = require('child_process');
const cors = require("cors");
app.use(cors());
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.post('/getText', function(req, res) {
    let text = req.body.text;
    console.log(text);

    let Result;
    // spawn new child process to call the python script
    const python = spawn('python', ['./script.py',text]); //
        // collect data from script
    python.stdout.on('data', function (data) {
        console.log('python script launch')
        Result = data.toString();
        console.log(Result);

    });

    python.stderr.on('data', (data) => {
        console.error('err: ', data.toString());
    });
      
    python.on('error', (error) => {
        console.error('error: ', error.message);
    });

        // in close event we are sure that stream from child process is closed
    python.on('close', (code) => {
    console.log(`child process close all stdio with code ${code}`);
        // send data to browser
    res.send(Result)
    });
});

const PORT = process.env.PORT || 8083;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});