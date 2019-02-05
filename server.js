const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const sgMail = require('@sendgrid/mail')
const router = require("./routes");
const path = require("path");
require("dotenv").config();


const bodyParser = require("body-parser");

// Defining middleware

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var options = {
    setHeaders: function (res, path, stat) {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Strict-Transport-Security': 'max-age=15780000; includeSubDomains'
      })
    }
  }

// Serving up static
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build", options));
}

//send to react app!
app.use(router);

// sitemap
app.get('/sitemap', (req,res)=>{
  res.sendFile(path.join(__dirname, "./sitemap.xml"));
})

// emial setup
// =============================================================

app.post('/sendEmail', function(req, res) {
    console.log(req.body)
    let Email = JSON.stringify(req.body.email)
    let Name = JSON.stringify(req.body.name)
    let Inquiry = JSON.stringify(req.body.inquiry)
    let Message = JSON.stringify(req.body.message)
    
    sgMail.setApiKey(process.env.key);
  const msg = {
    to: 'jill@elevatebodywork.com',
    from: Email,
    subject: Name + "wrote you an email",
    text: Inquiry,
    html: Name + " has a message for you. The message says:   " + Message +". ---- respond to:  " + Email,
  };

  sgMail.send(msg);
   
  });


// Start the server
app.listen(PORT, function() {
  console.log(`Server now listening on PORT ${PORT}!`);
});
