"use client"

import { useForm, SubmitHandler } from "react-hook-form"
import { z } from "zod"
import Button from "./Button"
import FormInput from "./FormInput"
import FormTextArea from "./FormTextArea"

const ContactSchema = z.object({
    name: z.string().min(2, { message: "Name must be 2 characters long" }).max(50, { message: "Name must be 50 characters long" }),
    email: z.string().email(),
    message: z.string().min(3).max(1000)
})

type Inputs = z.infer<typeof ContactSchema>

const FormContact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);


    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-96 flex flex-col">
            {/* <div className="flex flex-col items-center justify-center"> */}
            <label htmlFor="name" className="text-xl font-light">Name</label>
            <input id="name" {...register("name", { required: true })} className="w-full border-2 border-timberwolf border-b-black bg-timberwolf focus:border-2 focus:bg-white px-2 py-4 mb-4" />
            <label htmlFor="email" className="text-xl font-light">Email</label>
            <input id="email" {...register("email", { required: true })} className="w-full border-2 border-timberwolf border-b-black bg-timberwolf focus:border-2 focus:bg-white px-2 py-4 mb-4" />
            <label htmlFor="shootamessage" className="text-xl font-light">Message</label>
            <textarea name="message" id="shootamessage" className="w-full border-2 border-timberwolf border-b-black bg-timberwolf focus:border-2 focus:bg-white px-2 py-4 mb-8"></textarea>

            <button type="submit" className="bg-black text-xl font-light text-white py-4">SUBMIT</button>
            {/* </div> */}
        </form>
    )
}

export default FormContact