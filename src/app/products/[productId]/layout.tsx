"use client"
import React, { PropsWithChildren } from 'react'
import { getRandomInt } from './[reviews]/[reviewId]/page';

export default function layout({children}:PropsWithChildren) {
  const random = getRandomInt(2);

  if(random === 1){
    throw Error('Error loading Product');
  }
  return (
    <div>
        {children}
        <h2>Features Products</h2>
    </div>
  )
}
