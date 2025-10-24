FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile
COPY next.config.ts tsconfig.json ./
COPY postcss.config.mjs ./
COPY components.json ./
COPY public/ ./public/
COPY src/ ./src/
RUN pnpm run build

FROM nginx:alpine
COPY --from=builder /app/.next/static /usr/share/nginx/html/
COPY --from=builder /app/public /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/templates/*.template /etc/nginx/templates/

RUN rm -f /etc/nginx/conf.d/default.conf

EXPOSE 80 443