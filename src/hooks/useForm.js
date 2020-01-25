import { useState, useEffect } from "react"

const setInitObjectValues = (fields = [], value = "") =>
    fields.reduce(
        (acc, currentValue) => ({
            ...acc,
            [currentValue]: value
        }),
        {}
    )

export const useForm = ({ fields = [], validationSchema = {} }) => {
    const [formData, setFormData] = useState(setInitObjectValues(fields, ""))

    const handleChange = e => {
        e.persist()
        setFormData(formData => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    // useEffect(() => {
    //     const validateFormData = async () => {
    //         console.log(await validationSchema.validate(formData))
    //     }
    //     if (validationSchema) validateFormData()
    // }, [formData])
    return { formData, handleChange }
}
