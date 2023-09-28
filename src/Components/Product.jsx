import React from 'react'
import { useSelector } from 'react-redux'

function Product() {

  const {products, store} = useSelector((store) => {
    console.log(store)
    return {
      products : store.ProductReducer.products

    }
})


  return (
    <div>
      <h1>Product</h1>
    </div>
  )
}

export default Product