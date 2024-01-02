import {ReactNode} from "react";

const ContainerInput = ({children}: {children: ReactNode}) => {
    return (
        <div className={`flex flex-col`}>
            {children}
        </div>
    )
}

export default ContainerInput;