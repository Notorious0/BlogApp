const nodemailer = require("nodemailer");
const config = require("../config");

const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // Outlook SMTP sunucusu
    port: 587, // TLS için
    secure: false, // TLS için false
    auth: {
        user: config.email.username, // Outlook e-posta adresiniz
        pass: config.email.password  // Outlook şifreniz veya uygulama şifreniz
    }
});

// Mail gönderme fonksiyonu
const sendMail = (to, subject, text, html) => {
    const mailOptions = {
        from: config.email.username, // Gönderen e-posta adresi
        to: to,                      // Alıcı e-posta adresi
        subject: subject,            // E-posta konusu
        text: text,                  // E-posta içeriği (düz metin)
        html: html                   // E-posta içeriği (HTML formatı, isteğe bağlı)
    };

    return transporter.sendMail(mailOptions); // sendMail işlemi promise döner
};

module.exports = { sendMail }; // sendMail fonksiyonunu obje olarak dışa aktar
