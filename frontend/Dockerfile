# building an img

FROM node:12.14.1-alpine3.9 

# SET ENVIRONMENT VARIABLES
ENV ENVIRONMENT=production1
ENV api=$api



WORKDIR /app

COPY package.json ./

COPY . . 

EXPOSE $PORT

CMD [ "npm","run","start:prod" ]

