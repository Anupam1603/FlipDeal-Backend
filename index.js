const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

//server side values
let taxRate = 5; //5%
let discountPercentage = 10; // 10%
let loyaltyRate = 2; //2 pts per $1

app.get('/cart-total', (req,res)=> {
  let newItemPrice =parseFloat( req.query.newItemPrice);
  let cartTotal = parseFloat( req.query.cartTotal);

  let totalCartValue = newItemPrice+cartTotal;
  res.send(totalCartValue.toString());

})

const PORT = 3000;
app.listen(PORT, ()=> {
  console.log(`Server hitting on PORT: ${PORT}`)
})