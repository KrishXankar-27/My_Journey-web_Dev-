const express = require('express');
const app = express();

let user = [{
   name: "rohit",
   kidney: [{
      helthy: false,
   }, {
      helthy: true,
   }]
}]

app.get("/", function (req, res) {
   const rohitkidney = user[0].kidney;
   let rohitkidneys_amm = rohitkidney.length;

   let helthykidney = 0;
   for (let i = 0; i < rohitkidneys_amm; i++) {
      if (rohitkidney[i].helthy) {
         helthykidney = helthykidney + 1;
      }
   }
   
   let unhelthykidney = rohitkidneys_amm - helthykidney;

   res.json({
      rohitkidneys_amm,
      helthykidney,
      unhelthykidney
   });
});

app.listen(3000, () => {
   console.log('Server is running on port 3000');
});
