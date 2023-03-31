# github-api-proxy
 The following API query the users from the GitHubApi using a express.js and node.js server, it shows the users details when selected on the frontend with React. 

This is a web api that allows users to proxy for Github users and view their profiles and repositories details.

Prerequisites:
Make sure you have the following packages installed:

    Node.js v18 or above
    NPM v9 or above
    Express
    Axios
    React (and all its dependencies)
    React Bootstrap

Installation

    Clone the repository:

    bash git clone https://github.com/sauerlock/github-api-proxy.git

Install the required packages in both frontend and api directories:

    cd frontend
    npm install
    Replace the TOKEN constant in api/server.js with your Github personal access token.(The token is already set only for the API use.)
    cd ../api
    npm install
  

Usage

    Start the server by running the following command inside the api directory: node server.js The server should start running at http://localhost:3000.

Start the React app by running the following command inside the frontend directory:

    npm start
    The app should open automatically in your default browser at http://localhost:3001.
  
License This project is licensed under the MIT License.
