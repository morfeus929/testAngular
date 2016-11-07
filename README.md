# FrontEnd developer Test

## Required Technologies
 - [AngularJS](https://angularjs.org/)
 - [Twitter Bootstrap](http://getbootstrap.com/)
 - [Underscore.js](http://underscorejs.org/)
 - [Karma](https://karma-runner.github.io/)
 - [Jasmine](https://jasmine.github.io/)

## Description

You are required to create a music library web application, which is a Single Page Application. 

Your task is creating a simple music library that create, retrieve, edit and delete music albums. There are some albums already registered in the database of your services. You are not required to make a fancy page but your music library project must be shown in a reasonable way in terms of User Experience.

*How to start?*

Fork the project [Angular JS Exam project](https://github.com/thiagoh/angular-js-exam-project). This project must be the basis of yours

## Requirements

- Your project must be a for of [Angular JS Exam project](https://github.com/thiagoh/angular-js-exam-project)
- The page must be responsive
- You cannot create or edit the existing REST Services
- You must create tests with Jasmine + Karma
- Your code must be pushed to a repository in your Github account and the url must be provided to us so we can clone and test your project
- A basic `Gruntfile.js` is already provided and we are going to test your project by running `grunt start`. You can (and have to) edit this file but be careful to not break it and avoid us to test your project with that command.
- Configure your `Gruntfile.js` so we can run the tests of your project by running `grunt test`

## REST Services

There are a few services that you're supposed to use in order to create your application.

### Add a new album

- Url: `/albums/add`
- HTTP Method: `POST`
- Params: 
```json
{
  "title": "Empire Burlesque",
  "artist": "Bob Dylan",
  "country": "USA",
  "company": "Columbia",
  "price": 10.9,
  "year": 1985,
}
```

### Update an existing album

- Url: `/albums/update/:id`
- HTTP Method: `POST`
- Params: 
```json
{
  "title": "Empire Burlesque",
  "artist": "Bob Dylan",
  "country": "USA",
  "company": "Columbia",
  "price": 10.9,
  "year": 1985,
}
```

### Delete an existing album

- Url: `/albums/delete/:id`
- HTTP Method: `DELETE`

### Count how many albums are registered

- Url: `/albums/count`
- HTTP Method: `GET`

### Returns all albums

- Url: `/albums/all`
- HTTP Method: `GET`
