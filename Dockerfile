# Use official Node.js runtime as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the entire application
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Set the default command to run the application
CMD [ "npm", "start" ]
