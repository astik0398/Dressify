import { useState } from "react";
import { useDispatch } from "react-redux";

function Cart(){
    const [quantity,setQuantity]=useState(1)
    const dispatch=useDispatch();
    const cartItem=[{
        image:"",
        product:"tshirt",
        price:300,
        
        total:300
    },{
        image:"",
        product:"tshirt",
        price:300,
        
        total:300
    },{
        image:"",
        product:"tshirt",
        price:300,
        
        total:300
    }];
    const handleAdd=()=>{
      setQuantity(prev=>prev+1)
    }
    const handleReduce=()=>{
      setQuantity((prev)=>prev-1)
    }
return(
    <div>
        <h1>Your Shopping Cart</h1>
        <br/>
        <br/>
         <h1>Your Cart={cartItem.length}</h1>
         <br/>
         <br/>
    { cartItem.length==0 && <h1>Your Cart Is Empty</h1> }
    <div style={{display:"flex",justifyContent:"space-around"}} >
        <div  
        style={{boxShadow:" rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;"}}
        >
    <table>
        <thead>
         <tr>
          <td><h1>Image</h1></td>  
          <td><h1>Product</h1></td>
          <td><h1>Price</h1></td>
          <td><h1>Quantity</h1></td>
          <td><h1>Total Price</h1></td>
            </tr>   
        </thead>
        <tbody style={{boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"}} >
            {cartItem && cartItem.map((el)=>{
                return(
                    <tr>
                        <td><img src={el.image} /> </td>
                        <td><h3>{el.product}</h3></td>
                        <td><h3>{el.price}</h3></td>
                        <td><div style={{display:"flex",justifyContent:"space-around"}} >
                            <button onClick={handleAdd} style={{width:"20px",height:"20px"}}>+</button>
                            <p>{quantity}</p>
                            <button  onClick={handleReduce} style={{width:"20px",height:"20px"}} >-</button>
                            </div></td>
                        <td><h3>{quantity*el.price}</h3></td>
                    </tr>
                )
            })}
        </tbody>
    </table>
    </div>
    <div style={{boxShadow:" rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;"}} >
        <h1>Order Summary</h1>
        <div>
        <input placeholder="Discount Voucher" style={{width:"70%",height:"20px"}} />
        <button style={{backgroundColor:"red",color:"white",width:"25%",height:"20px"}} >Apply</button>
        </div>
        <h1>Sub Total:{}</h1>
        <h1>Discount</h1>
        <h1>Delivery Charge</h1>
        <br/>
        <br/>
        <h1>Total</h1>
        <button>Buy This Product</button>
    </div>
</div>
    </div>
)
}
export default Cart;