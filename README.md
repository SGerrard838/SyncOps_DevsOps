# PANDUAN Memasukkan projek ke dalam container Docker
Pastikan anda telah memiliki Docker Dekstop dalam komputer anda,
kemudian buka folder SyncOps_DevOps di terminal

BUILD IMAGE & RUN CONTAINER in SAME NETWORK :
docker network create my_network
docker build -t netflix .
docker run --name mysql --network my_network -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=netflix -p 3306:3306 -d mysql:latest
docker run --name netflix --network my_network -p 3000:3000 -d netflix

IMPORT DATABASE TO MYSQL CONTAINER :
docker cp "'path to netflix.sql file'" mysql:/netflix.sql
docker exec -i mysql mysql -u root -proot netflix -e "source /netflix.sql"

SETELAH COMMAND DIATAS DIEKSEKUSI,  APLIKASI SUDAH DAPAT BERJALAN BESERTA DATABASENYA DI LOCALHOST:3000 DALAM CONTAINER DOCKER.


  CHECK NETWORK :
docker network ls
docker network inspect my_network
  CHECK DATABASE :
docker exec -it mysql mysql -u root -p
password root
SHOW DATABASES;
USE Netflix;
SHOW TABLES;
