FROM node:12
# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

# Copy app source code
RUN npm install 

# Expose port and start application
COPY . . 
EXPOSE 8000
CMD [ "npm", "start" ]
