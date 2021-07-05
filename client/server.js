const nodemailer = require("nodemailer");
const axios = require('axios');
const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors({origin: true}));

app.use(
    express.urlencoded({
      extended: true
    })
  )
  
  app.use(express.json())

app.post('/sendmail', async (req, res) => {

const information = req.body;
console.log(information);
  
 


  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: "radioheadboy0@gmail.com", 
      pass: "brbaricvegcwyarf", 
    },
  });

 
  let info = await transporter.sendMail({
    from: '" 👻" <noreply@example.com>', 
    to: information.currProjectHeadEmail, 
    subject: "Новый програмист присоединился к вашему проекту", 
    text: `К вашему проекту ${information.currProjectName} присоединился новый программист ${information.programmerProperties.programmerName}. Он обладает следующими навыками: ${information.programmerProperties.programmerSkills} и хочет работать над ${information.programmerProperties.programmerWishes}. C ним можно связаться ${information.programmerProperties.programmerContact}`, 
  });

  console.log("Message sent: %s", info.messageId);
  res.send('message sent!')
  
})

app.listen(process.env.PORT || 4242, () => console.log('Node server listening on port 4242!'));