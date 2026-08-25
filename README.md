# Attendify — Attendance Management System

> A smart attendance tracking and analytics web application designed to help students monitor and manage their attendance efficiently.

## 🌐 Live Demo

🚀 **[Open Attendify](https://sunny-file-mover.lovable.app/)**

---

## 📌 Overview

**Attendify** is a web-based attendance management system that helps students track their attendance across multiple courses.

Users can set an attendance target, add courses, record daily attendance, calculate attendance percentages, analyze attendance trends, and determine how many classes they need to attend—or can safely miss—to maintain their required attendance percentage.

---

## ✨ Features

### 📊 Dashboard

- View overall attendance percentage
- View present and absent class statistics
- Monitor attendance target
- View course-wise attendance
- Quick **Present / Absent** attendance marking
- Calculate classes required to reach the target
- Calculate classes that can be missed while maintaining the target
- Visual attendance indicators

### 📚 Course Management

- Add courses
- View course-wise attendance
- Remove courses
- Automatically remove associated attendance records when a course is deleted

### 📝 Attendance Records

- Record attendance by date
- Mark classes as:
  - ✅ Present
  - ❌ Absent
  - ⚪ Cancelled
- Delete attendance records
- Undo today's attendance entry
- Maintain attendance history

### 📈 Analytics

- Attendance by course
- Attendance trends
- Monthly attendance calendar
- Present / Absent / Cancelled indicators
- Course-wise attendance breakdown
- Target-based attendance insights

### 🎯 Attendance Target

Users can configure their required attendance target between **50% and 100%**.

Attendify calculates attendance using:

```text
Attendance % =
(Present Classes / (Present Classes + Absent Classes)) × 100
