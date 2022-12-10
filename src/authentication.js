
const jwt = require("jsonwebtoken");

const Authenticate = function(req, res, next) {
    // res.setHeader('Access-Control-Allow-Origin','*')
    //console.log(req.Cookie.jtoken)
    try {
        
        const token = req.cookies["jtoken"];
    
        if (!token) { return res.status(400).send({ status: false, msg: "tocken must be required" }) }

        let decodedToken = jwt.verify(token, "Satyamkrishna")
        //console.log(decodedToken)
        if (!decodedToken || Object.keys(decodedToken).length == 0 ) { return res.status(401).send({ status: false, msg: "token verification failed" }) }

        req.loggedinautherid = decodedToken.userId

        next()
    } catch (err) {
       // console.log(err.message)
        res.status(500).send(err.message)
    }
}

module.exports = { Authenticate }