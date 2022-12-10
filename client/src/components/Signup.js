import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'
 // import {NavLink} from 'react'

const Signup = () => {
const history=useHistory();
    const [user,setUser]=useState({
        fname:"",lname:"",title:"",email:"",password:""
    });

    let name,value;

    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value =e.target.value;

        setUser({...user,[name]:value})
    }
    //  "proxy":"http://localhost:3001",
    const create=async (e) =>{
        e.preventDefault();

        const { fname,lname,title,email,password}=user
        const res=await fetch("/createuser",{
            method:"POST",
            headers:{"Content-Type":"application/json"},

            // Accept: {"application/json"},

            body:JSON.stringify({

                fname,lname,title,email,password
            })
        });

    //,"Access-Control-Allow-Origin": "*"


        const data =await res.json();
        if(data.status === false || !data){
            window.alert("INVALID REGISTRATION")
            console.log("INVALID REGISTRATION")
        }else{
            window.alert("SUCCESFUL REGISTRATION")
            console.log("SUCCESFUL REGISTRATION")
            history.push("/login");
        }
    }

    const back= () => {
        history.push("/login")
     }

     const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        margin:"50px",
        fontFamily: "Sans-Serif"
      };

   return (
     
       <>
       <div className="signup">
           <h2 style={myStyle}>Signup form</h2>
       <form method="POST" className="registraion-form">
       <div>
           <label htmlFor="fname">
       <i className="zmdi zmdi-account material-icon-name"></i>
           </label>
           <input type="text" name="fname" id="fname" autoComplete="off" placeholder="your first name"
           value={user.fname}
           onChange={handleInputs}
           ></input>
       </div>
         
       <div>
           <label htmlFor="lname">
       <i className="zmdi zmdi-account material-icon-name"></i>
           </label>
           <input type="text" name="lname" id="lname" autoComplete="off" placeholder="your last name"
           value={user.lname}
           onChange={handleInputs}
           ></input>
       </div>
       
       <div>
           <label htmlFor="title">
       <i className="zmdi zmdi-account material-icon-name"></i>
           </label>
           <input type="text" name="title" id="title" autoComplete="off" placeholder="your title name"
           value={user.title}
           onChange={handleInputs}
           ></input>
       </div>
       
       <div>
           <label htmlFor="email">
       <i className="zmdi zmdi-email material-icon-name"></i>
           </label>
           <input type="text" name="email" id="email" autoComplete="off" placeholder="your email"
           value={user.email}
           onChange={handleInputs}
           ></input>
       </div>
       
       <div>
           <label htmlFor="password">
       <i className="zmdi zmdi-lock material-icon-name"></i>
           </label>
           <input type="password" name="password" id="password" autoComplete="off"
            placeholder="your password"
            value={user.password}
           onChange={handleInputs}></input>
       </div>
       
       
       <div>
           <input type="submit" name="submit" value="register"
           onClick={create}></input>
       </div>
       <div>
         <input type="submit" name="submit" value="already register, login"
          onClick={back}></input>
     </div>
       {/* <div>
       <NavLink to="/login" > already register go to signin page</NavLink>
       </div> */}
       </form>
       </div>  
       </>
   )
}

export default Signup