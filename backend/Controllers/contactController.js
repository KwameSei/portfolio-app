import Contact from "../models/contact.js";
// import { transporter } from "../utils/email.js";
// import { isNotEmpty, messageHasLength, emailFunction, emailCheck, isValid } from "../utils/email.js";
import sendEmail from "../utils/email.js";


export const createContact = async (req, res, next) => {
  const { name, email, message } = req.body;

  // if (
  //   isValid(name, isNotEmpty) &&
  //   isValid(email, emailCheck) &&
  //   isValid(message, messageHasLength)
  // )
  // {
  //   try {
  //     const contact = new Contact({
  //       name,
  //       email,
  //       message,
  //     });

  //     const contactCreated = await contact.save();

  //     if (!contactCreated)
  //       return next()

  //     const mailOptions = {
  //       from: process.env.EMAIL_USER,
  //       to: email,
  //       subject: `Contact Confirmation n. ${contact._id.toString()}`,
  //       html: emailFunction(name, email, message),
  //     }

  //     transporter.sendMail(mailOptions, async(err, info) => {
  //       if (err) {
  //         console.log(err);
  //         return next()
  //       }
  //       else {
  //         await Contact.findByIdAndUpdate(contact._id, { sentConfirmation: true });
  //         console.log('Email sent: ' + info.response);

  //         transporter.sendMail({
  //           from: `${name} ${email}`,
  //           to: process.env.EMAIL_USER,
  //           subject: `Contact Request n. ${contact._id.toString()}`,
  //           html: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`,
  //         }, async(err, info) => {
  //           if (err)
  //             return next()
  //           else {
  //             await Contact.findByIdAndUpdate(contact._id, { receivedConfirmation: true });
  //             console.log('Email sent: ' + info.response);
  //             res.status(201).json({ contact });
  //           }
  //         })
  //       }
  //     });
  //   } catch (error) {
  //     res.status(500).json({ error: error.message });
  //   }
  // }

  try {
    const contact = await Contact.create({
      name,
      email,
      message,
    });

    const subject = `Thank you for contacting me ${name}`;
    const confirmationMessage = `<p>Hi ${name},</p>
    <p>Thank you for contacting us. We will get back to you as soon as possible.</p>
    <p>Regards,</p>
    <p>Team</p>`;

    const send_to = email;
    const sent_from = process.env.EMAIL_USER;
    const reply_to = process.env.EMAIL_USER;

    sendEmail(subject, confirmationMessage, send_to, sent_from, reply_to);

    res.status(201).json({ contact });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};