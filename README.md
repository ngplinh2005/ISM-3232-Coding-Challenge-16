# ISM-3232-Coding-Challenge-16
Coding Challenge: Product Dashboard Setup Using React and Vite

Introduction
In this challenge, you will create a Product Dashboard for a business using React and Vite. This dashboard will allow users to view a list of products, add new ones, and display product details. You will set up the environment with Vite, create components to organize the UI, and use JSX, keys, and props to pass data between components.

Business Case
Scenario: A small e-commerce business wants to build a simple Product Dashboard to manage its product listings. The dashboard should display a list of products, each with a name, price, and description. The business also wants a way to add new products. By organizing the interface into React components, the business can maintain and update the dashboard as the product line grows.

Requirements
Your dashboard will consist of the following components:

ProductList: Displays a list of products.
ProductItem: Shows individual product details.
AddProductForm: Allows users to add new products.
App: The main component that renders everything.

Tasks
1. Set Up the React Environment with Vite

Initialize a new React project using Vite.
Install dependencies, and set up a basic React app structure with a main App component.

Commands:
npm create vite@latest product-dashboard --template react
cd product-dashboard
npm install
npm run dev

Commit: Initialize React environment with Vite

2. Create the App Component

File: App.jsx
In this component, define a default list of products as an array of objects with id, name, price, and description fields.
Render the ProductList and AddProductForm components inside the App component.
Pass the list of products as props to ProductList.

Commit: Set up App component with initial product list

3. Create the ProductList Component

File: ProductList.jsx
This component will receive the list of products from App as props.
Use the map() function to render a ProductItem component for each product.
Pass each product’s data and a unique key to ProductItem.

Commit: Create ProductList component to render each ProductItem

4. Create the ProductItem Component

File: ProductItem.jsx
This component should receive a single product’s data as props and display its name, price, and description in JSX.
Use proper JSX syntax and structure to render each product’s information.

Commit: Create ProductItem component to display individual product details

5. Implement Keys in the ProductList Component

Ensure each ProductItem in the list is given a unique key prop using the id of each product.

Commit: Implement keys for each ProductItem in ProductList

6. Create the AddProductForm Component

File: AddProductForm.jsx
This component will include a form with input fields for name, price, and description.
On form submission, add a new product to the list in App.
Use useState to manage the form’s input fields and reset them after submission.
Hint: Pass a function from App to AddProductForm as a prop to handle adding new products to the list.

Commit: Create AddProductForm component with form fields

7. Pass Data Between Components

In App, define a function to handle adding a new product (e.g., addProduct), which should take in product data and update the product list.
Pass this addProduct function to AddProductForm as a prop so it can update the product list upon submission.

Commit: Implement addProduct function and pass data between App and AddProductForm

Submission Guidelines
GitHub Repository: Include your App.jsx, ProductList.jsx, ProductItem.jsx, AddProductForm.jsx, and other necessary files in the repository. Ensure your code is well-organized and commented.
Repository Link: Make sure your repository is public or accessible to your instructors. Share the direct URL.

Expected Outcomes
After completing this challenge, students will:

Understand how to set up a React environment using Vite.
Organize a UI into reusable React components.
Use JSX to render elements and pass data between components with props.
Properly use keys to improve rendering performance in lists.
Manage state and pass functions as props to update the component hierarchy.

This coding challenge helps build a strong foundation in React and introduces core concepts that are essential for developing dynamic, interactive interfaces in modern web applications.