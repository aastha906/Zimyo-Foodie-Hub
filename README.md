# Foodie Hub

Welcome to Foodie Hub! This is a full-stack application where food enthusiasts can share recipes, culinary adventures, and connect with other food lovers.

## Features

- **User Authentication**: Secure user registration and login.
- **Recipe Management**: Users can create, edit, and delete recipes.
- **Image Upload**: Upload images for recipes, automatically resized.
- **Search and Filter**: Search for recipes by keywords, and filter by dietary restrictions.
- **Infinite Scrolling**: Load more recipes as you scroll down.
- **User Profiles**: View and edit your profile, and see your saved recipes.
- **Responsive Design**: Fully responsive design for mobile and desktop.

## Tech Stack

### Frontend

- **React.js**: For building the user interface.
- **React Router**: For handling routing in the app.
- **Axios**: For making HTTP requests to the backend API.

### Backend

- **Node.js**: The runtime environment.
- **Express.js**: The web framework for handling routes and middleware.
- **MySQL**: The database for storing users, recipes, and other data.
- **JWT**: JSON Web Tokens for authentication and route protection.
- **Multer**: For handling image uploads.

### DevOps

- **Docker**: For containerizing the application.
- **Nginx**: As a reverse proxy and load balancer.

## Installation

### Prerequisites

- **Node.js** (v14 or higher)
- **MySQL** (v5.7 or higher)
- **Docker** (optional, for containerization)

### Backend Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/foodie-hub.git
    cd foodie-hub/backend
    ```

2. Install backend dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:

    ```env
    DB_HOST=localhost
    DB_USER=root
    DB_PASSWORD=yourpassword
    DB_NAME=foodie_hub
    JWT_SECRET=your_jwt_secret
    ```

4. Run the database migrations (optional):

    ```bash
    npm run migrate
    ```

5. Start the backend server:

    ```bash
    npm start
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd ../frontend
    ```

2. Install frontend dependencies:

    ```bash
    npm install
    ```

3. Start the frontend development server:

    ```bash
    npm start
    ```

### Running with Docker

1. Build and run the Docker containers:

    ```bash
    docker-compose up --build
    ```

2. Access the application at `http://localhost:3000`.

## Usage

- **Register/Login**: Create an account or log in with existing credentials.
- **Create a Recipe**: Add a new recipe, upload images, and save it.
- **Search Recipes**: Use the search bar to find recipes based on title, ingredients, or description.
- **Filter Recipes**: Filter recipes by dietary restrictions like vegan, gluten-free, etc.
- **View Profile**: View and update your profile information.

## API Documentation

The API is documented using Swagger. You can view the API documentation by navigating to `/api-docs` on the backend server.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the open-source community for providing great tools and libraries.
- Special thanks to all contributors and users of Foodie Hub.
