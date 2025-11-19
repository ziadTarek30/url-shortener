# Node.js URL Shortener

A simple Node.js URL shortener using ExpressJS and MongoDB.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/mohamadayash22/node-url-shortener.git
   ```

2. Install the project dependencies

   ```sh
    cd node-url-shortener
    npm install
   ```

3. Configure the environment variables

   ```sh
    PORT=3000
    MONGODB_URI=your-mongodb-uri
    BASE_URL=your-api-base-url
   ```

4. To run the app in dev mode
   ```sh
   npm run dev
   ```
5. To run the app in production mode
   ```sh
   npm start
   ```

## Usage

To use the URL shortener API, make HTTP requests to the following endpoints:

- **POST /api/shorten:** Shorten a long URL.
- **GET /{urlId}:** Redirect to the original URL.
 environment file.
