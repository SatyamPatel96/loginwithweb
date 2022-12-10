import React from 'react'


const Home = () => {

  const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    margin:"100px",
    fontFamily: "Sans-Serif"
  };

   return (
       <div>
         <p className='pt-5'></p>
         <h1 style={myStyle}>WELCOME to Home Page</h1>
       </div>
   )
}

export default Home