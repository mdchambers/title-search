# Time Zoner

## Client Requirements

* User must be able to create an account and log in. (If a mobile application, this means that more users can use the app from the same phone).
* When logged in, a user can see, edit and delete timezones he entered.
* Implement 2 roles with different permission levels: a regular user would only be able to CRUD on their owned records, and an admin would be able to CRUD all users and all user records.
* When a timezone is entered, each entry has a Name, Name of the city in timezone, the difference to GMT time.
* When displayed, each entry shows the current time in that timezone and the difference between the browser’s time.
* REST API. Make it possible to perform all user actions via the API, including authentication (If a mobile application and you don’t know how to create your own backend you can use Firebase.com or similar services to create the API).
* In any case, you should be able to explain how a REST API works and demonstrate that by creating functional tests that use the REST Layer directly. Please be prepared to use REST clients like Postman, cURL, etc. for this purpose.
* If it’s a web application, it must be a single-page application. All actions need to be done client side using AJAX, refreshing the page is not acceptable. (If a mobile application, disregard this).
* Functional UI/UX design is needed. You are not required to create a unique design, however, do follow best practices to make the project as functional as possible.
* Bonus: unit and e2e tests.


## Project Architecture

### Frontend

* React (typescript)
* 

### Backend

* API
  * Authentication
    * Create User
    * Login
    * Logout
  * CREATE
  * READ
  * UPDATE
  * DESTROY

### Database

* MongoDB (local install)

## Development Roadmap

* Develop frontend with faked data
  * Incorporate bootstrap
  * Header
    * Login/logout
    * Sign up
    * Sign in
* Design/deploy databases
* Develop backend 