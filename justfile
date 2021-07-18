prepare:
     docker-compose up -d mongo

front:
    cd frontend && ng serve --open

back:
    cd backend && npm start