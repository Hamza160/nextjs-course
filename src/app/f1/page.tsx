import Link from 'next/link'
import React from 'react'

export default function F1() {
  return (
    <>
        <div>F1 Page</div>
        <Link href={'/f1/f2'} className='text-blue-500'>F2 Page</Link>
    </>
  )
}
