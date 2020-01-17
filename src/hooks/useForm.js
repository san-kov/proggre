import { useState, useEffect } from "react"

const setInitObjectValues = (fields = [], value = "") =>
    fields.reduce(
        (acc, currentValue) => ({
            ...acc,
            [currentValue]: value
        }),
        {}
    )

export const useForm = ({ fields = [], validators = [] }) => {
    const [formData, setFormData] = useState(setInitObjectValues(fields, ""))

    const handleChange = e => {
        e.persist()
        setFormData(formData => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    return { formData, handleChange }
}
