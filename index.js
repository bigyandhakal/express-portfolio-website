const express = require('express');
const app = express();


app.get('/', (res, req)=>{
    req.send('<h1>Hello world</h1>')
})

app.listen(5555)
console.log("App is running on port 5555")