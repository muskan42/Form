# Welcome 🌟

## 🚀 Tech Stack
- **React.js**: A JavaScript library for building user interfaces.
- **SQL:** Database Language
- **Express.js:** Node.js Web Framework
- **Node.js:** JavaScript Runtime 
- **PHP:** Server-Side Scripting 

---

## 🚀 Quick Start
Let's get you started!

---

## 📦 Installation

You can clone the project directly from this repo to your local system.

### 1. Clone the Repo

```bash
git clone https://github.com/muskan42/Form.git
```

### 2. Install Dependencies

```bash
npm install
```

## Start Development Server

```bash
cd app.js
npm run start
```

## To View Data on Excel

visit http://localhost:8081/exportToExcel/

Click refresh to view newly added entries.

---

# Assignment Task

Here's a breakdown of the assignment points for easy understanding:

## Major Locations:

* **Frontend:**
    * `Form/Frontend/app.js/src/signup.js` & `Form/Frontend/app.js/src/home.js` - Signup form files.
* **Backend:**
    * `Form/Backend/server.js` - Handles form data processing.

## Tasks:

* **Interface:**
    * Webpage built in `home.js`.
* **Forms:**
    * Two signup forms: `signup.js` and `signup1.js`.
* **Form Details:**
    * within the signup pages (line 48)
    * Dropdown for Country Code (line 59).
* **Form Validation:**
    * By `const validate` function (line 34) and `useEffect` (line 28) .
* **Phone Number Validation:**
    * `phone-number-formatter.js` validates phone number format based on country code (e.g., +91 X XXXX XXXX for India).
        * It translates the format (X=any digit, XXX=3 digits) to a pattern and checks if the number matches (e.g., +91 1234 567890).
        * Returns the original number if valid, otherwise an empty string.
* **Database:**
    * MySQL database managed by phpMyAdmin.
    * `server.js` fetches form data (type, name, country code, phone number) (line 16).
* **Data Synchronization:**
    * `exportToExcel` folder for exporting data to Excel sheets.
    * Refresh button (`index.php` line 9) and `export.php` triggers the export.
* **Version Control:**
    * Git used for version control with a provided GitHub link.

## Installations: 
(throughout the project)

* Backend dependencies: `npm install express mysql cors nodemon`
* Frontend setup:
    * `npx create-react-app Frontend` to create the React app.
    * `npm i react-router-dom` to install React Router ( for navigation).

---

<div align="center">
  <h2>Hope you find it interesting! 💻🌟</h2>
</div>
