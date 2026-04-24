function auth(req,res,next){

// Step 1 Extract .
const token = req.headers.authorization;

// Step 2
if(!token){
return res.status(400).json({msg:"Access dined . Token Required"})
}
// step 3
if(token !== "yogesh"){
return res.status(401).json({msg:"Invalid Token"})
}
console.log("Successfully Verfied Token")

next()

}

module.exports = auth;