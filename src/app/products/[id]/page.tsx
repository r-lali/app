import ProductDetail from '@/modules/products/components/ProductDetail';
import { DATA } from '@/modules/products/mock/Product'
import React from 'react'

 async function page({params} : {params : Promise <{id : string}>}) {
  const data = await params
  console.log(data)
  const product = DATA[0];
  return (
    <ProductDetail {...product}/>
  )
}

export default page