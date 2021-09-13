# Mysql and Phpmyadmin

This will install Mysql and phpmyadmin (including all dependencies to run Phpmyadmin)

For security, this receipe uses a .env file for credentials.  A sample is provide, but if using these files for a fresh project, make sure to change them  and do NOT commit the changed .env file into your new project.

To start a new project / install, copy the docker-compose.yml and .env file into a fresh directory
Change the credentials in the .env file and ensure NOT to commit this into your new project

Only the docker-compose.yml file and .env file is needed.

Docker will need to be installed (obviously)

To run:

```bash
docker-compose up -d
```

Visit phphmyadmin at:

http://localhost:8081/



Useful commands:

Get a Mysql CLI in the container

```bash
docker exec -it <container name> bash -l
```

then 

```bash
mysql -uroot -p<password> 
```
