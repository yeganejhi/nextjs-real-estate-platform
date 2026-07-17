// module/CategoryCard.js
import Link from 'next/link'
import Image from 'next/image'

export default function CategoryCard({title}) {
  return (
    <div className='group w-full max-w-40 sm:max-w-45 md:max-w-50 lg:max-w-55 xl:max-w-60 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 mt-0 sm:mt-1 md:mt-2'>
        <Link href={`/buy-residentials?category=${title}`} className='block'>
          <div className='relative w-full aspect-4/3 overflow-hidden bg-amber-50'>
            <Image 
              src={`/images/${title}.jpg`} 
              alt={title} 
              width={240} 
              height={144} 
              priority={true} 
              className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
            />
          </div>
          <div className='p-2 sm:p-2.5 md:p-3 text-center'>
            <p className='text-sm sm:text-base md:text-lg font-semibold text-gray-700 group-hover:text-amber-600 transition-colors duration-300 capitalize'>
              {title}
            </p>
            <div className='w-0 h-0.5 bg-amber-500 group-hover:w-6 sm:group-hover:w-7 md:group-hover:w-8 transition-all duration-300 mx-auto mt-1'></div>
          </div>
        </Link>
    </div>
  )
}