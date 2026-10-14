# FURNITICA-Web Application
FURNITICA is a modern e-commerce web application designed for furniture retail. Features an intuitive shopping experience for customers and robust inventory/order management tools for administrators. Built with modern web technologies for responsiveness and scalability.

Features

Customer:

* Registration & Login – Account creation with email verification and validated sign-in.
* Product Catalog – Product listings with images, price, brand, model, condition, color and stock.
* Advanced Search & Filtering – Filter by brand, condition, color, storage type and price range, with sorting and pagination.
* Shopping Cart – Add products to the cart as a logged-in user (saved in the database) or as a guest (saved in the session).
* Quantity is checked against available stock.
* Checkout – Use the saved address or enter a new one, with full input validation.
* Online Payments – Integrated with the PayHere payment gateway (sandbox mode).
* Delivery Charges – Automatic delivery fee for within Colombo and outside Colombo.
* My Account – Update account details and password, add products for sale, view addresses and purchase history.

Admin:

* Admin Login – Separate admin sign-in.
* Master Data Management – Register new brands, models, colors and cities.
* Order List – View all customer orders with product, quantity, total price and customer name.

General

* Responsive UI built with Bootstrap.
* JSON-based communication between frontend (JavaScript) and servlets using Gson.
* Server-side validation on all forms.

Tech Stack:

* Frontend	     - HTML, CSS, JavaScript, Bootstrap
* Backend	       - Java, Java Servlets (Jakarta/Java EE)
* ORM	           - Hibernate (Criteria API)
* Database	     - MySQL
* JSON	         - Google Gson
* Payments	     - PayHere (Sandbox)
* IDE	           - Apache NetBeans
* Server	       - Glassfish
* Design Tools	 - PlantUML (diagrams), MySQL Workbench (ER diagram)

Project Structure:
```
Furnitica/
├── src/java/
│   ├── hibernate/         # Entity classes (User, Product, Cart, Orders, ...) & HibernateUtil
│   ├── controller/        # Servlets (SignIn, SaveProduct, AddToCart, CheckOut, ...)
│   └── model/             # Helper classes (Util, PayHere, ...)
├── src/java/hibernate.cfg.xml  # Hibernate configuration
├── web/
│   ├── assets/            # CSS, JS, images
│   ├── product-images/    # Uploaded product images (one folder per product ID)
│   └── *.html             # Frontend pages
├── database/
│   └── furnitica.sql      # Database dump
├── docs/                  # Project documentation & diagrams
├── screenshots/
└── README.md
```
Limitations:

* Available in a single language only.
* Requires an internet connection.

License:

* This project is licensed under the MIT License.
