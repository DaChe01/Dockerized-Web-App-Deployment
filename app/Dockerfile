# Build Stage
FROM node:latest AS builder
WORKDIR /app
COPY . .
RUN npm run build

# Run Stage

FROM nginx:alpine
WORKDIR /app
COPY --from=builder /app/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]