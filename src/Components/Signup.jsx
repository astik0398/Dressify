import React, { useState } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
// import signuppic from '../Images/signuppic.png'
// import { useToast } from "@chakra-ui/react";

const Signup = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const toast = useToast()

  const signup_ls = JSON.parse(localStorage.getItem('credentials')) || []

  // function errorToast(){

  //   toast({
  //     title: 'Fill All The Details',
  //     description: "Above input cannot be empty",
  //     status: 'error',
  //     duration: 2000,
  //     isClosable: true,
  //   })
  // }

  function handleClick(){
    if(name=="" || email=="" || password==""){
      alert('Please fill details')
    }

    else{
      let cred = {
        name,
        email,
        password
      }

      signup_ls.push(cred)
      localStorage.setItem('credentials', JSON.stringify(signup_ls))

      alert('SIGN UP SUCCESS !!')
    }
    
  }

  return (
    <DIV>
      {/* <div style={{padding: '25px'}}>
        <img width={'270px'} src={signuppic} alt="" />
      </div> */}
        <div style={{padding:'35px', borderTopRightRadius: '15px', borderBottomRightRadius:'15px', backgroundColor: '#ff4133', width:'450px'}}>
        <h1 style={{ fontSize: "40px", color: "#ffffff" }}>Hey There !</h1>
        <input onChange={(e)=> setName(e.target.value)} type="text" placeholder='Enter Your Name                                         @' />
        <input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder='Enter Your Email                                          ✉' />
        <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Enter Your Password                                    ꗃ' />
        <button onClick={handleClick}>Sign Up</button>
        <p style={{color: 'white'}}>
        Already have an account?{" "}
          <Link style={{ color: "#ffffff", fontWeight: "500" }} to="/signin">
            Sign In
          </Link>{" "}
        </p>
        </div>
    </DIV>
  )
}

export default Signup

const DIV = styled.div`
    width: 45%;
    margin: auto;
    margin-top: 110px;
    margin-bottom: 30px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 15px;
    display: flex;
    
   div{
    /* border: 2px solid blue; */
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
    gap: 15px;
    
   }

   input{
    background-color: #ff4133;
    color: white;
    height: 40px;
    border-color: #ffffff;
    border-radius: 25px;
    padding-left: 10px;
    border-style: solid;
    border-width: 1px;
   }

   ::placeholder{
    color: white;
   }

   input:focus{
    background-color: white;
    color: #ff4133;
    outline: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
   }

   input:focus::-webkit-input-placeholder {
    color: red;
   }

   button{
    background-color: #dc2622;
    width: 60%;
    height: 40px;
    color: white;
    border-radius: 25px;
    border: none;
    margin: auto
   }

   button:hover{
    background-color: white;
    color: #ff4133;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transform: scale(1.1);
   }
`