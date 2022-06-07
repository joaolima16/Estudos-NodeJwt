const jwt = require('jsonwebtoken');

class Verification{

    static async LoginUser(req,res){
        const Token = "123456789"
        var teste ='';
        const {password} = req.body;
        const {email} = req.body
        console.log(password)
        if(email !="joao@gmail" || password != "123"){
            res.send({status: "usuário ou senha incorretos!"})
        }
        else{
            res.send({status: "login realizado!"})
            const auth = jwt.sign({IdUser:1},Token, {expiresIn:300})
            console.log(auth)
        }
    }
}
module.exports = Verification