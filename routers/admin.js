var express =require('express');
var router = express.Router();


router.use(function(req,res,next){
	if(!req.userInfo.isAdmin){
		res.send("你不是管理员");
		return;
	}
	next();
});

router.get('/',function(req,res,next){
	res.send('后台管理首页');
});

module.exports=router; 