"use client"
import { Product as ProductType } from "@/types"
import NoResult from "@/components/ui/no-results";
import { useState } from "react";
import ProductCard from "./ui/product-card";

interface ProductsProps {
    title: string;
    items: ProductType[]
}

const Products: React.FC<ProductsProps> = ({
    title,
    items
}) => {
  const [open,setOpen] = useState(false)
  const handleModal = () => {
    setOpen(true)
    setTimeout(()=>{
      setOpen(false)
    },3000)
  }
  return (
    <div className="space-y-4">
        <h3 className="font-bold text-3xl">
            {
                title
            }
        </h3>
        { items.length==0?
                    <NoResult/>:
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {items.map((item)=>(
                          <ProductCard key={item.id} data = {item}/>
                        ))}
                    </div>
        }
    </div>
  )
}

export default Products