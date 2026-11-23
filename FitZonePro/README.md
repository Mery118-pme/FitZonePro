# FitZone Pro — Fitness Center Website

A responsive college project demonstrating a fitness club website with member registration, login and a member dashboard.

## Run in VS Code
1. Extract `FitZonePro.zip`.
2. Open the extracted `FitZonePro` folder in Visual Studio Code.
3. Install the **Live Server** extension (if not already installed).
4. Right-click `index.html` → **Open with Live Server**.
5. Use the navigation to explore Programs, Trainers, Facilities and Membership.

## Pages
- `index.html` — landing page and gym information
- `pages/register.html` — member registration
- `pages/login.html` — member login
- `pages/dashboard.html` — member dashboard
- `style.css` — responsive styling
- `script.js` — menu, registration, login, dashboard and logout logic

## Demo flow
1. Open the homepage and select **Join now**.
2. Register with a name, email, phone, plan and password.
3. The demo stores the member record in browser `localStorage` and opens the dashboard.
4. Log out and log back in using the same credentials on the same browser.

## Important project limitations
This is a **front-end-only demonstration**, not a production authentication system. Member records are stored in the browser's localStorage. Passwords are not securely hashed, and data is not shared between devices or browsers. Do not enter real or sensitive passwords. No real payment is collected. External Google Fonts and Unsplash images require an internet connection.

## Suggested future enhancements
- Backend API with Node.js/Express or Java Spring Boot
- Database such as MySQL or PostgreSQL
- Secure password hashing and session/token authentication
- Admin panel and trainer scheduling
- Payment gateway integration
- Attendance and workout tracking

## Project objective
To design and implement a modern, responsive fitness center website that presents workout programs, trainer profiles, facilities and membership plans, and demonstrates a basic member registration and login workflow.
