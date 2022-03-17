![sendgrid](https://user-images.githubusercontent.com/92742169/158395144-8fa08a3b-fa9d-44f9-b1de-56fb1c92e042.png)

#  17 March 2022

# Sendgrid-Email-HTML_Template Quickstart for Node.js


## Description
Sending  Mail with the help of Sendgrid using Node.js via HTML Template

## Software name and version
Node.js v16.14.0 

## Installation 
Install Node.js

## Detailed Steps with code and instructions

### Steps -1 
### Create an account in sendgrid

* Signup in the sendgrid
* Authenticate Sender email address to verify and confirm , who is sending the mail.
* Generate the api key using ‘Create API Key’ in the sendgrid dashboard page.This API key is used for communicating between Node.js and Sendgrid . The request from the node.js is send through this API key.

### Steps -2 
### Create a new Node.js project
* Create a folder in your system 
* Create a new Node.js project using the command   
 ```
 npm init 
```
* Create a file app.js .We will be running the node from the file server.js 

### Steps -3 
### Install the Axios  dependency 
* Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests.
* Install the Axios dependency in our node project using the command
```
npm install axios
```
* Now the dependency is installed can be seen the package.json file

### Steps -4
### Install the dependencies for Environment Variable
* Install one dependency for Environment Variable in our node project using the command
```
npm install dotenv
```
* Now the dependency is installed can be seen the package.json file
* Environment Variable is used to store the API Key

### Steps -5
### Create a .env file in the folder and set the sendgrid api.
```
Send=*****your api key********************* 
```
### Steps -6
### Import all the dependencies to the file service.js 
```
const axios = require('axios');
const dotenv = require("dotenv")

```

### Steps -7
### Set the API key 
 * Remember, the API key is stored in an environment variable, so you can use dotenv.config() and  process.env() methods to access and assign it. 
```
const sendGridAPIKey = process.env.Send
```

### Steps -8
### Creating an Object and add the required datas as key value pair
```
const obj = {
    subject: "Ananthu-Sendgrid template demo",
    heading: "Welcome to AVG",
    greeting:
        "Hi Ananthu,",
    description: "Thank you for your interest in AVG.Please confirm your mail.",
    button: "Confirm Mail",
    acknowledgment: "Regards,",
    name: "AVG Team",


};
```

### Steps -9
### Create an HTML with template literals
```
let htmlTemplate = `
 <!DOCTYPE html>
 <html>
 <body>

 <h1>${obj.heading}</h1>

 <hr style="width:100%;text-align:left;margin-left:0">



 <p>${obj.greeting}</p>

 <p>${obj.description}</p>

 <button style=" color: white;
 border-radius: 4px;
 text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
 background: rgb(223, 117, 20);" >${obj.button} </button>
 
 <p>${obj.acknowledgment}</p>
 <p>${obj.name}</p>


 </body>
 </html>
 
 `;

```

### Steps -10
### Make the http request using Axios
```
const callMethod = () => {
    axios({
        method: "post",
        url: "https://api.sendgrid.com/v3/mail/send",
        headers: {
            Authorization:
                `Bearer ${sendGridAPIKey} `
        },
        data: {
            personalizations: [
                {
                    to: [
                        {
                            email: "ananthuvenugopal3@gmail.com",
                            name:"Ananthu "

                        },
                      
                    ],
                    subject: `${obj.subject}`
                }
            ],
            from: {
                email: "ananthu.venugopal@urolime.com",
                name: "Ananthu Venugopal"
            },
            content: [{ type: "text/html", value: htmlTemplate }]
        }
    });
};

callMethod();
```

### Executing program
* The code block is now complete. To send the message, you can run the service.js file in Node.js.
```
node service.js
```

## Help 

Check out Sentgrid documentations

## Author
* Ananthu Venugopal
## Version History
* 0.1
    * Initial Release

## License

This project is open source.

## Contact information -Developer

Mail- ananthu.venugopal@urolime.com

## Acknowledgments

https://sendgrid.com/
 

