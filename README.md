# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Project Title
Airlines reservation system/website using MERN stack, allowing users to reserve flights and cancel their reserved flights, as well as confirming their reservations and cancellations. This system is also able to email each user their reservations as well as their cancellations. Users are allowed to have accounts on the website, and to enter their information in order to pay for their reservations using credit cards.

## Project Motivation
The aim of this project is to create a reservation interactive system/website using the MERN stack (MongoDB Atlas, Express.js, NodeJS, React.js). The aim is that every functionality embedded through the backend should be working in the frontend part and it should also be reflected in the database. In addition to that, any changes made through the frontend should be reflected on the database.
As for the admin system, the admin should be able to add flights that should be available for users, or modify flights' data. The admin should also be able to delete flights and their data. All changes must be reflected on the database.
Enhancing user experience and user interface (UX and UI) throughout the website is a must.

## Build Status
Some functionalities are not embedded through our system, one of these functionalities is that the user is not able to pay a price difference when upgrading their cabin class.
Another functionality is that changing the user's information in general, user's information could be updated through editing the flight's reservation.
## Code Style
Javascript is mainly used through out this project. Knowledge in Javascript is necessary is all JS files. There is a little bit of CSS also used  for the CSS files, used for styling.
As for the backend part, some functionalities is embedded in the models folder, to state the requirements for this functionaity, then embedded in the controller folder to literally state what does this functionality do, at the end, the functionality is embedded in the routes folder to state the correct route for it. This is done in several functionalities such as user/authentication, flights, payement. 
As for the frontend part, some components are embedded only once and then called for multiple usage, there is also the folder routes that contain the routes of each component and navigation.
## Screenshots
Attached are images for several things from our reservation system. The first image is for viewing all the reserved flights for a user, as shown in the image, any flight reservation can be selected and edited. The second image shows the admin dashboard and all the created flights, flights can be modified, viewed or deleted.
In the third image, a part from the UI is shown, it is for searching for flights by the desired destination, cabin class, and date.
![WhatsApp Image 2021-12-25 at 10 28 50 PM](https://user-images.githubusercontent.com/86448168/147393173-0ce694ed-b978-4e13-8bac-3a9c0955d5a5.jpeg)
![WhatsApp Image 2021-12-25 at 10 25 27 PM](https://user-images.githubusercontent.com/86448168/147393174-e6c64a8a-8f94-48c6-ac23-bf2fe4b6aca2.jpeg)
![WhatsApp Image 2021-12-25 at 10 24 55 PM](https://user-images.githubusercontent.com/86448168/147393175-4e09e5bb-8982-4e78-8045-c59a77721b36.jpeg)
you can find the screenshots on the google drive link:
https://drive.google.com/drive/folders/1cNkf3FjAmv0kzN8U7VYYH1mWH6j_e_U4?usp=sharing
## Tech/Framework used
MERN Stack is used: (MongoDB Atlas, Express.js, NodeJS, React.js).
In addition to that, Nodemailer's API is also used in the system in order to email each user their itinerary: reservations and cancellations.

## Features
There are many features for this project, first, users are allowed to create an account on the website and sign in with it, they're also able to change their password and their reservation information such as passport number, email, and name.
Second, users are able to reserve a departure flight and its return flight and pay for them using their credit card/Mastercard, they are also able to cancel their flights, upgrade their cabin or their baggage allowance. Users are also able to get all their reserved flights' list and check all available seats on the required flight.
The admin is able to add flights and flights' details, delete flights and their details, and all changes are reflected on the database.
The system will automatically email any user with their reservation details, and amount to be paid, or with their cancellation details, and amount to be refunded.
There are also links to social media accounts for the Airline Reservation System that is available for users through the website.
last but not least, as for enhancing the user's experience and user's interface, the system is developed with the right navigations and reverse navigation.
## Code Examples

## Installation
Installing nodeJS.
Installing Postman for testing the backend functionalities.
Installing several libraries such as React-bootstrap, React and React-redux, Nodemailer.
## API reference
Nodemailer's API is also used in the system in order to email each user their itinerary: reservations and cancellations.

## Tests
Some functions have been tested using the JEST testing, and it was proved tests have succeeded. 
Other functions were tested manually through the frontend and the backend like testing data in frontend and check its reflection on the database and it has been proved that all actions in the frontend are reflected on the database.
The backend also was tested using the Postman, each function developed is tested using Postman before embedding the function in the frontend for enhancing UX and UI.

## How to Use?
In order to use this website/reservation system, there are two folders, folder for the backend and folder for the frontend. So in order to use the project each folder should be launched by using "npm start" command. Launching the backend folder will allow us to use data we have in the database, and launching the frontend folder will allow users to view the data we do have in our database, and interact database through the website.
## Contribute

## Credits
I would like to give credits to some resources that helped us in developing this project.
https://nodemailer.com/about/
https://github.com/facebook/create-react-app
https://nodejs.org/en/
https://www.mongodb.com/cloud/atlas/
https://expressjs.com/
https://react-bootstrap.github.io/
## License
This is a project made by GUC Students.
