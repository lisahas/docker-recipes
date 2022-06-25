# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In this dockerised version you will get...


  * Express app that will link to the mysql db  (server directory)
  * mysqldb
  * phpmyadmin
  * React front end files  (client directory)

In the setup here, the react files are served statically from the build directory (this is handled in the server.js file) ie. you cannot run this from docker AND dynamically load react files.

However, you can dynamically edit the express files as the express server is reloaded by supervisor at any code change.

To refresh the react app files you need to run:

```
cd client # make sure you are in the client directory
npm run build
```

TODO: work out how to run the front end app in a connected container to make the dev environment more dynamic.