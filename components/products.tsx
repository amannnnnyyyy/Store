import { Product as ProductType } from "@/types"

interface ProductsProps {
    title: string;
    items: ProductType[]
}

const Products: React.FC<ProductsProps> = ({
    title,
    items
}) => {
  return (
    <div className="space-y-4">
        <h3 className="font-bold text-3xl">{title}</h3>
    </div>
  )
}

export default Products