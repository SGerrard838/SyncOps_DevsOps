# PANDUAN Memasukkan projek ke dalam container Docker

RUN CONTAINER & ENSURE SAME NETWORK :
docker network create my_network
docker build -t netflix .
docker run --name mysql --network my_network -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=netflix -p 3306:3306 -d mysql:latest
docker run --name netflix --network my_network -p 3000:3000 -d netflix
docker network ls
docker network inspect my_network
(to stop docker = stop netflix, to start docker = start netflix, check log = docker logs netflix)

IMPORT DATABASE TO MYSQL CONTAINER :
docker cp "'path to .sql file'" mysql:/netflix.sql
docker exec -i mysql mysql -u root -proot netflix -e "source /netflix.sql"

CHECKING DATABASE :
docker exec -it mysql mysql -u root -p
SHOW DATABASES;
USE Netflix;
SHOW TABLES;

Setelah semua dieksekusi,code seharusnya sudah dapat berjalan beserta databasenya di localhost:3000
