const axios = require('axios');

const obj = {
    subject: "Ananthu-Sendgrid template demo",
    heading: "Welcome to My Portfolio ",
    description:
        "Hi, Iam Ananthu Venugopal . Iam a Developer and a Composer ",
    image: "https://i.ibb.co/hKDqcmr/Myportfolio.png"
};
let htmlTemplate = `
 <!DOCTYPE html>
 <html>
 <body>
 <h1>${obj.heading}</h1>

 <img src=${obj.image} alt="Sendgrid" style="width:400px;height:200px;border:0"

 <p>${obj.description}</p>
 </body>
 </html>
 
 `;

const callMethod = () => {
    axios({
        method: "post",
        url: "https://api.sendgrid.com/v3/mail/send",
        headers: {
            Authorization:
                "Bearer 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"
        },
        data: {
            personalizations: [
                {
                    to: [
                        {
                            email: "ananthuvenugopal3@gmail.com",
                            //   name:"ananthu"

                        },
                        {
                            email: "ananthu.venugopal@urolime.com",
                            //  name:"ananthu"

                        },

                    ],
                    subject: `${obj.subject}`
                }
            ],
            from: {
                email: "ananthu.venugopal@urolime.com",
                name: "ananthu"
            },
            content: [{ type: "text/html", value: htmlTemplate }]
        }
    });
};

callMethod();