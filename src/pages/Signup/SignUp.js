import React from "react"
import { Input } from "../../components/Input/Input"
import { MdMail, MdLock, MdPerson } from "react-icons/md"
import { Button } from "../../components/Button/Button"
import { useForm } from "../../hooks/useForm"

export const SignUp = () => {
    const { formData, handleChange } = useForm({
        fields: ["email", "password", "name"],
        validators: []
    })
    const { email, password, name } = formData

    return (
        <form className="signup">
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
                label="Password"
                handleChange={handleChange}
                value={password}
                name="password"
            />
            <Input
                icon={<MdPerson />}
                placeholder="Ваше имя"
                label="Display name"
                handleChange={handleChange}
                value={name}
                name="name"
            />
            <Button type="submit" type="primary">
                sign in
            </Button>
        </form>
    )
}
