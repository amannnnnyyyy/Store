"use client"

import { ShoppingBag } from "lucide-react"
import Button from "./ui/button"

function NavbarActions() {
  return (
    <div className="ml-auto flex items-center gap-x-4">
        <Button disabled={false} className="flex items-center rounded-full bg-black px-4 py-2">
          <ShoppingBag
            size={20}
            color="white"
          />
        </Button>
    </div>
  )
}

export default NavbarActions