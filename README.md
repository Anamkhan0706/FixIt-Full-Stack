\# FixIt – Full-Stack Home Services Booking Platform



FixIt is a full-stack web application that connects customers with local service professionals. Customers can explore available professionals, book home services, track booking status, and review completed work. Professionals can manage customer orders, update booking statuses, and monitor their earnings.



The project demonstrates frontend and backend integration, RESTful API development, database connectivity, authentication, authorization, input validation, and automated testing.



\## Project Features



\### Customer Features



\* Register and log in securely.

\* Browse available service professionals.

\* Search and explore home services.

\* View professional profiles, service descriptions, experience, locations, prices, and ratings.

\* Book home services by selecting a date and time.

\* Provide service addresses and describe the work required.

\* View bookings and track their status.

\* Cancel eligible bookings.

\* Submit ratings and reviews for completed bookings.

\* View reviews associated with service professionals.



\### Professional Features



\* Register and log in as a service professional.

\* View customer orders.

\* Accept and manage bookings by updating their status.

\* Track pending and completed jobs.

\* View total earnings.

\* Review earnings history, including completed services and their amounts.



\### Security and Validation



\* JWT-based authentication.

\* Password hashing using bcryptjs.

\* Role-based access control for customers and professionals.

\* Server-side input validation.

\* Booking ownership checks.

\* Protection against unauthorized booking updates.

\* Environment variables for configuration and secrets.



\## Technologies Used



\### Frontend



\* React

\* Vite

\* React Router

\* Tailwind CSS

\* Lucide React

\* JavaScript

\* Fetch API



\### Backend



\* Node.js

\* Express.js

\* MongoDB

\* Mongoose

\* JSON Web Tokens (JWT)

\* bcryptjs

\* express-validator



\### Testing and Development



\* Jest

\* Supertest

\* Git and GitHub

\* MongoDB Atlas



\## Project Structure



```text

FixIt-Full-Stack/

├── backend/

│   ├── src/

│   │   ├── config/

│   │   ├── controllers/

│   │   ├── middleware/

│   │   ├── models/

│   │   ├── routes/

│   │   ├── app.js

│   │   └── server.js

│   ├── tests/

│   ├── docs/

│   │   └── API.md

│   ├── .env.example

│   ├── package.json

│   └── README.md

├── frontend/

│   ├── src/

│   │   ├── components/

│   │   ├── context/

│   │   ├── data/

│   │   ├── pages/

│   │   ├── App.jsx

│   │   ├── index.css

│   │   └── main.jsx

│   ├── package.json

│   └── README.md

├── .gitignore

└── README.md

```



\## Prerequisites



Install the following before running the project:



\* Node.js and npm

\* MongoDB Atlas account or an accessible MongoDB database

\* Git



\## Installation and Setup



\### 1. Clone the Repository



```bash

git clone https://github.com/Anamkhan0706/FixIt-Full-Stack.git

cd FixIt-Full-Stack

```



\### 2. Configure the Backend



Open a terminal in the project directory and run:



```bash

cd backend

npm install

```



Create a `.env` file inside the `backend` directory using `.env.example` as a reference.



Configure the environment variables required by the backend, including:



```env

PORT=5000

MONGO\_URI=your\_mongodb\_connection\_string

JWT\_SECRET=your\_secure\_jwt\_secret

```



Use the actual variable names shown in `backend/.env.example`. Replace example values with your own configuration. Never commit your real `.env` file, database credentials, or JWT secret.



Start the backend:



```bash

npm start

```



The backend should start on port 5000 when configured correctly and should connect to MongoDB successfully.



\### 3. Configure the Frontend



Open a second terminal in the project directory:



```bash

cd frontend

npm install

```



Create a `.env` file inside the `frontend` directory with the following API URL:



```env

VITE\_API\_URL=http://localhost:5000/api

```



Start the frontend:



```bash

npm run dev

```



Open the local URL printed by Vite in your terminal, usually:



```text

http://localhost:5173

```



Keep both the backend and frontend running while using the local application.



\## API Overview



The backend exposes RESTful API endpoints for authentication, service professionals, bookings, and reviews.



The API base URL in local development is:



```text

http://localhost:5000/api

```



The main API areas include:



\* \*\*Authentication:\*\* registration and login.

\* \*\*Professionals:\*\* listing and retrieving service professional information.

\* \*\*Bookings:\*\* creating, retrieving, updating, and deleting authorized bookings.

\* \*\*Reviews:\*\* submitting reviews for completed bookings and retrieving professional reviews.



Refer to `backend/docs/API.md` and the backend route files for the exact endpoint paths, request bodies, authentication requirements, and response formats.



\## Testing



The backend automated test suite uses Jest and Supertest.



To run the backend tests:



```bash

cd backend

npm test

```



The test suite was run during development and passed \*\*26 tests across 3 test suites\*\*. Test results may vary if the code, configuration, database setup, or dependencies change.



The frontend production build can be checked using:



```bash

cd frontend

npm run build

```



\## Frontend and Backend Integration



The React frontend communicates with the Express backend through HTTP requests using the Fetch API. The backend processes requests, applies validation and authorization rules, interacts with MongoDB through Mongoose, and returns JSON responses.



JWT authentication supports protected operations. Booking and review workflows connect customer actions with professional operations and stored database records.



The application includes booking status management, professional earnings history, and customer reviews, providing an integrated full-stack workflow.



\## Error Handling and Best Practices



The project incorporates:



\* Centralized backend error-handling middleware.

\* Request validation.

\* Authentication and role-based authorization.

\* Booking ownership checks.

\* Environment-based configuration.

\* Separation of routes, controllers, models, and middleware.

\* Automated backend tests.

\* Git ignore rules for dependencies, build output, and sensitive environment files.



\## Future Improvements



Potential enhancements include:



\* Online payment integration.

\* Email and in-app notifications.

\* Advanced search and filtering.

\* Professional availability calendars.

\* Deployment with production environment configuration.

\* Additional frontend automated tests.

\* Administrative reporting and service management.



\## Repository



\*\*GitHub:\*\* https://github.com/Anamkhan0706/FixIt-Full-Stack



\## Conclusion



FixIt demonstrates the development of a full-stack home-services booking platform using React, Node.js, Express, and MongoDB. It brings together authentication, professional discovery, booking management, reviews, earnings tracking, API integration, validation, and automated testing in one project.



