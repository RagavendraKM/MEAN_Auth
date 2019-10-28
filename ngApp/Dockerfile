From node:alpine AS builder

workdir /app

copy . .

RUN npm install && \
    npm run build

from nginx:alpine

copy --from=builder /app/dist/* /usr/share/nginx/html/