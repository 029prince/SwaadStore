SwaadStore: A MERN Stack Grocery Ordering Web Application
"Bringing the taste of freshness to your doorstep."
SwaadStore is a modern, full-stack e-commerce application for ordering groceries online. Built with the MERN (MongoDB, Express, React, Node.js) stack, it offers a seamless and intuitive user experience for browsing products, managing a cart, and placing orders. The name "Swaad" is derived from Hindi, meaning "taste," which perfectly encapsulates the project's goal of delivering a flavorful and fresh experience.

✨ Key Features
Product Catalog: Browse a wide variety of groceries displayed in a clean, categorized layout.

User Authentication: Secure user registration and login using JSON Web Tokens (JWT) for a protected experience.

Shopping Cart: A dynamic cart system that allows you to effortlessly add, update, and remove items.

Search & Filters: A powerful search bar and filtering options to help you find exactly what you're looking for, fast.

Order Management: A dedicated section for users to view past orders and track their status in real-time.

Responsive Design: A mobile-first approach ensuring a great user experience on any device, from a smartphone to a desktop.

🛠️ Tech Stack
This project is powered by the robust MERN stack, built using Vite as a build tool and styled with Tailwind CSS.

Area

Technology

Description

Frontend

React.js

A JavaScript library for building the user interface.



React Router

For handling seamless navigation and routing.



Axios

A promise-based HTTP client for making API requests.



React Hot Toast

A library for beautiful and accessible toast notifications.



Tailwind CSS

A utility-first CSS framework for rapid and responsive UI development.

Backend

Node.js

A JavaScript runtime for the server-side logic.



Express.js

A fast and minimalist web framework for building the API.



MongoDB

A NoSQL database for storing product, user, and order data.



Mongoose

An elegant MongoDB object modeling tool.



JSON Web Tokens (JWT)

For secure and stateless user authentication.

🚀 Getting Started
Prerequisites
Make sure you have the following installed:

Node.js (v14 or higher)

npm (v6 or higher) or yarn

MongoDB (running locally or a cloud service like MongoDB Atlas)

Installation Steps
Clone the repository:

git clone [https://github.com/your-username/SwaadStore.git](https://github.com/your-username/SwaadStore.git)
cd SwaadStore

Setup the Backend:

cd backend
npm install

Create a .env file in the backend directory with your environment variables:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=a_strong_secret_key

Start the backend server:

npm start

Setup the Frontend:

cd ../frontend
npm install

Create a .env file in the frontend directory:

VITE_CURRENCY='Rs.'
VITE_BACKEND_URL="[https://swaad-store.vercel.app/](https://swaad-store.vercel.app/)"

Start the frontend development server:

npm start

The application should now be running and accessible at http://localhost:3000.

📂 Project Structure
The project has a clear and organized folder structure for easy navigation and maintenance.

SwaadStore/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # API controllers
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API routes
│   ├── server.js        # Main server file
│   └── package.json     # Backend dependencies
└── frontend/
    ├── public/          # Static assets
    ├── src/             # Frontend source code
    │   ├── components/  # Reusable React components
    │   ├── pages/       # Page components
    │   ├── context/     # State management context
    │   ├── services/    # API service calls
    │   └── App.js       # Main application component
    └── package.json     # Frontend dependencies

🗺️ Roadmap & Future Enhancements
Payment Gateway Integration: Implement secure payment processing using platforms like Stripe or Razorpay.

User Ratings & Reviews: Allow customers to provide feedback and rate products.

Admin Dashboard: Develop a comprehensive admin panel to manage products, orders, and users.

Cloud Deployment: Deploy the application to a cloud platform like Heroku or Vercel for live access.

📄 License
This project is licensed under the MIT License. See the LICENSE file for details.

Made with ❤️ by Prince Kumar
