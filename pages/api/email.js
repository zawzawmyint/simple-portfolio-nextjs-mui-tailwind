// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { SMTPClient } from "emailjs";

export default function handler(req, res) {
  const { email } = req.body;
  console.log(email);

  const client = new SMTPClient({
    user: "cuzawzawmyint@gmail.com",
    password: "11111111",
    host: "smtp.gmail.com",
    ssl: true,
  });

  try {
    client.send({
      text: `Just for testing purpose`,
      from: "cuzawzawmyint@gmail.com",
      to: "zawzawmyint1997@gmail.com",
      subject: "testing emailjs",
    });
    console.log("successfully sent");
  } catch (e) {
    res.status(400).end(JSON.stringify({ message: "Error" }));
    console.log("error: " + e.message);
    return;
  }

  res.status(200).end(JSON.stringify({ message: "Send Mail" }));
}
