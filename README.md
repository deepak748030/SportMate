# Event Management Website

This project is an Event Management Website built using the MERN (MongoDB, Express, React, Node.js) stack. It includes user authentication, event handling, subscription management, and payment integration, designed to help users manage and participate in various events seamlessly.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features

- **User Authentication**: Sign up, login, and logout functionality for user management.
- **Subscription Management**: Monthly and yearly subscription options.
- **Event Creation & Management**: Allows organizers to create and manage events, including details like date, time, and venue.
- **Role-based Access Control**: Differentiated access for Admin, Organizer, and User roles.
- **Payment Integration**: Secure payments through Stripe for event participation.
- **Real-time Communication**: Using Socket.IO for real-time updates and notifications.

## Prerequisites

Ensure you have the following software installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/)
- [Stripe Account](https://stripe.com/) for payment integration

## Installation

Follow these steps to set up the project:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/deepak748030/SportMate.git
   cd SportMate
   ```

2. **Install dependencies for both client and server**:

   ```bash
   # For client-side dependencies
   cd client
   npm install
   
   # For server-side dependencies
   cd ../server
   npm install
   ```

3. **Set up environment variables**:

   In the `server` directory, create a `.env` file with the following configuration:

   ```plaintext
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   STRIPE_SECRET_KEY=your_stripe_secret_key
   ```

   In the `client` directory, create a `.env` file with the following configuration:

   ```plaintext
   REACT_APP_API_URL=http://localhost:3000/api/v1
   REACT_APP_STRIPE_PUBLIC_KEY=your_stripe_public_key
   ```

## Running the Application

1. **Start the server**:

   ```bash
   cd server
   npm start
   ```

2. **Start the client**:

   ```bash
   cd client
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

## API Endpoints

### Authentication

- `POST /api/v1/auth/register` - Register a new user
- `POST /api/v1/auth/login` - Login a user
- `POST /api/v1/auth/logout` - Logout a user

### Events

- `GET /api/v1/events` - Get all events
- `POST /api/v1/events` - Create a new event
- `GET /api/v1/events/:id` - Get a single event by ID
- `PUT /api/v1/events/:id` - Update an event
- `DELETE /api/v1/events/:id` - Delete an event

### Subscriptions

- `POST /api/v1/subscribe` - Subscribe to a plan (monthly/yearly)

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
