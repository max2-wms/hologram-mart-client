FROM node

LABEL maintainer="Maxime Pierre <max@webmediasolutionz.com>"

RUN apt-get update && apt-get install -y nginx cron \
    && git clone https://github.com/letsencrypt/letsencrypt /opt/letsencrypt --depth=1

RUN rm /etc/nginx/sites-enabled/*

COPY hologram-mart.webmediasolutionz.conf /etc/nginx/sites-enabled/hologram-mart.webmediasolutionz.conf

COPY le-renew-webroot.ini /usr/local/etc/le-renew-webroot.ini

COPY le-renew-webroot /usr/local/sbin/le-renew-webroot

# Copy cronjob file to the cron.d directory
COPY cronjob /etc/cron.d/cronjob

# Apply cron job and run it
RUN crontab /etc/cron.d/cronjob && cron

WORKDIR /app/

COPY package.json package.json

RUN npm i && npm i -g @angular/cli@6.2.9

COPY . .

RUN npm run build:prod

RUN service nginx reload

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
