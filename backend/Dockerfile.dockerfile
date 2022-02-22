
FROM nikolaik/python-nodejs:python3.7-nodejs8
RUN mkdir /app
WORKDIR /app
COPY * ./

#RUN apt-get update && \
#    apt-get install -y \
#        python3 \
#        python3-pip \
#    && pip3 install --upgrade pip

RUN pip install -r requirements.txt

COPY ./backend/package*.json /app
COPY ./backend/script.py /app
COPY ./backend/ /app
RUN npm install
RUN npm install cors express child_process
COPY ./ /app
EXPOSE 8083
CMD ["npm", "start"]

