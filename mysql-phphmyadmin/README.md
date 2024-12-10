# MySQL and Phpmyadmin

These files will install Mysql and phpmyadmin (including all dependencies to run Phpmyadmin)

For security, this receipe uses a .env file for credentials.  A sample is provide, but if using these files for a fresh project, make sure to change them  and do NOT commit the changed .env file into your new project for security reasons.

HOWEVER: for a single file install, download the docker-compose-singlefile.yml file, rename it to docker-compose.yml and then run using ```docker-compose up`` in a fresh directory, and with docker desktop running.

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

Log in with the credentials of your .env file (if you have one), or the credentials in the docker-compose.yml file if you are using the single file reciepe.

____

Useful commands:

List all running containers

```bash
docker ps
```

Get a shell in the container  (get the container name using docker ps)

```bash
docker exec -it <container name> bash -l
```

Now get a MySQL CLI:

```bash
mysql -uroot -p<password> 
```

____

Troubleshooting

'port already allocated' error.  This means containers using these ports are already running.  Stop them by running ```docker ps``` to get a list of containers then 

```
docker stop <container name or hash>

```
You can stop the containers in docker desktop (windows and mac), but this is not recommended.

If necessary, the db directory can be deleted to start fresh, but the database will be lost (not a problem if the database has been exported as a .sql file - it can be re-imported)
