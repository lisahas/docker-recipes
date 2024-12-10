# MySQL and Phpmyadmin

This will install Mysql and phpmyadmin (including all dependencies to run Phpmyadmin)

For security, this receipe uses a .env file for credentials.  A sample is provide, but if using these files for a fresh project, make sure to change them  and do NOT commit the changed .env file into your new project for security reasons.

To start a new project:

0. Ensure Docker is installed (with Docker compose, but on Windows and Mac this is included with the main Docker packages)
1. Copy the docker-compose.yml and .env file into a fresh directory
2. Change the credentials in the .env file and ensure NOT to commit this into your new project
3. Run the docker-compose configuration file:

```bash
docker-compose up -d
```

4. Visit phphmyadmin at:

http://localhost:8081/

____

Useful commands:

List all running containers

```bash
docker ps
```

Get a shell in the container

```bash
docker exec -it <container name> bash -l
```

Now get a MySQL CLI:

```bash
mysql -uroot -p<password> 
```
