

# 🐾 PawMart

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-19.2.0-blue?logo=react\&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18-green?logo=node.js\&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-5.0-green?logo=mongodb\&logoColor=white)](https://www.mongodb.com/)

**PawMart** is a community-driven platform where pet owners, breeders, and shops can list pets for adoption or sell pet-related products (food, toys, accessories, etc.). Buyers and adopters can browse, contact, and order directly.

💻 **Live Demo:** [https://paw-mart-ef03f.web.app]

---

## Features

* 🐶 Add, Update, Delete pet and product listings
* 🔍 Filter listings by category and search by name
* 📝 Private routes for authenticated users
* 🛒 My Listings and My Orders pages
* 📄 Export orders table as PDF
* 🌗 Light/Dark/Custom theme toggle
* ✨ Typewriter animation for dynamic headings
* 📞 Contact page with social links
* 🖥 Responsive UI for mobile and desktop
* ⚡ 404 Error Page and redirects
* 🚦 Dynamic page title per route 

---

## Technologies

* **Frontend:** React, TailwindCSS, react-icons, react-hot-toast, react-simple-typewriter
* **Backend:** Node.js, Express
* **Database:** MongoDB
* **Deployment:** Firebase / Netlify (Frontend), Vercel (Backend)

---

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/your-username/paw-mart.git
cd paw-mart
```

2. **Install dependencies**

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

3. **Create `.env` files** in `client` and `server` with API keys and database URLs.

Example `.env` (Backend):

```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

Example `.env` (Frontend):

```
REACT_APP_API_URL=https://your-backend-url.com
```

4. **Start servers**

```bash
# Backend
cd server
npm run dev

# Frontend
cd ../client
npm start
```

Open your browser at [https://paw-mart-ef03f.web.app]

---

## API Endpoints

* `GET /listings` – Get all listings
* `GET /listings/:id` – Get a single listing
* `POST /listings` – Add new listing
* `PUT /listings/:id` – Update listing
* `DELETE /listings/:id` – Delete listing
* `GET /myListings?email=user@example.com` – Get listings by user
* `GET /myOrders?email=user@example.com` – Get orders by user

---

## Screenshots

**Home Page (Light Mode)**
![Home](./src/assets/PawMart_Home%20(5).png)

**Home Page (Dark Mode)**
![Home](./src/assets/PawMart_Home_Dark.png)



---

## Contributing

1. Fork the repository
2. Create a branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Create a pull request

---

## License

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.

---
