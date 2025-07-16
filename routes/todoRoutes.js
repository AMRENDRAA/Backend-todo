const express=require('express');
const router= express.Router();
const todoController= require('../controllers/todoController');





//Get todos 

router.get('/',todoController.gettodos);
router.post('/create',todoController.createtodo);
module.exports=router;