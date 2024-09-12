"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "../ui/button"

export interface ButtonProps {
  className: string,
  searchParams: {
    success: string
  },
}

const SubmitButton = ({className, searchParams}: ButtonProps) => {
  const router = useRouter()
  const { pending } = useFormStatus()

  // useEffect(()=> {
  //   setTimeout(() => {
  //     router.push('/contact')
  //   }, 2000);
  // }, [pending])
  
  const success = searchParams.success
  
  return (
    <>
    <Button type='submit' disabled={pending} className={`${pending ? 'cursor-not-allowed': 'cursor-pointer'} ${className}`}>
    Send
      </ Button>

    { success && success == '1' && <p className="text-green-400 py-8">Thanks, your message sent successfully!</p>}
    </>
  )
}

export default SubmitButton