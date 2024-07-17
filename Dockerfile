FROM node:21-alpine3.18 as build-stage
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
ENV NODE_ENV production

# étape de production
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]