# Amazona ECommerce Website

![hally-amazona](/template/images/hally-amazona.jpg)

## Run Locally

### 1. Clone Repo

```
// Code here
```

### 2. At Root Folder

- Create .env file and copy and paste these codes:
  - JWT_SECRET=somethingsecret
  - PAYPAL_CLIENT_ID=<insert your paypal client id here>
  - MONGODB_URL=<insert url for mongodb>
- Here are instructions how to generate PayPal client ID: https://www.appinvoice.com/en/s/documentation/how-to-get-paypal-client-id-and-secret-key-22

### 3. Run Backend

```
# open new terminal
$ cd backend
$ npm install
$ npm start
```

### 4. Run Frontend

```
# open new terminal
$ cd frontend
$ npm install
$ npm start
```

### 5. Seed Users and Products

- Run this on chrome: http://localhost:5000/api/users/seed
- It seeds users. Check email and password in data.js
- Run this on chrome: http://localhost:5000/api/products/seed
- It creates 6 sample products
