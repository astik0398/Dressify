import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { postProduct } from '../Redux/ProductReducer/action'

const Admin = () => {

const [name, setName] = useState("")
const [price, setPrice] = useState("")
const [category, setCategory] = useState("")
const [rating, setRating] = useState(0)
const [detail, setDetail] = useState("")

const [itemm, setItemm] = useState([])

const [color, setColor] = useState("")
const [img1, setImg1] = useState("")
const [img2, setImg2] = useState("")
const [img3, setImg3] = useState("")

const [deleteId, setDeleteId] = useState(null)

const dispatch = useDispatch()

function handleSubmit(e){
    e.preventDefault()

   const obj = {color, img1, img2, img3}

   setItemm([...itemm, obj])

   const item = [...itemm, obj]

   const newProduct = {
    name, price, category, rating, detail, item
   }

   dispatch(postProduct(newProduct))

  setName("");
  setPrice(0);
  setCategory("");
  setRating(0);
  setDetail("");
  setColor("");
  setImg1("");
  setImg2("");
  setImg3("");
   
}

function handleDelete(e){
    e.preventDefault()

    axios.delete(`https://dressify-server-project.onrender.com/products/${deleteId}`)
    .then(function(res){
        console.log(res.data);
    })
    setDeleteId("")
}

  return (
    <DIV>
        <h2 style={{textAlign:'center', marginBottom:'15px'}}>ADD A PRODUCT</h2>
        <div>
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e)=> setName(e.target.value)} type="text" placeholder='Enter Product Name' />
            <input value={price} onChange={(e)=> setPrice(e.target.value)} type='text' placeholder='Enter Price In ₹'/>
            <select value={category} onChange={(e)=> setCategory(e.target.value)} style={{height:'30px', borderRadius:'12px', border:'1px solid blue', backgroundColor: 'rgb(235, 231, 231)', outlineColor:'red'}}>
                <option value="">Select Category</option>
                <option value="men">Men's Clothing</option>
                <option value="women">Women's Clothing</option>
                <option value="kids">Kids Wear</option>
            </select>
            <divvv style={{display: 'flex'}}>
            {/* <label style={{paddingTop:'5px', paddingRight:'10px'}}>Rate The Product</label> */}
            <input style={{accentColor:'red', paddingLeft:'0px'}} type="range" min={0} max={5} value={rating} onChange={(e)=> setRating(e.target.value)}/>
            <label style={{paddingTop:'5px', paddingLeft:'10px'}}>{rating} stars</label>
            </divvv>
            <textarea value={detail} onChange={(e)=> setDetail(e.target.value)} style={{borderRadius:'12px', backgroundColor: 'rgb(235, 231, 231)', outlineColor:'red', border:'1px solid blue'}} cols="35" rows="5" placeholder='Enter Product Details Here'/>
            <input value={color} onChange={(e)=> setColor(e.target.value)} type="text" placeholder='Enter Product Color' />
            <input value={img1} onChange={(e)=> setImg1(e.target.value)} type="text" placeholder='Enter Product Image 1' />
            <input value={img2} onChange={(e)=> setImg2(e.target.value)} type="text" placeholder='Enter Product Image 2' />
            <input value={img3} onChange={(e)=> setImg3(e.target.value)} type="text" placeholder='Enter Product Image 3' />
            <button style={{height: '30px', width:'200px', margin:'auto', borderRadius:'12px', border:'none', boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}} type='submit'>ADD PRODUCT</button>
        </form>
        </div>

        <h2 style={{textAlign:'center', marginTop:'25px'}}>DELETE PRODUCT</h2>

        <div style={{marginTop: '20px', marginBottom:'25px'}}>
            <form onSubmit={handleDelete}>
                <input value={deleteId} onChange={(e)=> setDeleteId(e.target.value)} type="number" placeholder='Enter Product ID Here' />
                <button style={{height: '30px', width:'200px', margin:'auto', borderRadius:'12px', border:'none', boxShadow:'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px'}} type='submit'>DELETE PRODUCT</button>
            </form>
        </div>
    </DIV>
  )
}

export default Admin

const DIV = styled.div`
    
    width: 40%;
    margin: auto;
    margin-top: 35px;
    /* background-color: white; */
    /* display: flex; */

    div{
        padding: 40px;
        background-color: white;
        box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
        border-radius: 15px;
    }

    form{
    display: flex;
    flex-direction: column;
    gap: 18px;
    width: 85%;
    margin: auto;
    }

    input{
        height: 30px;
        background-color: rgb(235, 231, 231);
        border-radius: 12px;
        outline-color: red;
        padding-left: 10px;
        border: 1px solid blue;
    }

    button{
        font-weight: 600;
        background-color: rgb(235, 231, 231);
    }

    button:hover{
        cursor: pointer;
        transform: scale(1.1);
    }
`