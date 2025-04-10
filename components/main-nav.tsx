"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { useEffect, useState } from "react";

interface MainNavProps {
    data: Category[];
}

const MainNav:React.FC<MainNavProps> = (
    { data }
) => {
    const [mounted, setMounted] = useState(false)
    useEffect(()=>{
        setMounted(true)
    }, [])
   

    const pathName = usePathname()
    const routes = data.map(route=>({
        href: `/category/${route.id}`,
        label: route.name,
        isActive: pathName === `/category/${route.id}`
    }))
    if (!mounted) {
        return null;
    }
  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
        {routes.map(route =>(
            <Link href={route.href} key={route.href}
                className={cn(
                    'text-sm font-medium transition-colors hover:text-black',
                    route.isActive? 'text-black' : 'text-neutral-500',
                )}>
                {route.label}
            </Link>
        ))}
    </nav>
  )
}

export default MainNav