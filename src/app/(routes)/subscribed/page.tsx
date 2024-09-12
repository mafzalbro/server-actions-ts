"use client"

import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ChevronLeftIcon } from "@radix-ui/react-icons"


const SentPage = () => {
  const router = useRouter()
  const path = usePathname()
  

  useEffect(() => {
    window.location !== null && 
    setTimeout(() => {
      router.push('/')
    }, 2000);
  }, [path])
    

  if(path !== '/')
    return (
      <div>
      
    <Alert variant='default'>
      <AlertTitle>
        <Link href={'/'}>
        <ChevronLeftIcon className="mr-2 inline-block" /> Back
        </Link>
        </AlertTitle>
      <AlertDescription>
        <div className='text-green-500 p-10'>You have been successfully subscribed!</div>
      </AlertDescription>
    </Alert>

      </div>
  )
}

export default SentPage