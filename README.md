# MyFrontendApp

This is a React frontend application built with TypeScript that allows users to create, view, and delete orders.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/MyFrontendApp.git
    cd MyFrontendApp
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm start
    ```

### Project Structure

- `src/components`: Contains reusable UI components.
- `src/pages`: Contains page components for different routes.
- `src/services`: Contains API service for making HTTP requests.
- `src/App.tsx`: Main application component with routing.

### Available Scripts

- `npm start`: Starts the development server.
- `npm build`: Builds the app for production.
- `npm test`: Runs the test suite.
- `npm eject`: Ejects the app configuration.

### Pages and Navigation

- **Home Page**
  - Displays a list of ordered items.
  - Each item shows full name, order description, quantity, and a delete button.

- **New Order Page**
  - Form to create a new order.
  - Inputs:
    - First Name (optional, max 20 characters)
    - Last Name (required, max 20 characters)
    - Order Description (required, max 100 characters)
    - Quantity (required, number between 1 and 20)
  - Validates inputs and displays error messages.

### Design Considerations

- **Clean Code:** Followed best practices for clean and maintainable code.
- **TypeScript:** Utilized TypeScript for type safety.
- **State Management:** Used React's built-in state management with hooks.
- **Integration with API:** Integrated with the .NET Core API for CRUD operations.
- **CSS:** Used responsive design principles for a mobile-friendly UI.
- **Accessibility:** Followed accessibility best practices.

### Development Practices

- **Branching:** Followed GitFlow branching model.
- **Code Reviews:** Conducted regular code reviews.
- **CI/CD:** Set up CI/CD pipelines using GitHub Actions.

## License

This project is licensed under the MIT License.
