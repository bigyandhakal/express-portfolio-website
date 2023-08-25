const express = require('express');
const app = express();


app.get('/', (res, req)=>{
    req.send('Hello world')
})

app.listen(5555)
console.log("App is running on port 5555")