const express = require('express');

let app = express();


function what_is_age(age){
    if (age >= 18) {
        return true;
    } else {
        return false
    }
}

app.get('/' ,function(req , res ){
  if(what_is_age(req.query.what_is_age)) {
    res.json({
        msg: "you are eligable",
     })
  }
  else {
    res.status(404).json({
        msg : "sorry you are not elijable"
    })
  }
})
app.listen(3000);


