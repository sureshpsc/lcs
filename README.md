
# LCS Consultancy Website

This is the front-end for the **LCS Consultancy** website, built with **React**. It includes the following pages:

- Home
- About Us (with carousel)
- Services
- Contact Us
- Admin Panel (with chat functionality)
- Login and Register pages

## Steps to Set Up the Application

### 1. Install Node.js and npm
Make sure **Node.js** and **npm** are installed on your machine:
- Download **Node.js** from [https://nodejs.org/](https://nodejs.org/).
- Verify the installation by running `node -v` and `npm -v` in your terminal.

### 2. Create a New React App
Run the following command to create a new React app:

```bash
npx create-react-app lcs-website
cd lcs-website
```

### 3. Install Dependencies
Install the required libraries by running:

```bash
npm install react-bootstrap bootstrap
npm install react-router-dom
npm install websocket
```

### 4. Add the Code
Copy the provided React components and styles into the appropriate files in the `src` folder.

### 5. Run the Application
Start the application by running:

```bash
npm start
```

This will start the app in development mode, and you can view it in your browser at `http://localhost:3000`.

### 6. Visit the Pages
You can navigate between the following pages:

- **Home**
- **About Us**
- **Services**
- **Contact Us**
- **Admin Panel** (user management and chat)
- **Login / Register**

## Folder Structure

```
/lcs-website
│
├── /public                    # Public assets (index.html, images, etc.)
│   ├── index.html             # Main HTML file
│   └── /images                # Folder for images
│
├── /src
│   ├── /components            # React components (HomePage.js, AboutPage.js, etc.)
│   │   ├── HomePage.js        # Home Page
│   │   ├── AboutPage.js       # About Us page (with carousel)
│   │   ├── ServicesPage.js    # Services page
│   │   ├── ContactUsPage.js   # Contact Us page
│   │   ├── AdminPage.js       # Admin page for user management and chat
│   │   ├── LoginPage.js       # Login page
│   │   ├── RegisterPage.js    # Register page
│   │   ├── ChatComponent.js   # Chat feature component
│   │   ├── Header.js          # Header component
│   │   ├── Footer.js          # Footer component
│   ├── /assets                # Images, CSS files
│   │   ├── style.css          # Custom styles for all pages
│   ├── App.js                 # Main React app file
│   └── index.js               # React entry point
│
└── package.json               # React dependencies
```

## Notes

- The **chat feature** is implemented using **WebSocket**.
- Make sure your back-end server is running if you're using API calls to fetch data.
