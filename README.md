Absolutely. Since you want the **README to include your deployed Attendify URL**, here is the updated version based on the actual file and the live deployment. The deployed page is titled **“Attendify — attendance, kept honest.”** ([sunny-file-mover.lovable.app][1])

# Attendify — Attendance, Kept Honest

## 📌 Overview

**Attendify** is a smart attendance tracking and analytics web application designed to help students monitor their attendance across multiple courses.

It allows users to set an attendance target, add courses, record daily attendance, calculate attendance percentages, analyze attendance trends, and determine how many classes they need to attend—or can safely miss—to remain above their target. 

## 🌐 Live Demo

**Try Attendify online:**

[Attendify — Live Demo](https://sunny-file-mover.lovable.app/?utm_source=chatgpt.com)

---

## ✨ Features

### 📊 Dashboard

* Overall attendance percentage
* Present and absent class statistics
* Attendance target tracking
* Course-wise attendance
* Visual attendance indicators
* Quick **Present / Absent** buttons
* Calculates classes needed to reach the target
* Calculates classes that can be missed while staying above the target 

### 📚 Course Management

* Add courses
* View course-wise attendance
* Remove courses
* Automatically remove associated attendance records when a course is deleted 

### 📝 Attendance Records

* Record attendance by date
* Mark classes as:

  * Present
  * Absent
  * Cancelled
* Delete attendance records
* Undo today's attendance entry 

### 📈 Analytics

* Attendance by course
* Attendance trend
* Monthly attendance calendar
* Present/Absent/Cancelled indicators
* Course-wise attendance breakdown
* Target-based attendance insights 

### 🎯 Attendance Target

Users can configure their required attendance target between **50% and 100%**. 

Attendify calculates:

```text
Attendance % =
(Present Classes / (Present + Absent Classes)) × 100
```

It also determines the number of classes required to reach the target or the number of classes that can be missed while maintaining the target. Cancelled classes are excluded from the attendance calculation. 

---

## 👤 Authentication

Attendify includes:

* User registration
* Login
* Forgot password
* OTP-based demo recovery flow
* Session management
* Logout
* Demo account 

### Demo Account

```text
Email: demo@attendify.app
Password: demo1234
```

The demo account contains sample courses and attendance history. 

---

## 🌙 Dark Mode

Attendify supports both **Light Mode** and **Dark Mode**. The selected theme is saved in the browser so the preference persists between sessions. 

---

## 🧭 Application Sections

```text
Attendify
│
├── Dashboard
│   └── Overall & course attendance
│
├── Records
│   └── Attendance history
│
├── Analytics
│   └── Charts, trends & calendar
│
└── Profile
    ├── Personal details
    ├── Attendance target
    └── Course management
```

These four sections are the main navigation routes in the application. 

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **SVG**
* **LocalStorage**
* Responsive Web Design

The current application stores user data, courses, attendance records, sessions, and theme preferences in the browser's local storage. 

---

## 📂 Project Structure

```text
Attendify/
│
├── attendify.html
├── README.md
└── assets/
    └── ...
```

The application contains the UI, styling, routing, authentication, attendance calculations, analytics, and data-management logic in the web application.

---

## 🚀 Run Locally

Clone the repository:

```bash
git clone https://github.com/Iamshivk08/Attendify.git
```

Open the project folder and launch:

```text
attendify.html
```

Alternatively, you can directly use the deployed version:

[https://sunny-file-mover.lovable.app/](https://sunny-file-mover.lovable.app/?utm_source=chatgpt.com)

---

## 💾 Data Storage

Attendify currently uses **browser LocalStorage** instead of a remote database. User accounts, courses, attendance records, sessions, and theme settings are stored locally. 

> **Note:** This makes the current version suitable for a client-side project/demo. For production use, secure backend authentication and database storage should be implemented.

---

## 🔮 Future Enhancements

* Backend API
* MySQL/PostgreSQL database
* Secure password hashing
* JWT authentication
* Cloud synchronization
* Multi-device access
* PDF attendance reports
* CSV export
* Email notifications
* Student and teacher roles
* Mobile application
* Attendance reminders

---

## 🎯 Why Attendify?

Attendify focuses on answering a practical question:

> **“Can I miss this class and still maintain my required attendance?”**

Instead of simply displaying an attendance percentage, the application converts attendance data into actionable information—showing whether the student is **on target, needs more classes, or has classes to spare**. 

---

## 👨‍💻 Developer

**Bala Siva Katam**

**B.Tech — Computer Science & Engineering**

### 🔗 Project

[Live Attendify Application](https://sunny-file-mover.lovable.app/?utm_source=chatgpt.com)

**Attendify — Attendance, Kept Honest.**

[1]: https://sunny-file-mover.lovable.app/ "Attendify — attendance, kept honest"
