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
            className={`py-2 px-4 rounded-md text-sm font-medium text-black cursor-pointer border ${className} ${disabled? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-300'}`}
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