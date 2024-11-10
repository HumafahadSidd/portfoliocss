import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div>
     <div className='nav'>

        <ul>
             <li><Image src="/images/Logo.png" height="20" width="30" alt="logo" /></li>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
          
     </ul>
     </div> 
    </div>
  )
}
