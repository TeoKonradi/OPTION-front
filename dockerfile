FROM node:18-alpine

WORKDIR frontend/

COPY ./package*.json ./

RUN npm install
#RUN npm install --production --no-audit

COPY . .

#RUN npm run build

CMD [ "npm", "run", "build"]