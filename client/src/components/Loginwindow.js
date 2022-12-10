import React from 'react'
import {useHistory} from 'react-router-dom'
const Loginwindow = () => {

    const history=useHistory();
    const next= () => {
        history.push("/loginform")
     }

   return (
       <div>
         <p className='pt-5'></p>
         <h1>WELCOME to login window </h1>
         click here to open the secret room
         <div>
         <input type="submit" name="submit" value="CLICK HERE"
         onClick={next}
          ></input>
     </div>
       </div>
   )
}

export default Loginwindow