"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {Form,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import FormField from "./FormField"
import { useRouter } from "next/navigation"

const formSchema = z.object({
    username: z.string().min(2).max(50),
})


const authFormSchema = (type: FormType) => {
    return z.object({
      name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
      email: z.string().email(),
      password: z.string().min(3),
    });
  };


const AuthForm = ({type}:{type:FormType}) => {
    // 1. Define your form.
    const formSchema = authFormSchema(type);

    const router = useRouter();


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email:"",
            password:"",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
    try{
        if(type === 'sign-up'){
            console.log("Sign up", values);
            toast.success("Account created successfully. Please sign in.");
            router.push("/sign-in");
        }
        else{
            toast.success("Signed in successfully.");
            console.log("Sign in", values);
            router.push("/");
        }
    }
    catch(error){
         console.log(error);
         toast.error(`An error occurred. Please try again.${error}`); //toast is error finding mechanisim bro
    }
}

    const isSignIn =type === "sign-in";

    return (
        <div className="card-border lg:min-w-[566px]">
            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image
                     src="./logo.svg"
                      alt="logo"
                       height={32}
                        width={38}
                     />
                    <h2 className="text-primary-100">Interview One</h2>
                </div>
                <h3>Practice Job interview with AI</h3>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6 mt-4 form">
                  {!isSignIn && 
                   (
                   <FormField control={form.control} name="name" label="Name" placeholder="Enter your name" />
                   )}
                 
                 <FormField control={form.control} name="email" label="Email" placeholder="Enter your email" />

                 <FormField control={form.control} name="password"  label="Password" placeholder="Enter  Password" type="password" />

                   
                    <Button className="btn" type="submit">{isSignIn?'Sign In':'Create An Account'}</Button>
                </form>

                <p className="text-center">
                    {isSignIn ? 'No Account yet?':'have an Account already?'}
                    <Link href={isSignIn ? '/sign-up':'/sign-in'} className="font-bold text-user-primary ml-1">
                    {isSignIn ? 'Sign up':'Sign In'}
                    </Link> 
                </p>
            </Form>
            </div>
        </div>
    )
}

export default AuthForm