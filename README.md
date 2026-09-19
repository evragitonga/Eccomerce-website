# Eccomerce Website

A React + Vite ecommerce website for browsing products and interacting with the application through the browser.

## Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/evragitonga/Eccomerce-website.git
```

Move into the project directory:

```bash
cd Eccomerce-website
```

### 2. Install dependencies

Install the required Node.js packages:

```bash
npm install
```

### 3. Start the JSON Server

The project uses `json-server` to provide product data from `db.json`.

Run:

```bash
npm run server
```

The JSON Server will run locally on:

```text
http://localhost:3000
```

The products can be accessed at:

```text
http://localhost:3000/products
```

### 4. Start the React development server

Open another terminal in the project directory and run:

```bash
npm run dev
```

Vite will provide a local development URL, usually:

```text
http://localhost:5173
```

### 5. Open the project in the browser

Open the URL provided by Vite in your browser:

```text
http://localhost:5173
```

The ecommerce website should now be running in the browser.

## Requirements

Before setting up the project, make sure you have:

* Node.js installed
* npm installed
* Git installed

## Running the Project

You need two terminals while developing:

**Terminal 1 — JSON Server**

```bash
npm run server
```

**Terminal 2 — React/Vite**

```bash
npm run dev
```

Then open the Vite URL in your browser.
