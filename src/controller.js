const UserModel = require("./model.js")

const loginformModel = require("./loginformModel.js")

const jwt = require("jsonwebtoken");

const Authentication= require("./authentication.js")


//================================================================//




let nameregex = /^[a-zA-Z]{1,20}$/
let emailregex = /^[a-z]{1}[a-z0-9._]{1,100}[@]{1}[a-z]{2,15}[.]{1}[a-z]{2,10}$/
let passwordregex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
let validtitle = ["Mr", "Mrs", "Miss"]




// ===========================================================//




const createuser = async function(req, res) {

//res.setHeader('Access-Control-Allow-Origin','*')

    try {
        if (Object.keys(req.body).length == 0) return res.status(400).send({status: false, msg: "please fill all required fields !" })

        let author = req.body
        let { fname, lname, title, email, password } = author

        if (!fname || fname == "") return res.status(400).send({status: false, msg: "Mandatory:please enter the firstname" })

        fname = author.fname = fname.trim()
        if (!nameregex.test(fname)) return res.status(400).send({ status: false, msg: "Please enter a valid fname" })


        if (!lname || lname == "") return res.status(400).send({status: false, msg: "Mandatory:please enter the lastname" })

        lname = author.lname = lname.trim()
        if (!nameregex.test(lname)) return res.status(400).send({ status: false, msg: "Please enter a valid lname" })


        if (!title || title == "") return res.status(400).send({status: false, msg: "Mandatory:please enter the title" })
        if (!(validtitle.includes(title))) return res.status(400).send({ status: false, msg: "please enter a valid title" })


        if (!email || email == "") return res.status(400).send({status: false, msg: "Mandatory:please enter the email" })

        email = author.email = email.trim()
        if (!emailregex.test(email)) return res.status(400).send({ status: false, msg: "Please enter a valid email" })

        const unique=await UserModel.findOne({email:email})
        if(unique) return res.status(400).send({status:false,msg:"such email already register"})


        if (!password || password == "") return res.status(400).send({status: false, msg: "Mandatory:please enter the password" })

        password = author.password = password.trim()
        if (!passwordregex.test(password)) return res.status(400).send({ status: false, msg: "Please enter a valid password" })


        let saveduser = await UserModel.create(author)
        res.status(201).send({ msg: saveduser })
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
}




//========================LOGIN=======================================//




const login = async function(req, res) {

    // res.setHeader('Access-Control-Allow-Origin','*')


    try {
        if (Object.keys(req.body).length == 0) res.status(400).send({status: false, msg: "firstly enter email and password !" })

        const username = req.body.email
        const password = req.body.password


        if (!username||username=="") return res.status(400).send({status: false, msg: "Mandatory:please enter email" })
        if (!emailregex.test(username)) return res.status(400).send({ status: false, msg: "Please enter a Valid email" })


        if (!password||password=="") return res.status(400).send({status: false, msg: "Mandatory:please enter password" })
        if (!passwordregex.test(password)) return res.status(400).send({ status: false, msg: "Please enter a valid password" })


        const check = await UserModel.findOne({ email: username, password: password })
        if (!check) return res.status(400).send({ status: false, msg: "such email and password does not exist, firstly need to Register  " })
 

        let token= jwt.sign({
                userId: check._id.toString(),
            },
            "Satyamkrishna"
        );

        res.cookie("jtoken",token,{
             expires:new Date(Date.now()+25892000000),
            httpOnly:true
        })
console.log(check._id)
        res.status(200).send({ status: true, msg: token })
    } catch (err) {
        res.status(500).send({ msg: err.message });
    }
}


//================================loginform=============================//
const numberregex=/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/

const loginform= async function(req,res){

 try{
    if (!Object.keys(req.body).length == 02) 
    return res.status(400).send({status: false, msg: "please fill all required fields !" })

    const data=req.body;
    const {age,phonenumber}=data

// if(age<=0 || age>=150 || !(typeof(age)==Number))
// return res.status(400).send({status:false,msg:"please enter the valid age"})

//if (!numberregex.test(phonenumber)) return res.status(400).send({ status: false, msg: "Please enter a valid phonenumber" })


const savedata=await loginformModel.create(data)

return res.status(200).send({status:true,msg:savedata})

}catch (err) {
    res.status(500).send({ msg: err.message });
}

}

module.exports = { createuser, login,loginform }