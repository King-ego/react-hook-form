import {SubmitHandler, useForm} from "react-hook-form";
import * as zod from "zod";

import Input from "../../../components/form/Input";
import ContainerInput from "../../../components/form/ContainerInput";
import Label from "../../../components/form/Label";
import Error from "../../../components/form/Error";
import removeKeyEmpty from "../../../utils/removeKeyEmpty.ts";
import setErrors, {ParseError} from "../../../utils/setErros.ts";
import {useState} from "react";

interface FormData {
    email: string;
    phone: string;
    name: string;
    lastName: string;
}

const schema = zod.object({
    name: zod.string(),
    lastName: zod.string(),
    phone: zod.string(),
    email: zod.string().email("Email invalido"),
})

const Subscribe = () => {
    const {register, handleSubmit} = useForm<FormData>();
    const [formErrors, setFromErrors] = useState<ParseError>();

    const validate = (data: FormData) => {
        const clearData = removeKeyEmpty(data);
        try {
            schema.parse(clearData);
            return false
        } catch (e) {
            const error = setErrors(e as ParseError) as ParseError;
            setFromErrors(error);
            console.log(error)
            return true;
        }
    }
    const submit: SubmitHandler<FormData> = (data) => {
        const isValidate = validate(data)
        if (isValidate) return
    }

    function existError(key: string) {
        // eslint-disable-next-line no-prototype-builtins
        if(formErrors && formErrors?.hasOwnProperty(key)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            return formErrors[key]
        }
        return undefined;
    }

    return (
        <div className={`w-full flex justify-center`}>
            <form className='flex flex-col gap-4 items-center' onSubmit={handleSubmit(submit)}>
                <ContainerInput>
                    <Label name="Nome"/>
                    <Input {...register("name")} placeholder='Nome' error={existError("name")}/>
                    <Error error={existError("name")}/>
                </ContainerInput>
                <ContainerInput>
                    <Label name="Sobrenome"/>
                    <Input {...register("lastName")} placeholder='Sobrenome' error={existError("lastName")}/>
                    <Error error={existError("lastName")}/>
                </ContainerInput>
                <ContainerInput>
                    <Label name="Email"/>
                    <Input {...register("email")} placeholder='Email' error={existError("email")}/>
                    <Error error={existError("email")}/>
                </ContainerInput>
                <ContainerInput>
                    <Label name="Telefone"/>
                    <Input {...register("phone")} placeholder='Telefone' error={existError("phone")}/>
                    <Error error={existError("phone")}/>
                </ContainerInput>
                <button type="submit" className={`
                bg-blue-500
                text-white  
                px-4
                py-1.5
                rounded
                hover:bg-blue-600
            `}>Subscribe
                </button>
            </form>
        </div>
    )
}

export default Subscribe