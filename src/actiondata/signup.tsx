'use server'
import { baseurl } from "@/alldata/data"
import axios from "axios"
import { cookies } from 'next/headers'
import { jwtDecode } from "jwt-decode";


export async function handleSignup(formData: FormData) {
    'use server'

    const rawFormData = {
        name : formData.get('name'),
        email: formData.get('email'),
        checkbox : formData.get('checkbox')!=='on'?true:false,
        password: formData.get('password'),
        password2 : formData.get('password2')
    }
    console.log(rawFormData)


    try{

        const response = await axios.post(`${baseurl}}cus/authreg/`,rawFormData)
    
    return response.data

    }catch(error:any){
        console.log(error)
    
    }
    // mutate data
    // revalidate cache
}
