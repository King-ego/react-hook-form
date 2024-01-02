import {InputHTMLAttributes, forwardRef} from "react";

type PropsInput = InputHTMLAttributes<HTMLInputElement> & {
    error?: string;
}
const Input = forwardRef<HTMLInputElement, PropsInput>((props, ref) => {
    const {error, ...propsInput} = props
    return (
        <>
            <input
                {...propsInput}
                ref={ref}
                className={`
                border
                ${error ? 'border-red-300' : 'border-gray-300'}
                w-full
                hover:border-gray-500 
                outline-none
                focus:border-blue-500
                focus:border-2
                px-4
                py-1.5
                `}
            />
        </>
    )
})

Input.displayName = 'Input'

export default Input