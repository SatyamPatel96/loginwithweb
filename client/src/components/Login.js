import React,{useState} from 'react'
import {useHistory} from 'react-router-dom'


const Login = () => {

    const history=useHistory();

    const [user,setUser]=useState({
        email:"",password:""
    });

    let name,value;

    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value =e.target.value;

        setUser({...user,[name]:value})
    }
    //  "proxy":"http://localhost:3001",

    const signin=async (e) =>{
        e.preventDefault();

        const {email,password}=user;

        const res=await fetch("/login",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            // Accept: {"application/json"},
            body:JSON.stringify({

                email,password
            })
        });

    //,"Access-Control-Allow-Origin": "*"


       const data =await res.json();
        if(data.status === false || !data){
            window.alert("INVALID LOGIN")
            console.log("INVALID LOGIN")
        }else{
            window.alert("SUCCESFUL LOGIN")
            console.log("SUCCESFUL LOGIN")
            history.push("/loginwindow");
        }

     }


   return (
      <>
      <div>
      <form method='POST'>
       <div>
           <label htmlFor="email">
         <i className="zmdi zmdi-email material-icon-name"></i>
           </label>
           <input type="email" name="email" id="email" autoComplete="off" placeholder="your email"
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
           onChange={handleInputs}
           ></input>
       </div>
       
       
       <div>
           <input type="submit" name="submit" value="login"
            onClick={signin}></input>
       </div>
       </form>
       </div>
      </>
   )
}

export default Login