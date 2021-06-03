# CS35L-Final-Project - Sportz

## Description

Sportz is an online community for sportz loversas indicated by the name. Users can post about their favorite sports, teams, and players and see what's the hottest in the sportz world.

## Key Features
  1. User accounts with ability to signup, login, and have information associated with a user
  2. Dynamic home page that displays the top trending posts at the top and renders dynamically based on if a user is logged in or not.
  3. Search for posts of specific tags or for users
  4. Like  other users posts, which is then taken into account in the trending algorithm for home page
  5. Follow/unfollow other accounts
  6. Share posts
  7. Navigation throughout the webapp

## Running the Application

Clone the Repository:

##### `git clone https://github.com/PrateekSane/CS35L-Final-Project.git`

##### `cd CS35L-Final-Project`

### To run the Frontend (React):

##### `cd frontend`

##### `npm install`

##### `npm start`

The app should be accessible at
[http://localhost:3000](http://localhost:3000) so you can view it in the browser.

### To setup the Backend:

##### `cd backend`

##### Create a .env file in the backend folder. Add your mongodb uri to the .env file (which can be created at https://cloud.mongodb.com/) like the following:
`MONGO_DB_URI="YOUR_MONGO_DB_URI_HERE"`

### Afterwards, to run the backend (NodeJS and MongoDB):

##### `npm install`

##### `nodemon start`

This will run the backend on [http://localhost:5000](http://localhost:5000)

Once both the front end and backend are running, the application will be fully useable.
