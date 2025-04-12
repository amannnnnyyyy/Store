"use client"

import { Product } from "@/types"
import Image from "next/image";

interface ProductCard {
    data: Product;
}
const ProductCard:React.FC<ProductCard> = ({
    data
}) => {
    console.log("images url :",data)
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
        <div className="aspect-square rounded-xl bg-gray-500 relative">
            <Image
                alt="image"
                src={data?.images?.[0].url}
                fill
            />
        </div>
    </div>
  )
}

export default ProductCard