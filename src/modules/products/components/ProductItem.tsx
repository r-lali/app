
import * as React from "react"
import Link from "next/link"
import { GalleryThumbnails , Heart } from "lucide-react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Button,
} from "@/components/ui/"
import Image from "next/image"


const  ProductItem = async (props : {product : any }) => {
    const {product} = props;
  return (
    <Card className="w-[400px] transform transition-transform duration-300 hover:scale-105">
      <CardHeader>
        <div className="relative w-full h-[300px]"> 
            <Image src={product?.image[0]?.image} 
            alt={product?.name}  fill className="rounded-t-lg object-cover"/>
        </div>
      </CardHeader>
      <CardContent>
      <h2 className="text-xl font-bold">{product?.name}</h2>
      <p className="text-gray-400">{product?.catgory}</p>
      <div className="flex justify-between items-center">
        <p className="mt-4 text-lg font-semibold">
          {product?.price}
        </p>
        <div className="flex gap-2">
        <Heart/>
        <Link href={`/product/category?id=${product.id}`}>
        <GalleryThumbnails/>
        </Link>
      </div>
      </div>
 
      </CardContent>
      <CardFooter>
      <Link href={`products/${product.id}`} className="w-full">
          <Button className="bg-slate-200 w-full text-black">More</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
export default ProductItem