import { MailAdapter, SendMailData } from "../adapters/mail-adapter";
import nodemailer from 'nodemailer';
const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "2808728931f60f",
      pass: "c64b6c08d91a91"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Allen Jordan <allenjordan65@gmail.com>',
            subject,
            html: body,
        });
    };
}