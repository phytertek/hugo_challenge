FROM node:alpine
COPY ./index.js .
ENTRYPOINT [ "node", "index.js" ]
CMD []