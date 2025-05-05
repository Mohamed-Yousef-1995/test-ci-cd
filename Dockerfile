# Step 1: Build React app using Node.js
FROM node:22 AS build

# Set default workdir
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the full source code and build it
COPY . ./
RUN npm run build-storybook

# Step 2: Serve with Nginx
FROM nginx:alpine

# Copy built app to Nginx default directory
COPY --from=build /app/storybook-static /usr/share/nginx/html

# Replace default nginx config (optional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080
EXPOSE 8080

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]

