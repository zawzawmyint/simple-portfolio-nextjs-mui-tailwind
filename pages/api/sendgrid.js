import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    console.log("REQ.BODY", req.body);
    await sendgrid
      .send({
        to: "zawzawmyint1997@gmail.com", // Your email where you'll receive emails
        from: "cuzawzawmyint@gmail.com", // your website email address here
        subject: `Send from portfolio Zaw Zaw Myint`,
        html: `<div>You've got a mail</div>`,
      })
      .then(() => {
        console.log(
          "======================Email sent from portfolio Zaw Zaw Myint"
        );
      });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}

export default sendEmail;
