# Grocery Cart – MERN Stack E-Commerce Application

## 📄 Overview

**Grocery Cart** is a full-stack **MERN-based E-Commerce platform** designed to streamline online grocery shopping for both buyers and sellers. The application features two independent portals that support real-time cart management, secure payment processing, inventory management, and seamless user experiences across devices.

The project incorporates modern web development best practices, secure authentication mechanisms, and third-party payment integration to build a scalable and efficient e-commerce solution.

---

## 🛠️ Key Components

### User Portals

* **Buyer Portal:** Enables users to browse products, add items to the cart, place orders, track order status, and make secure online payments.
* **Seller Portal:** Allows sellers to add, update, and manage inventory, as well as view and process incoming orders.

### Authentication

* **JWT-Based Authentication:** Separate JWT tokens for buyers and sellers to ensure secure, role-based access and protected route management.

### Payment Integration

* **Stripe Payment Gateway:** Provides a secure and reliable payment experience, with real-time payment validation and transaction support.

### UI/UX

* **Prebuilt, Responsive UI Components:** Utilizes reusable components for consistent styling and optimized performance across devices.

### State Management

* **Redux Integration:** Efficiently manages cart operations, user sessions, and inventory updates across the application.

---

## 🚀 Tech Stack

| Technology         | Purpose                     |
| ------------------ | --------------------------- |
| **React.js**       | Frontend Framework          |
| **Redux**          | State Management            |
| **Node.js**        | Backend Runtime Environment |
| **Express.js**     | Backend Framework           |
| **MongoDB**        | NoSQL Database              |
| **Mongoose**       | MongoDB ODM                 |
| **Stripe API**     | Payment Gateway Integration |
| **JWT**            | Authentication              |
| **Axios**          | API Communication           |
| **Vercel/Netlify** | Deployment (Frontend)       |
| **Render/Heroku**  | Deployment (Backend)        |

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ayush2996/GROCERRY_CART.git
cd GROCERRY_CART
```

### 2. Setup Virtual Environment (Optional)

```bash
python3 -m venv venv
source venv/bin/activate
```

### 3. Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

### 4. Configure Environment Variables

Create a `.env` file inside the `backend` directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### 5. Start the Application

#### Backend

```bash
npm start
```

#### Frontend

```bash
npm run dev
```

---

## 📚 Usage

Once the servers are running:

* Access the **Buyer Portal** at `http://localhost:3000`
* Access the **Seller Portal** through separate login credentials.

### Example Workflow:

1. Buyer registers and logs in.
2. Buyer browses products and adds items to cart.
3. Buyer proceeds to checkout and completes payment using Stripe.
4. Seller logs in to view and process incoming orders.

---

## 💡 Features

* Dual-portal system for buyers and sellers.
* Secure JWT-based authentication and route protection.
* Real-time cart and order updates.
* Stripe-based payment processing.
* Clean, modular frontend using prebuilt components.
* Scalable backend using RESTful APIs.

---

## 🌱 Future Improvements

* Search and filtering functionality.
* Order history and notifications.
* Admin dashboard for system-wide analytics.
* Enhanced mobile responsiveness.

---

## 🤝 Contributing

Contributions are welcome!
Please open an issue or submit a pull request for any features, improvements, or bug fixes.

---

## 📄 License

This project is licensed under the MIT License.
See the [LICENSE](LICENSE) file for more details.

---

## 📬 Contact

**Ayush Kumar Singh**

* GitHub: [ayush2996](https://github.com/ayush2996)
* LinkedIn: [Ayush Kumar Singh](https://www.linkedin.com/in/ayush-kumar-singh-8a4278306)
