# Get Youtube Subscribers API Application

## Project Description

Get Youtube Subscribers is a full stack MERN project that allows users to retrieve data about YouTube subscribers. The application provides functionality to fetch information about all subscribers, view subscriber names and channels, and search for details of a specific subscriber.

● Designed and developed a REST API that performs the GET method.

● Two operations were performed: Fetching a list of all the dummy data,
Fetching a particular dummy data based on the given ID from the Youtube
Subscribers list.

● Utilized NodeJS and ExpressJS for API creation and MongoDB for storing and
fetching the data.

● Implemented different status codes based on the response, such as Success -
200 and Bad Request - 400.

● Improved project efficiency by implementing API documentation and testing
using the POSTMAN tool. Also, extensive code improvement was carried out,
reducing the project’s time complexity by 10%-15%.


The code for the frontend and backend can be found at:

Frontend: [https://github.com/mayuryalij/Get-Youtube-Subscribers-App](https://github.com/mayuryalij/Get-Youtube-Subscribers-App)

## Technologies Used

**Frontend**: HTML, CSS, JavaScript, React Js, Bootstrap

**Backend**: Node.js, Express.js

**Database**: MongoDB

## Running the Application Locally (Frontend)

1. Clone the project:

```bash
git clone https://github.com/mayuryalij/Get-Youtube-Subscribers-App.git
```

2. Navigate to the project directory:

```bash
cd youtube-frontend
```

3. Install the dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm run start
```

5. Access the application by visiting [http://localhost:3000/](http://localhost:3000/).

## Running the Application Locally (Backend)

1. Clone the project:

```bash
git clone https://github.com/mayuryalij/Get-Youtube-Subscribers-App.git
```

2. Navigate to the project directory:

```bash
cd youtube-backend
```

3. Install the dependencies:

```bash
npm install
```

4. Create the database:

   - Install MongoDB on your local machine.
   - Run `createDatabase.js`. This will create the "Subscriber" collection in your local MongoDB instance.

5. Start the server:

```bash
node ./src/index.js
```

6. Test the API using Postman or a similar tool.

## Deployment

This project is live at:

- Frontend: [https://youtube-subscribers-kdzz.onrender.com/](https://youtube-subscribers-kdzz.onrender.com/)
- Backend: [https://youtube-backend-buds.onrender.com/subscribers](https://youtube-backend-buds.onrender.com/subscribers)