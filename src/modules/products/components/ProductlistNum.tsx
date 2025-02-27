import React from 'react'
import { DATA } from '../mock/Product'
import ProductItem from './ProductItem'
function ProductlistNum() {
  return (
    <div className='flex flex-wrap justify-between items-center w-full my-10'>
      {
        DATA.map(item => {
          return (
            <ProductItem product={item}/>
          )
        })
      }
    </div>
  )
}

export default ProductlistNum