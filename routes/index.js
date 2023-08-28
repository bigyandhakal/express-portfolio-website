const router = require('express').Router();
const mailService = require('../services/mailer')
// router.get('/:name', (req, res)=>{
//     const { name } = req.params;
//     name ? name : '';
//     res.render("index", {name})
// })

router.get('/', (req, res)=>{
    res.render("index", {title:"Bigyan Portfolio"})
})

router.get('/privacy', (req, res)=>{
    res.render("privacy", {title:"Bigyan Portfolio"})
})

router.get('/project', (req, res)=>{
    res.render("project", {title:"Bigyan Portfolio"})
})

router.get('/terms', (req, res)=>{
    res.render("terms", {title:"Bigyan Portfolio"})
})

router.get('/contact', (req, res)=>{
    res.render("contact", {title:"Bigyan Portfolio"})
})

router.post('/contact', async (req, res)=>{
    const data = req.body;
    const response = await mailService.mailer({to:'bigyandhakal377@gmail.com', data});
    let message;
    if (response) message="Message received";
    else message="Something went wrong";
    res.json({data : message})
})

// router.get('/:name', (req, res)=>{
//     console.log(req.query)
//     const {address} = req.query;   // query '?'
//     const {name, roll} = req.params;  // params ':'
//     res.send(`Hello ${name}. You are from ${address} and roll is ${roll}`)
// })

// router.post('/', (req, res)=>{
//     console.log(req.body)
//     res.send("Hello post world")
// })

module.exports = router;