FROM node:16
RUN mkdir /app
WORKDIR /app
COPY ./frontend/package.json /app
COPY ./frontend/ /app
RUN npm install
RUN npm install react axios
COPY ./ /app
EXPOSE 3000
CMD ["npm", "start","test"]