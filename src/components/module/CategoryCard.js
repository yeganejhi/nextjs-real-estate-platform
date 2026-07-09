// module/CategoryCard.js
import Link from 'next/link'
import Image from 'next/image'

export default function CategoryCard({title}) {
  return (
    <div className='group w-48 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1'>
        <Link href={`/buy-residentials?category=${title}`} className='block'>
          <div className='relative w-full h-36 overflow-hidden bg-amber-50'>
            <Image 
              src={`/images/${title}.jpg`} 
              alt={title} 
              width={240} 
              height={144} 
              priority={true} 
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
            />
          </div>
          <div className='p-3 text-center'>
            <p className='text-sm font-semibold text-gray-700 group-hover:text-amber-600 transition-colors duration-300'>
              {title}
            </p>
            <div className='w-0 h-0.5 bg-amber-500 group-hover:w-8 transition-all duration-300 mx-auto mt-1'></div>
          </div>
        </Link>
    </div>
  )
}