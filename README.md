# Users payment accounting table

Project for accounting for user payments for certain assets. The project was developed to gain practical experience in full-stack development.

![ScreenShot](https://github.com/ysnitko/dashboard/blob/main/public/assets/home-page.png)

## Table of contents

- [Overview](#overview)
  - [Live link and source code](#live-link-and-source-code)
  - [Built with](#built-with)
  - [Features](#features)

## Overview

### Live link and source code

- Source code: [https://github.com/ysnitko/dashboard.git](https://github.com/ysnitko/dashboard.git)
- Live Site URL (deploy on vercel): [https://dashboard-rose-omega.vercel.app/](https://dashboard-rose-omega.vercel.app/)
  To authorize in the app, enter login: <strong>test@test</strong>, password: <strong>test</strong>

### Built with

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Next-auth.js](next-auth.js)
- [Tanstack](https://tanstack.com/)
- [Prisma ORM](https://www.prisma.io/)
- [Postgresql](https://www.postgresql.org/)
- [React-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)
- [React-onclickoutside](https://www.npmjs.com/package/react-onclickoutside)
- [Dateformat](https://www.npmjs.com/package/dateformat)
- [Vercel](https://vercel.com/)
- [TailwindCSS](https://tailwindcss.com/)

### Features

Users should be able to:

- View the optimal layout for each page depending on their device's screen size (screen & mobile)
  mobile:
  ![ScreenShot](https://github.com/ysnitko/dashboard/blob/main/public/assets/mobile.png)

- Built-in user authorization mechanism.The user's email and password are used as credentials

  ![ScreenShot](https://github.com/ysnitko/dashboard/blob/main/public/assets/sign-in.png)

- Form validation upon user login and registration, if the user is blocked, entry is denied

  ![ScreenShot](https://github.com/ysnitko/dashboard/blob/main/public/assets/valid-reg.png)

---

![ScreenShot](https://github.com/ysnitko/dashboard/blob/main/public/assets/validate-signin.png)

- The app will use all CRUD actions on the user

  ![ScreenShot](https://github.com/ysnitko/dashboard/blob/main/public/assets/create-user.png)

  ![ScreenShot](https://github.com/ysnitko/dashboard/blob/main/public/assets/edit-user.png)

  ![ScreenShot](https://github.com/ysnitko/dashboard/blob/main/public/assets/padd-menu.png)

- Search for user by name, email, payment status and activity status

  ![ScreenShot](https://github.com/ysnitko/dashboard/blob/main/public/assets/search.png)

- User filter and sorting by numerous parameters

  ![ScreenShot](https://github.com/ysnitko/dashboard/blob/main/public/assets/filter-sort.png)

- User details page with activity logs

  ![ScreenShot](https://github.com/ysnitko/dashboard/blob/main/public/assets/user-details.png)

- Pagination, choice of displaying 10 or 20 users per page

  ![ScreenShot](https://github.com/ysnitko/dashboard/blob/main/public/assets/pagination.png)

- Multiple payment posting

  ![ScreenShot](https://github.com/ysnitko/dashboard/blob/main/public/assets/multiple-pay.png)

- Data is saved to the Postgresql database

  ![ScreenShot](https://github.com/ysnitko/dashboard/blob/main/public/assets/db.png)
