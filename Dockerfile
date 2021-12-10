FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY ./website/index.html ./
COPY ./website/static/ ./static/
RUN ls -la ./static/
EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
