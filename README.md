

# FlipDeal Backend - Cart API

## Introduction

FlipDeal is an eCommerce company dealing with fitness products and offers a “Prime Membership” program that provides discounts to members. The backend API for the cart page includes functionality for calculating total cart values, applying discounts, calculating taxes, and other related actions.

## Objectives

The backend APIs are designed to handle the following actions for FlipDeal's cart page:

1. **Calculate the total price of items in the cart**
2. **Apply a discount based on membership status**
3. **Calculate tax on the cart total**
4. **Estimate delivery time based on shipping method**
5. **Calculate the shipping cost based on weight and distance**
6. **Calculate loyalty points earned from a purchase**

## API Endpoints

Below are the API endpoints created for FlipDeal's cart functionality:

### 1. **Calculate Total Cart Price**
**Endpoint:** `/cart-total`
- **Method:** GET
- **Query Parameters:** 
  - `newItemPrice` (float) - The price of the newly added item
  - `cartTotal` (float) - The current total of the cart
- **Expected Output:** Total price after adding the new item to the cart.
- **Example API Call:**  
  `http://localhost:3000/cart-total?newItemPrice=1200&cartTotal=0`
- **Expected Response:**  
  `1200`

### 2. **Apply a Discount Based on Membership Status**
**Endpoint:** `/membership-discount`
- **Method:** GET
- **Query Parameters:** 
  - `cartTotal` (float) - The total amount of the cart
  - `isMember` (boolean) - Membership status (`true` for members, `false` for non-members)
- **Expected Output:** Final price after applying the discount (10% discount for members).
- **Example API Call:**  
  `http://localhost:3000/membership-discount?cartTotal=3600&isMember=true`
- **Expected Response:**  
  `3240`

### 3. **Calculate Tax on the Cart Total**
**Endpoint:** `/calculate-tax`
- **Method:** GET
- **Query Parameters:** 
  - `cartTotal` (float) - The total amount of the cart
- **Expected Output:** Tax amount applied to the cart.
- **Example API Call:**  
  `http://localhost:3000/calculate-tax?cartTotal=3600`
- **Expected Response:**  
  `180`

### 4. **Estimate Delivery Time Based on Shipping Method**
**Endpoint:** `/estimate-delivery`
- **Method:** GET
- **Query Parameters:** 
  - `shippingMethod` (string) - The shipping method (`Standard` or `Express`)
  - `distance` (float) - The distance in kilometers for delivery
- **Expected Output:** Delivery time in days.
- **Example API Call:**  
  `http://localhost:3000/estimate-delivery?shippingMethod=express&distance=600`
- **Expected Response:**  
  `6`

### 5. **Calculate Shipping Cost Based on Weight and Distance**
**Endpoint:** `/shipping-cost`
- **Method:** GET
- **Query Parameters:** 
  - `weight` (float) - The weight of the package in kilograms
  - `distance` (float) - The distance in kilometers for delivery
- **Expected Output:** Shipping cost calculated as `weight * distance * 0.1`.
- **Example API Call:**  
  `http://localhost:3000/shipping-cost?weight=2&distance=600`
- **Expected Response:**  
  `120`

### 6. **Calculate Loyalty Points Earned from a Purchase**
**Endpoint:** `/loyalty-points`
- **Method:** GET
- **Query Parameters:** 
  - `purchaseAmount` (float) - The total amount spent in the purchase
- **Expected Output:** Loyalty points calculated as `purchaseAmount * 2`.
- **Example API Call:**  
  `http://localhost:3000/loyalty-points?purchaseAmount=3600`
- **Expected Response:**  
  `7200`

## Requirements

To run this project, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

### Steps to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/flipdeal-backend.git
