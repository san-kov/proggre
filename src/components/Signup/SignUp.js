import React, { useEffect } from "react"
import { Input } from "../../components/Input/Input"
import { MdMail, MdLock, MdPerson } from "react-icons/md"
import { useFormik } from "formik"
import { Button } from "../../components/Button/Button"
import * as yup from "yup"
import InputError from "../InputError/InputError"

const signupSchema = yup.object().shape({
    email: yup
        .string()
        .email("Неверный email")
        .required("Введите Email"),
    password: yup
        .string()
        .min(6, "Минимальная длина - 6 символов")
        .max(100, "Максимальная длина - 100 символов")
        .required("Введите пароль"),
    name: yup
        .string()
        .min(6, "Минимальная длина - 6 символов")
        .required("Введите имя"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Пароли не совпадают")
        .required("Подтвердите пароль")
})

export const SignUp = () => {
    const {
        values,
        handleChange,
        touched,
        errors,
        handleSubmit,
        validateForm,
        handleBlur
    } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        validationSchema: signupSchema,
        onSubmit: val => {
            console.log(1)
        }
    })

    const { email, name, password, confirmPassword } = values

    useEffect(() => {
        console.log(errors)
    }, [errors])

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h2 className="u-margin-bottom-medium">Создание нового аккаунта</h2>
            <Input
                icon={<MdPerson />}
                placeholder="Ваше имя"
                label="Имя"
                handleChange={handleChange}
                value={name}
                name="name"
                onBlur={handleBlur}
            />
            {touched.name && errors.name && (
                <InputError>{errors.name}</InputError>
            )}
            <Input
                icon={<MdMail />}
                placeholder="Введите email"
                label="Email"
                handleChange={handleChange}
                value={email}
                name="email"
                value={email}
                onBlur={handleBlur}
            />
            {touched.email && errors.email && (
                <InputError>{errors.email}</InputError>
            )}
            <Input
                icon={<MdLock />}
                placeholder="Введите пароль"
                label="Пароль"
                handleChange={handleChange}
                value={password}
                name="password"
                type="password"
                onBlur={handleBlur}
            />
            {touched.password && errors.password && (
                <InputError>{errors.password}</InputError>
            )}
            <Input
                icon={<MdLock />}
                placeholder="Подтвердите пароль"
                label="Подтвердите пароль"
                handleChange={handleChange}
                value={confirmPassword}
                name="confirmPassword"
                type="password"
                onBlur={handleBlur}
            />
            {touched.confirmPassword && errors.confirmPassword && (
                <InputError>{errors.confirmPassword}</InputError>
            )}
            <div className="u-flex u-margin-top-medium">
                <Button type="submit" color="primary">
                    Отправить
                </Button>
            </div>
        </form>
    )
}
