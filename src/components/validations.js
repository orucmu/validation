import { object, string } from 'yup';
import * as yup from 'yup'

const validations = object({
    email: string().email("Geçerli bir email giriniz.").required("Zorunlu alan."),
    password: string().min(5, "En az beş karakter olmalıdır.").required("Zorunlu alan."),
    confirmPassword: string().oneOf([yup.ref('password')], "Parolalar eşleşmiyor.").required("Zorunlu alan.")
});

export default validations;