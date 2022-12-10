import React,{useState} from 'react'
 import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'

const Loginform = () => {

    const history=useHistory();

    const [user,setUser]=useState({
        age:"",phonenumber:""
    });

    let name,value;


    const handleInputs=(e)=>{
        console.log(e);
        name=e.target.name;
        value =e.target.value;

        setUser({...user,[name]:value})

    }
  

    const savedata=async (e) =>{
        e.preventDefault();

        const {age,phonenumber}=user;

        const res=await fetch("/loginformwindow",{
            method:"POST",
            headers:{
            Accept: "application/json",
            "Content-Type":"application/json"
             },
            credentials:"include",
            // withCredentials:true,
           body:JSON.stringify({

                age,phonenumber
            })
        });



       const data =await res.json();
       
        if(data.status === false || !data){
            window.alert("⚠️INVALID DATA,NOT SAVED,TRY AGAIN")
            console.log("⚠️INVALID DATA,NOT SAVED,TRY AGAIN")
        }else{
            window.alert("✅DATA SAVE SUCCESFULLY ")
            console.log("✅DATA SAVE SUCCESFULLY")
            history.push("/loginwindow");
        }

     }

     useEffect( () => {
      savedata();
     }, []);

     const back= () => {
        history.push("/loginwindow")
     }


   return (
    <>
    <div>
    <form method='POST'>
     <div>
        <div>
            <h1>login OFFICIAL PAGE</h1>
            WELCOME TO THE OFFICIAL WEBSITE

        </div>
         <label htmlFor="age">
     <i className="zmdi zmdi-account material-icon-name"></i>
         </label>
         <input type="number" name="age" id="age" autoComplete="off" placeholder="your age"
          value={user.age}
          onChange={handleInputs}
          ></input>
     </div>
     
     <div>
         <label htmlFor="phonenumber">
     <i className="zmdi zmdi-phone material-icon-name"></i>
         </label>
         <input type="number" name="phonenumber" id="phonenumber" autoComplete="off"
          placeholder="your phonenumber"
          value={user.phonenumber}
         onChange={handleInputs}
         ></input>
     </div>
     
     
     <div>
         <input type="submit" name="submit" value="save"
          onClick={savedata}></input>
     </div>

     <div>
         <input type="submit" name="submit" value="cancel"
          onClick={back}></input>
     </div>

     </form>
     </div>
    </>
   )
}

export default Loginform;