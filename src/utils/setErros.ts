export interface ParseError {
    errors: { path: string[]; message: string }[]
}
const setErrors = (e: ParseError): object => {
    let errors = {};
    e.errors.forEach(err => {
        const error = {
            [err.path[0]]: err.message,
        }
        errors = {...errors, ...error};
    });

    return errors;
}

export default setErrors;