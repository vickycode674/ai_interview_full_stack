import { isAuthenticated } from "@/lib/actions/auth.action";
import { ReactNode } from "react";
import { redirect } from "next/navigation";


const AuthLayout = async ({children}:{children:ReactNode}) => {
    const isUserAuthenticated = await isAuthenticated();
  
    if(isUserAuthenticated) {
      redirect("/");
    }
  return (
    <div>{children}</div>
  )
}

export default AuthLayout;