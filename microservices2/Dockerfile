# Use the official Node.js image
FROM node:14-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Expose port 3000 to the outside world
EXPOSE 3000

# Run the app when the container starts
CMD ["npm", "start"]

