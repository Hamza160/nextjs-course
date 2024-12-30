import { Metadata } from "next";
import Link from "next/link";

type Props = {
  params:{
    productId: string
  }
}

export const generateMetadata = async ({params}:Props): Promise<Metadata> => {
  const title = await new Promise(resolve => {
    setTimeout(() => {
      resolve(`iPhone ${params.productId}`)
    }, 100)
  })
  return {
    title: `Product ${title}`
  }
}

export default function ProductDetailPage({params}:Props) {
  return (
    <div>
      <Link href={'/products'}>Home</Link>

        <h1>Product Detail Page {params.productId}</h1>
    </div>
  );
}