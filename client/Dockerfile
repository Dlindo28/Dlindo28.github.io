FROM node:12-alpine

# Create client directory to hold the code inside the image
WORKDIR usr/src/Portfolio/client
 
# Copy package.json into container at /client
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy current directory contents into container at /client
COPY . .

# Map port 
EXPOSE 3000

# Run start command
CMD [ "npm", "start" ]
