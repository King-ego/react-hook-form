import {InputHTMLAttributes, forwardRef} from "react";

type PropsInput = InputHTMLAttributes<HTMLInputElement>
const Input = forwardRef<HTMLInputElement, PropsInput>((props, ref) => {
    return (
        <input
            {...props}
            ref={ref}
        />
    )
})

Input.displayName = 'Input'

export default Input