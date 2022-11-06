# Hackmantra-backend

remove .env file before making repo public

Available routes:

curl --location --request POST 'https://hack-mantra-backend.herokuapp.com/api/v1/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "test",
    "password": "123"
}'


curl --location --request GET 'http://localhost:3000/api/v1/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username": "sam",
    "password": "123"
}'


