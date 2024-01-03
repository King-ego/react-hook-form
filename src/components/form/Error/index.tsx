import {FC} from "react";

interface PropError {
    error?: string
}

const Error: FC<PropError> = ({error}) => {
    if (!error) return null
    return (
        <p className={`text-red-500 text-sm`}>{error}</p>
    )
}

export default Error;