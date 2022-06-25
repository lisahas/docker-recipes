# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In this dockerised version you will get...


  * Express app that will link to the mysql db  (server directory)
  * mysqldb
  * phpmyadmin
  * React front end 

The react front end app AND the express app are in separate containers AND have hot reloading, ie. you can change code on either the front end or backend (or in the database) and see your changes.

The main express container can also be used to serve static files that are the result of running

```
npm run build
```

In the client directory

