# URLShortenerAPI
A small API for shortening URL's provided by Users.

## API Endpoints

1. GET / - Provies a very basic HTML page for inserting the URL to be shortened and the email address. 
2. POST /getshorturl- Makes a post request with the email and the URL. Checks if its valid or not. If both are valid then it generates a random number which acts as the shortened URL. 
Returns a string with the new shortened URL. 
3. GET /getshorturl/:id- redirects to the URL which was provided beforehand. 

## How?
Simply takes in the big URL and maps it with a random number generated. Makes a second URL with the random number and a GET request to that URL redirects the user to the original webpage. 

This is probably vulnerable. It is not very well thought out. 
Typical Saturday afternoon fun. 😇 
Do like and support. 

## How to set up locally?
Clone the project to a directory of your choice by typing 
```git clone https://github.com/Shrman007658/URLShortenerAPI.git``` inside the directory. 

Then open up a terminal and run npm install 🙋 
Fire up the server and goto localhost:8080. I have set it to 0.0.0.0 for running it on any interface. 
I have also added a default HTML page for sending requests to the server. Check it out. 


## Testing
Test  the server for errors on the return objects. Find solutions and contribute. Power to you! Power to open-source! 
🔥 


