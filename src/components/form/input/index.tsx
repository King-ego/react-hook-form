import {InputHTMLAttributes, forwardRef} from "react";

type PropsInput = InputHTMLAttributes<HTMLInputElement>
const Input = forwardRef<HTMLInputElement, PropsInput>((props, ref) => {
    return (
        <input
            {...props}
            ref={ref}
            className={`
                border
                border-gray-300
                w-full
                hover:border-gray-500 
                outline-none
                focus:border-blue-500
                focus:border-2
                px-4
                py-1.5
                `}
        />
    )
})

Input.displayName = 'Input'

export default Input