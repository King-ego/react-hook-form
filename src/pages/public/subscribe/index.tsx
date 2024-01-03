import {useState} from "react";

import {SubmitHandler, useForm} from "react-hook-form";

import Input from "../../../components/form/Input";
import ContainerInput from "../../../components/form/ContainerInput";
import Label from "../../../components/form/Label";
import Error from "../../../components/form/Error";
import removeKeyEmpty from "../../../utils/removeKeyEmpty";
import setErrors, {Errors, ParseError} from "../../../utils/setErros";
import Form from "../../../components/form";

import schema from "./schema.ts";

interface FormData {
    email: string;
    phone: string;
    name: string;
    lastName: string;
    cep: string;
}


const Subscribe = () => {
    const {register, handleSubmit} = useForm<FormData>();
    const [formErrors, setFromErrors] = useState<Errors>({});

    const validate = (data: FormData) => {
        const clearData = removeKeyEmpty(data);
        try {
            schema.parse(clearData);
            setFromErrors({});
            return true;
        } catch (e) {
            const error = setErrors(e as ParseError);
            setFromErrors(error);
            return false;
        }
    }
    const submit: SubmitHandler<FormData> = (data) => {
        const isValidate = validate(data)
        if (!isValidate) return
        console.log(data);
    }

    function existError(key: string) {
        // eslint-disable-next-line no-prototype-builtins
        if (formErrors && formErrors?.hasOwnProperty(key)) {
            return formErrors[key]
        }
        return undefined;
    }

    return (
        <div className={`w-full flex justify-center`}>
            <Form onSubmit={handleSubmit(submit)}>
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
                <ContainerInput>
                    <Label name="Cep"/>
                    <Input {...register("cep")} placeholder='Cep' error={existError("cep")}/>
                    <Error error={existError("cep")}/>
                </ContainerInput>
                <button type="submit" className={`
                bg-blue-500
                text-white  
                px-4
                py-1.5
                rounded
                hover:bg-blue-600
                w-full
            `}>Subscribe
                </button>
            </Form>
        </div>
    )
}

export default Subscribe