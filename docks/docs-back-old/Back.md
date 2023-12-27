docker-compose up -d --no-deps --build gett-postgres

docker-compose up -d --no-deps --build gett-redis

docker-compose up -d --no-deps --build gett-backend

docker-compose up -d --no-deps --build gett-frontend

docker run -d -p 2222:2222 -v $PWD/Caddyfile:/etc/caddy/Caddyfile --add-host=host.docker.internal:host-gateway caddy
