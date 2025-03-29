import React, { ReactNode } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";

const RootLayout = async ({children}:{children : ReactNode}) => {
    const isUserAuthenticated = await isAuthenticated();

    if(!isUserAuthenticated) {
      redirect("/sign-in");
    }
  
  return (
 <div className="root-layout">
        <nav className='flex items-center gap-3'>
            <Link href="/" className="flex items-center gap-2" />
            <Image src="/logo.svg" alt="logo" width={38} height={32} />
        <h2 className="text-primary-100">Interview One</h2>
        </nav>
        {children}
    </div>  )
}

export default RootLayout;