import React, { useState } from 'react'
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import login_pic from '../Images/Untitled design.png'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux'
import { LOGIN_SUCCESS } from '../Redux/AuthReducer/actionType'
import { login } from '../Redux/AuthReducer/action'

const Signin = () => {

  // const signup_ls = JSON.parse(localStorage.getItem('credentials')) || []

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const signup_ls = useSelector(store=> store.authReducer.credentials)
  const dispatch = useDispatch()

  const isAuth = useSelector(store=> store.authReducer.isAuth)
  const username = useSelector(store=> store.authReducer.username)
  console.log(isAuth);
  console.log(username);

  function handleClick(){

    let flag = false

    if(email=="" || password==""){
      toast.error("Please Fill Your Credentials !!", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
      return
    }

    else{
      signup_ls.map((item)=> {
        if(item.email == email && item.password == password){
          flag = true
          dispatch(login(item.name))
        }
      })
    }

    if(flag==true){

      toast.success("Login Success !", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });

      navigate('/')
    }
    else{
      toast.error("Incorrect Username Or Password !", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    }
  }

  return (
    <DIV>
      <div style={{padding: '25px'}}>
        <img width={'270px'} src={login_pic} alt="" />
      </div>
        <div style={{padding:'35px', borderTopRightRadius: '15px', borderBottomRightRadius:'15px', backgroundColor: '#ff4133', width:'450px'}}>
        <h1 style={{ fontSize: "40px", color: "#ffffff" }}>Welcome Back!</h1>
        <input onChange={(e)=> setEmail(e.target.value)} type="text" placeholder='Enter Your Email                                             ✉' />
        <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder='Enter Your Password                                       ꗃ' />
        <p style={{color: 'white'}}>Forgot your Password ?</p>
        <button onClick={handleClick}>Sign In</button>
        <p style={{color: 'white'}}>
          Don't have an account?{" "}
          <Link style={{ color: "#ffffff", fontWeight: "500" }} to="/signup">
            Sign Up
          </Link>{" "}
        </p>
        </div>
    </DIV>
  )
}

export default Signin

const DIV = styled.div`
    width: 46%;
    margin: auto;
    margin-top: 130px;
    margin-bottom: 30px;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    border-radius: 15px;
    display: flex;
    margin-bottom: 160px;
    /* border: 2px solid red; */
    
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


// #13162f