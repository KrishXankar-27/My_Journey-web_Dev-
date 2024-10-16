const express = require('express');
const app = express()

app.get('/' ,function(req , res ){
    res.send('hello world00')
})
app.post('/',function (req , res){
    res.send( 'by')
})
app.listen(3000);
