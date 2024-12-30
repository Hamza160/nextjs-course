"use client";
import { notFound } from 'next/navigation'
import React from 'react'

export function getRandomInt(count:number){
    return Math.floor(Math.random() * count);
}

export default function ReviewDetail({params}:{
        params:{
            productId:string,
            reviewId:string
        }
    }) {
      // const random = getRandomInt(2);

      // if(random === 1){
      //   throw Error('Error loading review');
      // }

      if(parseInt(params.reviewId) > 1000){
        notFound();
      }
  return (
    <div>Show Product {params?.productId} Review  {params?.reviewId}</div>
  )
}
