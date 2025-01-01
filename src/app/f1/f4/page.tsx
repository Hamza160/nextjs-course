import Link from 'next/link'
import React from 'react'

export default function F4() {
  return (
    <>
        <div>F4 Page</div>
        <Link href={'/f1/f3'} className='text-blue-500'>F3 Page</Link>
        <Link href={'/about'} className='text-blue-500'>Aboue Page</Link>
    </>
  )
}
