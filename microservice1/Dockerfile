# Use the official NGINX image from Docker Hub
FROM nginx:alpine

# Copy the HTML file to the NGINX server's default HTML directory
COPY index.html /usr/share/nginx/html/

# Expose port 80 to the outside world
EXPOSE 80

# Start NGINX when the container starts
CMD ["nginx", "-g", "daemon off;"]

