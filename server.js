const axios = require('axios');
const dotenv = require("dotenv")
dotenv.config();
const sendGridAPIKey = process.env.Send

const obj = {
    subject: "Ananthu-Sendgrid template demo",
    heading: "Welcome to AVG",
    greeting:
        "Hi sooraj,",
        description:"Thank you for your interest in AVG.Please confirm your mail.",
        button:"Confirm Mail",
        acknowledgment:"Regards,",
        name:"AVG Team",
        
  
};
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
                           // name:"ananthu "

                        },
                        {
                            email: "ananthu.venugopal@urolime.com",
                            name:"Ananthu Venugopal"

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