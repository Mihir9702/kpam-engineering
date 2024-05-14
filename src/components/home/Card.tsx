import Image from "next/image"
import Link from "next/link"


export default function Card({ title, href, src, alt }: Card) {
  return (
    <Link href={href} className='hover:translate-y-[-20px] w-full md:w-fit mx-auto md:mx-0 cursor-pointer transition-all shadow-md'>
        <Image src={src} alt="card-image" className="card-image" />
        <div className='bg-kpam-blue py-4 text-white text-center'>
          {title}
        </div>
    </Link>
  )
}