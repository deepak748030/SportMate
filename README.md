
# Event Management Website

This project is an event management website built using the MERN (MongoDB, Express, React, Node.js) stack. It includes functionality for user authentication, subscription management, and event handling.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [File Structure](#file-structure)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)

## Features

- User Authentication (Sign Up, Login, Logout)
- Subscription Management (Monthly, Yearly)
- Event Creation and Management
- Role-based Access Control (Admin, Organizer, User)
- Payment Integration with Stripe

## Prerequisites

Make sure you have the following installed on your system:

- Node.js
- npm (Node Package Manager) or yarn
- MongoDB
- Stripe Account (for payment integration)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/deepak748030/SportMate.git
    cd SportMate
    ```

2. Install dependencies for both the client and server:

    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3. Set up environment variables:

    Create a `.env` file in the `server` directory and add the following:

    ```plaintext
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    STRIPE_SECRET_KEY=your_stripe_secret_key
    ```

    Create a `.env` file in the `client` directory and add the following:

    ```plaintext
    REACT_APP_API_URL=http://localhost:3000/api/v1
    REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
    ```

## Running the Application

1. Start the server:

    ```bash
    cd server
    npm start
    ```

2. Start the client:

    ```bash
    cd client
    npm start
    ```

3. Open your browser and navigate to `http://localhost:3000`

## File Structure

```plaintext
SportMate/
├── client/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   └── package.json
├── server/
│   ├── config/
│   │   ├── db.js
│   │   ├── index.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── eventController.js
│   │   ├── subscriptionController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Event.js
│   │   ├── Subscription.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── eventRoutes.js
│   │   ├── subscriptionRoutes.js
│   ├── middleware/
│   │   ├── authMiddleware.js
│   ├── app.js
│   ├── server.js
│   └── package.json
└── README.md
```

## API Endpoints

### Authentication

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login a user
- `POST /api/v1/auth/logout` - Logout a user

### Events

- `GET /api/v1/events` - Get all events
- `POST /api/v1/events` - Create a new event
- `GET /api/v1/events/:id` - Get a single event
- `PUT /api/v1/events/:id` - Update an event
- `DELETE /api/v1/events/:id` - Delete an event

### Subscriptions

- `POST /api/v1/subscribe` - Subscribe to a plan

## Technologies Used

- **Frontend**: React, Bootstrap, Axios
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Payment Integration**: Stripe
- **Real-time Communication**: Socket.IO

## License

This project is licensed under the MIT License. See the LICENSE file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Stripe](https://stripe.com/)
- [Bootstrap](https://getbootstrap.com/)



