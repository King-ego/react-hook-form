import * as zod from "zod";

const schema = zod.object({
    name: zod.string({
        required_error: "Nome obrigatório",
    }),
    lastName: zod.string({
        required_error: "Sobrenome obrigatório",
    }),
    phone: zod.string({
        required_error: "Telefone obrigatório",
    }),
    cep: zod.string({
        required_error: "Cep obrigatório",
    }),
    email: zod.string({
        required_error: "Email obrigatório",
    }).email("Email inválido"),
});

export default schema;