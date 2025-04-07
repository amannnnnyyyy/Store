import { cn } from "@/lib/utils";
import { forwardRef } from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
   className,
   children,
   disabled,
   type= "button",
   ...props
}, ref)=>{
    return (
        <button
            className={cn(`
                w-auto rounded-full bg-black border-transparent 
                px-5 py-3 cursor-pointer border text-white 
                font-semibold hover:opacity-75 transition
                ${disabled? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-300'}`,className)}
            ref={ref}
            type={type}
            {...props}
        >
            {children}
        </button>
    )
});

Button.displayName = "Button"

export default Button