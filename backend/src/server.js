const express = require('express');

const app = express();

// GET, POST, PUT, DELETE

app.post('/users',(req, res)=>{
    return res.json({message: "Hello OmniStack"});
})

app.listen(3333);
