import {FC} from "react";

interface PropError {
    error?: string
}

const Error: FC<PropError> = ({error}) => {
    if (!error) return null
    return (
        <p>{error}</p>
    )
}

export default Error;