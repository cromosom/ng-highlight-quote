FROM node:latest

USER root

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
    && echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update -qqy \
    && apt-get -qqy install \
      google-chrome-stable \
    && rm /etc/apt/sources.list.d/google-chrome.list \
    && rm -rf /var/lib/apt/lists/* /var/cache/apt/*

# install angular cli globally
RUN npm install @angular/cli@1.4.9 -g --unsafe-perm --silent --progress=false

# setup app modules
WORKDIR /app
COPY ./package.json /app/
RUN cd /app && npm install --silent --progress=false

CMD ["tail", "-f", "/dev/null"]