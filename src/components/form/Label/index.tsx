import {FC} from "react";

interface LabelProps {
    name: string
}

const Label: FC<LabelProps> = ({name}) => {
    return (
        <p>
            {name}:
        </p>
    )
}

export default Label;