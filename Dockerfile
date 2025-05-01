# Use an official Node.js runtime as the base image
FROM node:22

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose the app port (change if your app uses a different port)
EXPOSE 3000

# Start the application
CMD ["npm", "run", "storybook"]
