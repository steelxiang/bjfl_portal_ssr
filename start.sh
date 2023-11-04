docker rm -f portal
docker rmi -f portal:1.0
docker build -t portal:1.0 .
docker run --name portal -d -p 8981:80 portal:1.0