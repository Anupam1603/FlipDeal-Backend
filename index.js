const express = require('express');
const cors = require('cors');
const res = require('express/lib/response');
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

//  ENDPOINT 4

function getDeliveryTime(shippingMethod, distance) {
  if(shippingMethod == "Standard") {
    let estimatedTime = distance / 50;
    return (estimatedTime.toString());
  }
  else if (shippingMethod == "express") {

    let estimatedTime = distance / 100;
    return (estimatedTime.toString());
  } else {
    return (`Please select a valid shipping method!`)
  }
}

app.get('/estimate-delivery', (req,res)=> {
   
  let shippingMethod = req.query.shippingMethod;
  let distance  =parseFloat(req.query.distance);

  res.send(getDeliveryTime(shippingMethod,distance));

})


// ENDPOINT 5
app.get('/shipping-cost', (req,res)=> {
  let weight =parseFloat(req.query.weight);
  let distance = parseFloat(req.query.distance);

  let shippingCost = weight*distance*0.1;
  res.send(shippingCost.toString());

})


//  ENDPOINT 6
app.get('/loyalty-points', (req,res)=> {

  let purchaseAmount = parseFloat(req.query.purchaseAmount);
  let loyaltyPoints = purchaseAmount* loyaltyRate;

  res.send(loyaltyPoints.toString());

})
const PORT = 3000;
app.listen(PORT, ()=> {
  console.log(`Server hitting on PORT: ${PORT}`)
})