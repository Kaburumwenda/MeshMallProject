const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('wellcome',{
        title:'Wellcome'
    }
    );
})

module.exports = router;
