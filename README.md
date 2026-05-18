# Ratify App 


A modern, full-stack web application for managing and collecting store ratings, featuring role-based dashboards for Users, Store Owners, and Administrators.

---

## 🌟 Features

### For Users (Normal)
- Register and log in securely.
- Browse stores and view their average ratings.
- Submit ratings (1-5 stars) and feedback for stores.
- View and modify your submitted ratings.
- Update profile password securely.
- Search stores by name and address.

### For Store Owners
- Access a specialized Store Owner Dashboard.
- Manage assigned stores.
- View real-time average ratings and detailed customer feedback for their stores.
- Search and filter reviews.

### For Administrators
- Comprehensive Admin Dashboard with analytics (total users, stores, ratings).
- Manage the entire ecosystem:
  - Add normal users, store owners, and other administrators.
  - Create new stores and assign them to owners.
  - View sortable and filterable data tables for users and stores.
- Enforces strict data integrity and role-based access control.

---

## 🚀 Technologies Used

### Frontend
- **React.js with Vite**: High-performance rendering and rapid development environment.
- **CSS**: Clean, responsive, and aesthetically pleasing glassmorphism design.
- **React Router**: Seamless client-side routing.

### Backend
- **Node.js & Express.js**: Scalable server-side architecture and RESTful API.
- **MySQL**: Relational database for structured, reliable data storage.
- **JWT (JSON Web Tokens)**: Secure authentication and authorization flows.
- **Bcrypt.js**: Cryptographic password hashing.

---

## 💻 Setup Instructions (Local Development)

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- **MySQL Server** (Ensure it is installed and running locally)

### 1. Database Setup (MySQL)
The application requires a MySQL database.

1. Open your MySQL command line (or MySQL Workbench).
2. Create a new database:
   ```sql
   CREATE DATABASE rating_app;
   ```
3. Import the provided database schema to build the tables:
   ```bash
   mysql -u root -p rating_app < backend/src/schema.sql
   ```
   *(If you use Workbench, open `backend/src/schema.sql`, copy its contents, and execute it).*

### 2. Backend Setup
1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory with your database credentials:
   ```env
   PORT=5000
   JWT_SECRET=your_super_secret_key_here

   # MySQL Database Configuration
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=your_mysql_password
   DB_NAME=rating_app
   DB_PORT=3306
   ```
4. **Seed Initial Test Users (Optional but recommended):**
   To generate default testing accounts (Admin, Owner, User), run:
   ```bash
   node seedMysql.js
   ```
5. Start the backend server:
   ```bash
   npm run start
   ```

### 3. Frontend Setup
1. Open a **new** terminal and navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `frontend` directory:
   ```env
   VITE_API_URL=http://localhost:5000
   ```
4. Start the frontend development server:
   ```bash
   npm run dev
   ```
5. Open `http://localhost:5173` in your browser.

---

## 🧪 Default Test Credentials
If you ran the `seedMysql.js` script in the setup instructions, the following accounts are available for testing role-based features:

| Role        | Email                  | Password   |
| ----------- | ---------------------- | ---------- |
| Admin       | admin@gmail.com        | Pass@123   |
| Store Owner | test@gmail.com         | Pass@123   |
| User        | user@gmail.com         | Pass@123   |

---

## 🔐 Security Features
- **JWT-based authentication**: Stateless, secure sessions.
- **Protected API routes**: Middleware prevents unauthorized access to admin/owner resources.
- **Input validation**: Server-side validation for all incoming data.
- **Secure password handling**: Passwords are never stored in plaintext (Bcrypt hashing).
- **SQL Injection Prevention**: Parameterized queries using `mysql2`.
