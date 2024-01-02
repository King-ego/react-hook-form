import {SubmitHandler, useForm} from "react-hook-form";
import Input from "../../../form/input";

interface FormData {
    email: string
}
const Subscribe = () => {
    const {register, handleSubmit} = useForm<FormData>();
    const submit: SubmitHandler<FormData> = (data) => {
        console.log(data)
    }
    return (
        <form className='form-control' onSubmit={handleSubmit(submit)}>
            <Input {...register("email")} placeholder='Email' />
            <button type="submit">Subscribe</button>
        </form>
    )
}

export default Subscribe