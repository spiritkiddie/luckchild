const express = require('express');
const router = express.Router();

const nodemailer = require('nodemailer');
const path = require('path');

//const Helper = require('../models/helpers');
const Config = require('../config/config');


//nodemailer
let transporter = nodemailer.createTransport({
    service: 'Godaddy',
    host: 'imap.secureserver.net',  
    //secure: true,
    port: 143,
    auth: {
        user: Config.SMTP_HOST_USERNAME,
        pass: Config.SMTP_HOST_PASSWORD
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: true
    }
});


//contact route
// router.get('/contact', (req, res) =>{
//     res.render('contact');
// });

// router.post('/contact', (req, res) =>{
//     let fullname = req.body.fullname;
//     let email = req.body.email;
//     let mobile = req.body.mobile;
//     let subject =  req.body.subject;
//     let message  = req.body.message;

//     // const mailOptions = {
//     //     from     : `GreenWave Contact Us <${(email).trim()}>`,
//     //     to       : Config.SMTP_HOST_EMAIL2,
//     //     subject  : `${(message).trim()}`,
//     //     //template : 'confirm_email',
//     //     html  : `
//     //             <p>Sender Fullname ${(fullname).trim()} </p>
//     //             <p>Sender Mobile ${(mobile).trim()} </p>
//     //             <p>Subject ${(subject).trim()} </p>
//     //             <p> Senders Message<br> ${(message).trim()}</p>
//     //             <p>Thanks</p>
//     //     `,
//     // };

//     // transporter.sendMail(mailOptions, (err, result) =>{
//     //     if (err) {
//     //         //console.log(err);
//     //         req.flash('error_msg', 'Your Email was\'nt Delivered! Please Try Again!');
//     //         res.redirect('/route/contact');
//     //     } else {
//     //         req.flash('success_msg', 'Your Email is successfully Delivered!');
//     //         res.redirect('/route/contact');
//     //     }
//     // });

// });


router.post('/apply', (req, res) =>{
    

    let fullname = req.body.fullname.trim();
    let national = req.body.nationality.trim();
    let email = req.body.email.trim();
    let phone = req.body.phone.trim();
    let gender = req.body.gender.trim();

    // Helper.checkUserExit(email, (err, userExit) => {
    //     if (err) throw err;

    //     if (userExit){

    //         req.flash('error_msg', 'Please Already Have a User with same Email please use new email!');
    //         res.redirect('/route/apply');

    //     }else {

    //         let newUser = new Data ({
    //             Fullname      : fullname,
    //             Gender        : gender,
    //             Email         : email,
    //             Phone         : phone,
    //             Nationality   : national
    //         });

    //         Helper.addUser(newUser, (err, user) => {
    //             if (err) {
    //                 req.flash('error_msg', 'Sorry We Could\'nt add you please re-register!');
    //                 res.redirect('/route/apply');
    //             }else {
    //                 req.flash('success_msg', 'Your Details was successfully added! our HR will update you soon Thanks!');
    //                 res.redirect('/route/apply');
    //             }
    //         });
    //     }

    // });

    // const mailOptions = {
    //     from     : `GreenWave Send CV Portal <${email}>`,
    //     to       : Config.SMTP_HOST_EMAIL1,
    //     subject  : 'JOB CV',
    //     //template : 'confirm_email',
    //     attachments: [
    //         {   // file on disk as an attachment
    //             filename: `${cv.filename}`,
    //             path: `${cv.path}` // stream this file
    //         }
    //     ],
    //     html  : `
    //             <p>Hello Please i am ${firstname} ${lastname} </p>
    //             <p> Please find the attached file as my CV for review</p>
    //             <p>Thanks</p>
    //     `,
    // };

    // transporter.sendMail(mailOptions, (err, result) => { 
    //     if (err) { 
    //         console.log(err);
    //         req.flash('error_msg', 'Your Email was\'nt Delivered! Please Try Again!');
    //         res.redirect('/route/apply');
    //     }else { 
    //         req.flash('success_msg', 'Your Email is successfully Delivered!');
    //         res.redirect('/route/apply');
    //     } 
    // });
});

module.exports = router;