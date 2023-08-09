import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// const nodemailerOptions = {
//   host: process.env.EMAIL_HOST,
//   port: process.env.EMAIL_PORT,
//   secure: true,
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD,
//   },
//   tls: {
//     rejectUnauthorized: false,
//   },
//   // requireTLS: true,
// };

// export const transporter = nodemailer.createTransport(nodemailerOptions);

// export const isNotEmpty = (value) => {
//   if (value !== undefined && value !== null && value.length > 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// export const messageHasLength = (mess) => {
//   if (mess.length > 10) return true;
//   else return false;
// };

// export const numberCheck = (num) => {
//   if (num.length < 7) return false;
//   for (let n of num) {
//     if (isNaN(parseInt(n))) return false;
//   }
//   return true;
// };

// export const emailCheck = (email) => {
//   if (!email.includes('@')) return false;
//   if (!email.includes('.')) return false;
//   return true;
// };

// export const isValid = (value, checker) => {
//   if (checker(value)) return true;
//   else return false;
// };

// export const emailFunction = (name, email, message) => {
//   const title = 'Thank you for contacting me!';
//   const bodyA = `Hello ${name}, thanks for taking the time to type a message. I will get back to you as soon as possible.\n\nHere is your Enquiry:\nName: ${name}\nEmail: ${email}\nMessage:\n${message}`;

//   return {
//     subject: title,
//     text: bodyA,
//     html: `
//       <!DOCTYPE html>
//       <html lang="en">
//           <head>
//               <meta charset="UTF-8">
//               <meta http-equiv="X-UA-Compatible" content="IE=edge">
//               <meta name="viewport" content="width=device-width, initial-scale=1.0">
//               <title>${title}</title>
//               <style>
//                   * {
//                     box-sizing: border-box;
//                   }
//                   body {
//                       font-family: 'Oxygen', sans-serif, Arial, Helvetica;
//                       width: 90% !important;
//                       margin: auto;
//                   }
//                   table {
//                       width: 100%;
//                   }
//                   .logo {
//                       background-image: url(https://image.shutterstock.com/image-photo/surreal-concept-roll-world-dice-260nw-1356798002.jpg) !important;
//                       width: 20vmax !important;
//                       height: 20vmax !important;
//                       background-size: contain;
//                       background-position: center;
//                       background-repeat: no-repeat;
//                   }
//                   h1 {
//                       font-size: 2vmax;
//                   }
//                   .footer {
//                       background-image: url(https://image.shutterstock.com/image-photo/surreal-concept-roll-world-dice-260nw-1356798002.jpg) !important;
//                       width: 10vmax !important;
//                       height: 7vmax !important;
//                       background-size: contain;
//                       background-position: center;
//                       background-repeat: no-repeat;
//                       margin-left: auto;
//                   }
//               </style>
//           </head>
//           <body>
//               <table>
//                     <tr>
//                         <td>
//                             <a href="www.salderosa.com"><div class="logo"> </div></a>
//                             <h1 style="text-align: center;margin: 0!important;">${title}</h1>
//                         </td>
//                     </tr>
//                     <tr>
//                         <td>
//                         <a href="www.github.com"><div class="footer"></div></a>
//                         </td>
//                     </tr>   
//               </table>
//           </body>
//       </html>
//     `,
//   };
// };

const sendEmail = async (subject, message, send_to, sent_from, reply_to) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: sent_from,
      to: send_to,
      subject: subject,
      html: message,
      replyTo: reply_to,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default sendEmail;