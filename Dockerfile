FROM node

RUN mkdir /app
WORKDIR /app

# ENV ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "dev"]
