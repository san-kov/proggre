import React from "react"
import { Input } from "../Input/Input"
import { MdMail, MdLock, MdPerson } from "react-icons/md"
import { Button } from "../Button/Button"
import { useForm } from "../../hooks/useForm"

export const LogIn = () => {
    const { formData, handleChange } = useForm({
        fields: ["email", "password", "name"],
        validators: []
    })
    const { email, password, name } = formData

    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h2 className="u-margin-bottom-medium">
                Вход в существующий аккаунт
            </h2>
            <Input
                icon={<MdMail />}
                placeholder="Введите email"
                label="Email"
                handleChange={handleChange}
                value={email}
                name="email"
                value={email}
            />
            <Input
                icon={<MdLock />}
                placeholder="Введите пароль"
                label="Пароль"
                handleChange={handleChange}
                value={password}
                name="password"
                type="password"
            />

            <div className="u-flex u-margin-top-medium">
                <Button type="submit" color="primary">
                    Вход
                </Button>
            </div>
        </form>
    )
}
