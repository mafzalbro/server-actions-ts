"use client"

import Link from 'next/link'
import { HeartFilledIcon } from '@radix-ui/react-icons'

const Footer = () => {
  return (
    <footer className='p-6 md:p-8 text-center flex items-start justify-around border-t'>
      <h2 className="text-2xl">Footer</h2>
      <ul>
        <li><Link href='/'>Home</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
        <li><Link href='/about'>About</Link></li>
      </ul>
    <p><HeartFilledIcon className='text-red-600 inline-block mr-2' /> Thanks</p>
    </footer>
  )
}

export default Footer