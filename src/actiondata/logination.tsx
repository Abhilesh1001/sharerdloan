'use server'
import { baseurl } from "@/alldata/data"
import axios from "axios"
import { cookies } from 'next/headers'
import { jwtDecode } from "jwt-decode";


export async function handleLogin(formData: FormData) {
    'use server'
    const rawFormData = {
        email: formData.get('email'),
        password: formData.get('password'),
    }

    try {

        const response = await axios.post(`${baseurl}cus/authlogin/`, rawFormData)
        cookies().set({
            name: "access",
            value: response.data.token.access,
            httpOnly: true,
            path: '/',
        })
        cookies().set({
            name: "refresh",
            value: response.data.token.refresh,
            httpOnly: true,
            path: '/',
        })
        // console.log(response)
        // // mutate data
        // // revalidate cache
        // const decoded:any = jwtDecode(response.data.token.access);
        // console.log(decoded)
        // cookies().set({
        //     name: "user",
        //     value: decoded.name,
        //     httpOnly: true,
        //     path: '/',
        //   })


        return response.data

    } catch (error: any) {
        // console.log('..************....')
        // console.log(error.response.data)
        // return error.response.data
    }



}




