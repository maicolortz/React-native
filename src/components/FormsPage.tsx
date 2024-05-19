import React from 'react'
import { useForm, useWatch } from 'react-hook-form'

export const FormsPage = () => {

    type FormInputs = {
        email: string;
        password: string;
    }

    const { register, handleSubmit, formState, watch } = useForm<FormInputs>(
        {
            defaultValues: {
                email: 'fernando@google.com',
                password: 'Abc123'
            }
        }
    )

    const onSubmit = (myForm: FormInputs) => {
        console.log(myForm)
    }

    console.log(watch('email'))

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Formularios</h3>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type="text" placeholder='Email' {...register('email')} required={true} />
                    <input type="text" placeholder='password'{...register('password')} required={true} />
                    <button type="submit"  >Ingresar </button>
                </div>
            </form>
        </>
    )
}
