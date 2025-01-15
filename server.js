import express from "express";
import nodemailer from "nodemailer";
import bodyParser from "body-parser";
import cors from "cors"; // <- Import du middleware

const app = express();
app.use(bodyParser.json());
app.use(cors()); // Utilise CORS middleware

const transporter = nodemailer.createTransport({
  host: "localhost",
  port: 1025,
  ignoreTLS: true,
});

app.get("/", (req, res) => {
  res.send("Server is running");
  console.log("GET request successful");
});

app.post("/send-email", (req, res) => {
  const { name, subject, message, to } = req.body;
  const mailOptions = {
    from: "your-email@example.com",
    to: to,
    subject: subject,
    text: `Nom : ${name}\n\nMessage :\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.send("Email envoyé : " + info.response);
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3001");
});
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});
