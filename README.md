# Shopping Application


[](https://github.com/user-attachments/assets/1de6b0ec-a9bd-45cc-8144-389946d11dcf)

This is a shopping application built with React and Vite. It allows users to browse products, add them to a cart, and proceed to checkout. The application also supports filtering products based on various criteria such as price, stock availability, delivery options, and ratings.

## Features

- Browse products with images, prices, and ratings
- Add products to the cart
- Remove products from the cart
- Adjust product quantities in the cart
- Filter products by price, stock availability, delivery options, and ratings
- Search for products by name
- View order details and recent orders
- Checkout with Razorpay integration

## Technologies Used

- React
- Vite
- React Bootstrap
- React Router Dom
- Axios
- Razorpay
- Faker.js
- Context api
- Node.js
- Express.js

## Installation

### Prerequisites

- Ensure you have [Node.js](https://nodejs.org/) installed on your machine. You can download it from [here](https://nodejs.org/).

### Steps

1. **Initialize a new Node.js project**

   Open your terminal and run the following command to create a new Node.js project:

   ```bash
   npm init -y
   ```

- This will create a package.json file in your project directory.

2. Install Express.js

   - Run the following command to install Express.js:

   ```
   npm install express
   ```

3. Create a basic Express server

   - Create a new file named server.js and add the following code to set up a basic Express server:

```
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.send('Hello World!');
});

app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});
```
