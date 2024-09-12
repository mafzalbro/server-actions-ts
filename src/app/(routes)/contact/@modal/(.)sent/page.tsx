"use client"

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { HomeIcon } from "@radix-ui/react-icons"
import { Button } from '@/components/ui/button'


const SentPage = () => {
  // const router = useRouter()
  // const path = usePathname()
  

  // useEffect(() => {
  //   window.location !== null && 
  //   setTimeout(() => {
  //     router.push('/contact')
  //   }, 500);
  // }, [])
    

  // if(path !== '/contact')
    return (
      <div className='h-screen w-full bg-black/30 backdrop-blur-sm fixed top-0 left-0 z-50 flex justify-center items-center'>
    <Alert variant='default' className='w-96 px-10 h-auto'>
      <p className='py-10 text-sm'>Just a Contact Modal Dear For Practice (changing link)</p>
      <AlertTitle className='float-right'>
        <Button asChild variant='outline'>
        <Link href={'/'} scroll={false}>
         <HomeIcon className='mr-2 text-sm'/> Go To Home
        </Link>
        </Button>

        </AlertTitle>
      <AlertDescription>
        <div className='text-green-500 py-20'>Your Message have been sent successfully!</div>
      </AlertDescription>
    </Alert>

      </div>
  )
}

export default SentPage