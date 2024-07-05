'use server'

import UserModel from "@/models/user";
import { connectDb } from "@/utils/connectDb";
import { formdataToObject } from "@/utils/helpers";
import bcrypt from 'bcrypt'
import { cookies } from "next/headers";
import { RedirectType, redirect } from "next/navigation";
import {z} from 'zod';

const loginSchema = z.object({
    email: z.string().email("enter a valid email"),
    password: z.string().min(6, 'password too short')
})

export async function login(_, formData){
    const {email, password} = formdataToObject(formData);
    console.log({email, password});

    const tryParse = loginSchema.safeParse({email, password});
    if(!tryParse.success) return {
        error: (tryParse.error.flatten().fieldErrors)
    }
    try{
        await connectDb();
        const emailInUse = await UserModel.findOne({email});
        if(!emailInUse) return {err: "invalid login details"}
        const hashedPassword = emailInUse.password;

        const matches = await bcrypt.compare(password, hashedPassword);
        if(!matches) return {err: "invalid login details"}
        
        const {set} = cookies();
        set("user_id", emailInUse._id.toString(), {
            maxAge: 60 * 60 * 24
        })
    }catch(err){
        console.error(err);
        return {err: "sometning went wrong"}
    }
    redirect('/movies', RedirectType.replace)
}
