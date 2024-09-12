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
      router.push('/contact')
    }, 2000);
  }, [path])
    

  if(path !== '/contact')
    return (
      <div>
      
    <Alert variant='default'>
      <AlertTitle>
        <Link href={'/contact'}>
        <ChevronLeftIcon className="mr-2 inline-block" /> Back
        </Link>
        </AlertTitle>
      <AlertDescription>
        <div className='text-green-400 p-10'>Your Message have been sent successfully!</div>
      </AlertDescription>
    </Alert>

      </div>
  )
}

export default SentPage