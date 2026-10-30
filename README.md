# FixIt – Full-Stack Home Services Booking Platform

## 1. Project Overview

FixIt is a full-stack web application that connects customers with local home-service professionals. Customers can explore professionals, book services, track booking status, and review completed work. Professionals can manage customer orders, update booking statuses, and monitor their earnings.

The project demonstrates full-stack development using React, Node.js, Express.js, and MongoDB. It integrates frontend and backend APIs, authentication, authorization, database operations, validation, and automated testing.

**GitHub Repository:** https://github.com/Anamkhan0706/FixIt-Full-Stack

## 2. Project Objectives

* Develop a responsive frontend for a home-services booking platform.
* Build RESTful APIs for authentication, professionals, bookings, and reviews.
* Integrate the frontend with the backend.
* Store and retrieve application data using MongoDB.
* Implement secure authentication and role-based authorization.
* Validate incoming requests and protect booking operations.
* Test backend functionality using automated tests.
* Provide a clear setup and installation guide.

## 3. Key Features

### Customer Features

* Register and log in.
* Browse and search for service professionals.
* View professional profiles, services, experience, locations, prices, and ratings.
* Book services by selecting a date and time.
* Provide a service address and describe the work required.
* View bookings and track their status.
* Cancel eligible bookings.
* Submit ratings and reviews for completed bookings.
* Read reviews submitted by other customers.

### Professional Features

* Register and log in as a service professional.
* View customer orders.
* Accept and manage bookings.
* Update booking statuses.
* View pending and completed jobs.
* Monitor total earnings.
* View earnings history, including completed services and their amounts.

### Security and Validation

* JWT-based authentication.
* Password hashing using bcryptjs.
* Role-based access control.
* Server-side request validation.
* Booking ownership verification.
* Restrictions on unauthorized booking updates.
* Environment variables for configuration and sensitive credentials.
* Centralized backend error handling.

## 4. Technologies Used

### Frontend

* React
* Vite
* React Router
* Tailwind CSS
* Lucide React
* JavaScript
* Fetch API

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JSON Web Tokens (JWT)
* bcryptjs
* express-validator

### Testing and Development

* Jest
* Supertest
* Git
* GitHub
* MongoDB Atlas
* npm

## 5. Project Structure

```text
FixIt-Full-Stack/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
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
│   ├── package-lock.json
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
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
├── .gitignore
└── README.md
```

## 6. Prerequisites

Before running the application, install:

* Node.js and npm.
* Git.
* Access to MongoDB Atlas or another compatible MongoDB database.
* A web browser.

## 7. Installation and Setup

### Step 1: Clone the Repository

Open a terminal and run:

```bash
git clone https://github.com/Anamkhan0706/FixIt-Full-Stack.git
cd FixIt-Full-Stack
```

### Step 2: Configure and Start the Backend

Open a terminal in the project directory and run:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` directory. Use `backend/.env.example` as the reference for the required environment variables.

Configure the database connection, server port, and JWT secret using the variable names required by the backend configuration.

For example, the configuration may contain:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secure_jwt_secret
```

**Important:** Check `backend/.env.example` for the exact variable names used by the application. Replace the example values with your own configuration. Never publish database credentials or real JWT secrets.

Start the backend:

```bash
npm start
```

When the configuration is correct, the backend should start on port 5000 and connect to MongoDB successfully.

### Step 3: Configure and Start the Frontend

Open a second terminal in the project directory and run:

```bash
cd frontend
npm install
```

Create a `.env` file inside the `frontend` directory containing:

```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend:

```bash
npm run dev
```

Vite will display a local development URL in the terminal. It is usually:

```text
http://localhost:5173
```

Open that address in your browser.

Keep both the backend and frontend running while using the application.

## 8. API Overview

The backend provides RESTful APIs for the main application features.

**Local API base URL:**

```text
http://localhost:5000/api
```

### Main API Areas

| API Area | Purpose |
|---|---|
| Authentication | User registration and login |
| Professionals | Retrieve service professional information |
| Bookings | Create, retrieve, update, and delete authorized bookings |
| Reviews | Submit reviews for completed bookings and retrieve professional reviews |

Protected endpoints use authentication middleware. Role-based restrictions and validation help prevent unauthorized operations.

For exact endpoint paths, request formats, and response examples, refer to `backend/docs/API.md` and the backend route files.

## 9. Frontend and Backend Integration

The React frontend communicates with the Express backend using HTTP requests through the Fetch API.

The integration follows this workflow:

1. A customer or professional performs an action in the frontend.
2. The frontend sends a request to the appropriate backend API.
3. The backend validates the request and checks authentication and authorization where required.
4. Controllers execute the relevant application logic.
5. Mongoose interacts with MongoDB when database operations are required.
6. The backend returns a JSON response.
7. The frontend updates the interface based on the response.

This integration supports dynamic professional listings, booking management, booking status updates, earnings history, and customer reviews.

## 10. Authentication and Authorization

The application uses JWT-based authentication to protect authorized operations.

Passwords are hashed using bcryptjs before being stored in the database.

Role-based authorization distinguishes customers from service professionals and restricts access to appropriate operations.

The backend also applies booking ownership checks and prevents users from changing protected booking fields through unauthorized updates.

## 11. Booking Management

The booking workflow connects customers and service professionals.

Customers can submit service requests with a service, date, time, address, and description of the issue. Professionals can view incoming orders and update their statuses.

Booking statuses include:

* Pending
* Confirmed
* Completed
* Cancelled

The backend validates booking operations and applies access restrictions based on the user's role and relationship to the booking.

## 12. Reviews and Ratings

Customers can submit reviews for completed bookings.

The review system includes:

* A rating between 1 and 5.
* A written comment.
* A relationship to the relevant booking, customer, and professional.
* Prevention of duplicate reviews for the same booking.
* Verification that the booking belongs to the customer and has been completed.
* Recalculation of the professional's rating based on submitted reviews.

Reviews can be retrieved for display on professional profiles.

## 13. Professional Earnings History

The professional dashboard displays earnings information derived from completed bookings.

It includes total earnings, completed job counts, pending orders, and an earnings history showing completed services and their amounts.

This feature helps professionals review their completed work and monitor their earnings.

## 14. Testing

The backend uses Jest and Supertest for automated testing.

To run the backend tests:

```bash
cd backend
npm test
```

The latest verified backend test run passed **29 tests across 3 test suites** using:

```bash
npm test -- --runInBand
```

The suites cover authentication, bookings, and professionals. The frontend was previously verified with a successful Vite production build and four frontend tests. Those frontend results are from the earlier Week 5 verification.

To verify that the frontend can be built for production:

```bash
cd frontend
npm run build
```

The frontend production build completed successfully during development.

## 15. Error Handling and Best Practices

The project incorporates:

* Separation of routes, controllers, models, and middleware.
* Centralized backend error handling.
* Server-side input validation.
* JWT authentication.
* Role-based authorization.
* Booking ownership verification.
* Environment-based configuration.
* Git ignore rules for dependencies, build files, and sensitive environment variables.
* Automated backend tests.
* Separate frontend and backend configuration.

These practices improve maintainability, security, and reliability.

## 16. Challenges and Solutions

### Challenge 1: Frontend and Backend Integration

**Challenge:** The frontend needed to communicate with the backend APIs and display real application data.

**Solution:** Configured the frontend API base URL and integrated HTTP requests with the backend endpoints.

### Challenge 2: Authentication and Role-Based Access

**Challenge:** Customers and professionals require different permissions.

**Solution:** Implemented JWT-based authentication and role-based middleware to restrict protected operations.

### Challenge 3: Booking Security

**Challenge:** Booking updates needed to prevent unauthorized users from modifying bookings or protected fields.

**Solution:** Added booking ownership checks, role-specific update restrictions, and request validation.

### Challenge 4: Reviews and Ratings

**Challenge:** Reviews needed to be associated with valid completed bookings and the correct professional.

**Solution:** Added booking validation, duplicate-review prevention, and professional rating recalculation.

### Challenge 5: Reliable Application Behavior

**Challenge:** Core backend operations needed to be verified after development changes.

**Solution:** Used Jest and Supertest to test backend behavior and verified the frontend production build.

## 17. Future Enhancements

Potential future improvements include:

* Online payment integration.
* Email and in-app notifications.
* Advanced search and filtering.
* Professional availability calendars.
* Additional production improvements and monitoring.
* Additional frontend automated tests.
* Administrative reporting and service management.

These are proposed enhancements and are not represented as currently implemented features.

## 18. Repository Information

**Project:** FixIt – Full-Stack Home Services Booking Platform

**GitHub Repository:** https://github.com/Anamkhan0706/FixIt-Full-Stack

**Frontend:** React, Vite, Tailwind CSS

**Backend:** Node.js, Express.js, MongoDB

## 19. Conclusion

FixIt demonstrates the development and public deployment of a full-stack home-services booking platform using React, Node.js, Express.js, and MongoDB. It integrates professional discovery, customer bookings, professional order management, earnings tracking, ratings, and reviews.

The project also demonstrates RESTful API integration, JWT authentication, role-based authorization, request validation, error handling, automated backend testing, and deployment using Vercel, Render, and MongoDB Atlas. The combined repository contains the frontend and backend source code, documentation, configuration examples, and test files in one place.

## 20. Production Deployment

FixIt is publicly deployed using separate hosting services for the frontend and backend.

| Component | Hosting | Production URL |
|---|---|---|
| Frontend | Vercel | https://fix-it-full-stack.vercel.app/ |
| Backend API | Render | https://fixit-backend-qm74.onrender.com/api |
| Database | MongoDB Atlas | Managed database; connection details are private |

### Production Architecture

The React/Vite frontend is deployed on Vercel. It sends API requests to the Express backend deployed on Render. The backend connects to MongoDB Atlas for persistent data storage.

### Frontend Deployment (Vercel)

1. Import the GitHub repository into Vercel.
2. Set the project root directory to `frontend`.
3. Configure the Vite build command as `npm run build` and the output directory as `dist`.
4. Add the production environment variable `VITE_API_URL` with the value:

   `https://fixit-backend-qm74.onrender.com/api`

5. Deploy or redeploy the project after changing environment variables, because Vite embeds them during the build.
6. Open the public frontend and verify that login and API-backed pages work.

### Backend Deployment (Render)

1. Create a Render Web Service connected to the GitHub repository.
2. Set the root directory to `backend`.
3. Use `npm install` as the build command and `npm start` as the start command.
4. Configure `MONGO_URI` and `JWT_SECRET` in Render's environment settings. Use the hosting platform's `PORT` value where applicable.
5. Deploy and inspect the service logs. Confirm that the server starts and MongoDB connects successfully.
6. Configure the frontend to use the deployed API base URL.

### Production Environment Variables

| Variable | Service | Purpose |
|---|---|---|
| `VITE_API_URL` | Vercel frontend | Backend API base URL, including `/api` |
| `MONGO_URI` | Render backend | MongoDB Atlas connection URI |
| `JWT_SECRET` | Render backend | Secret used for JWT signing and verification |
| `PORT` | Render backend | HTTP port supplied/configured by the hosting platform |

**Security:** Actual values for `MONGO_URI` and `JWT_SECRET` must never be committed to GitHub or included in screenshots, issue reports, or public documentation. Store them in the hosting provider's environment-variable settings. The repository's `.env.example` files should contain placeholders only.

### Deployment Troubleshooting

- **Frontend cannot reach the API:** Check `VITE_API_URL`, confirm it ends in `/api`, verify the backend is running, and confirm the backend CORS configuration permits the deployed frontend origin. Redeploy the frontend after changing the variable.
- **Backend does not start:** Check the Render logs, root directory, build command, start command, and required environment variables.
- **MongoDB connection fails:** Verify the private `MONGO_URI`, database user permissions, and MongoDB Atlas network access configuration.
- **First request is slow:** A free hosting instance may sleep after inactivity and take time to start. Retry after the service wakes and inspect logs if it remains unavailable.
- **Authentication returns 401:** Sign in again and verify that the request includes a valid bearer token. Never share the token publicly.
- **Latest changes are missing:** Confirm the intended Git branch and commit were deployed. Rebuild the frontend after changing Vite environment variables.

## 21. Production Verification and Maintenance

### Production Verification

The public frontend was opened successfully, and a user was able to log in and reach the home page. The deployed backend was reachable. An unauthenticated request to the protected account-deletion endpoint returned HTTP `401`, as expected when a valid authentication token is not provided.

The backend test suite passed 29 tests across 3 suites. The account-deletion feature is restricted to authenticated customers and prevents deletion when related booking, review, or professional records exist. Automated tests cover unauthenticated access, successful deletion in the test database, and rejection of professional-account deletion. No production account was deleted during verification.

### Maintenance Checklist

- Review Render and Vercel deployment logs after each release.
- Run backend tests and the frontend production build before deploying changes.
- Check the public site and key customer/professional workflows after deployment.
- Keep secrets in hosting environment settings and rotate them if exposure is suspected.
- Review dependency audit findings and apply updates carefully, followed by tests.
- Review MongoDB Atlas network access and use least-privilege database credentials.
- Verify which backup and recovery features are enabled for the Atlas plan; perform restore tests before relying on backups.
- Avoid logging passwords, JWTs, database URIs, or other sensitive values.

The latest Render deployment log reported seven dependency audit findings (five low, one moderate, and one high). These should be reviewed and resolved through tested dependency updates. MongoDB Atlas backup settings should also be checked directly; this README does not claim that a particular backup schedule is enabled.

## 22. Demo

**Live Application:** https://fix-it-full-stack.vercel.app/

**Demo Video:** https://drive.google.com/file/d/15f7GmtvdU96wlR0Bv32bj3HPDyM9VReP/view?usp=drive_link

Make sure the video sharing permission allows the evaluator to view it.

## 23. Repository and Submission Links

- **GitHub repository:** https://github.com/Anamkhan0706/FixIt-Full-Stack
- **Live frontend:** https://fix-it-full-stack.vercel.app/
- **Backend API:** https://fixit-backend-qm74.onrender.com/api
- **Demo video:** https://drive.google.com/file/d/15f7GmtvdU96wlR0Bv32bj3HPDyM9VReP/view?usp=drive_link