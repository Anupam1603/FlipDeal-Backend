const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

//server side values
let taxRate = .05; //5%
let discountPercentage = .10; // 10%
let loyaltyRate = 2; //2 pts per $1

//  ENDPOINT 1
app.get('/cart-total', (req,res)=> {

  let newItemPrice =parseFloat( req.query.newItemPrice);
  let cartTotal = parseFloat( req.query.cartTotal);

  let totalCartValue = newItemPrice+cartTotal;
  res.send(totalCartValue.toString());

})

//  ENDPOINT 2
app.get('/membership-discount', (req,res)=> {

  let cartTotal =parseFloat(req.query.cartTotal);
  let isMember = req.query.isMember === "true";
 //if member
  if(isMember) {
    let result = cartTotal - (cartTotal*discountPercentage);
    res.send(result.toString());
  }
  //if not member 
  else {
    res.send(cartTotal.toString());
  }
});

//  ENDPOINT 3

app.get('/calculate-tax', (req,res)=> {

  let cartTotal  =parseFloat(req.query.cartTotal);
  let result =  (cartTotal*taxRate);

  res.send(result.toString());


})






const PORT = 3000;
app.listen(PORT, ()=> {
  console.log(`Server hitting on PORT: ${PORT}`)
})