'use client'

import { Button } from "@/components/ui/button"
import { Library, ShoppingBag, ShoppingCart } from "lucide-react" 
import Image from "next/image"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/"
import Link from "next/link"

function ProductDetail (product:any){
return (
    <div className="container mx-auto py-10">
         <Card className="max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{product?.name}</CardTitle>
      </CardHeader>
      <CardContent>
      <div className="grid md:grid-cols-2 gap-6">
      <div className="space-y-4">
     {
        product?.image?.length > 0 ? (
            <Image src={product?.image[0].image} alt={product?.name} width={500} height={500} quality={100} data-property="1" className="rounded-lg"/>
        ) : (
          <div className="w-full h-64 bg-slate-200 flex items-center justify-center rounded-e-lg">
             No Image
          </div>
        )}
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-xl font-semibold">
         ${product?.price}
        </p>
        <p className="text-gray-700">quantity:{product?.quantity}</p>
        <p className="text-sm mt-2">category:{product?.category}</p>
        <p className="text-gray-600 line-clamp">
            {product?.description || 'NO description'}
        </p>
        <Button className="my-4">
         <ShoppingCart/>
        </Button>
        <Link href="/products">
            <Button className="bg-gray-300 w-full">Back</Button>
        </Link>
      </div>
      </div>
      </CardContent>
    </Card>
    </div>
)
}

export default ProductDetail