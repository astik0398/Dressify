import { useDispatch } from "react-redux";

function Cart(){
    const dispatch=useDispatch();
    const cartItem="";
return(
    <div>
        <h1>Your Shopping Cart</h1>
        
         <h1>Your Cart={cartItem.length}</h1>
        <div className="CartItem" >
         {cartItem==undefined || cartItem.length==0?(
            <div className="emptyCard">Your Cart is empty</div>
         ):(
            cartItem.map((el)=>{
                return <div  >
                <img src={el.image} />
               <h3>{el.product}</h3>
               <h3>{el.price}</h3>
               <h3>{el.quantity}</h3>
               <h3>{el.total}</h3>
                </div>
            })
         )}
        </div>

    </div>
)
}
export default Cart;