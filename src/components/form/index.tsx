import {ReactNode, FormHTMLAttributes, FC} from "react";

interface Props extends FormHTMLAttributes<HTMLFormElement> {
    children: ReactNode
}

const Form: FC<Props> = ({children, ...props}) => (
    <form className='flex flex-col gap-4 items-center w-full max-w-[500px] mx-2' {...props}>
        {children}
    </form>
)


export default Form;