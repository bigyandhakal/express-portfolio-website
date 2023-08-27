const router = require('express').Router();

// router.get('/:name', (req, res)=>{
//     const { name } = req.params;
//     name ? name : '';
//     res.render("index", {name})
// })
router.get('/', (req, res)=>{
    res.render("index")
})

router.get('/privacy', (req, res)=>{
    res.render("privacy")
})

router.get('/project', (req, res)=>{
    res.render("project")
})

router.get('/terms', (req, res)=>{
    res.render("terms")
})

router.get('/contact', (req, res)=>{
    res.render("contact")
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