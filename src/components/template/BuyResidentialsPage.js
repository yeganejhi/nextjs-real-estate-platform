// template/BuyResidentialsPage.js
import Card from '@/module/Card'
import Sidebar from '@/module/Sidebar'

export default function BuyResidentialsPage({data}) {
  return (
    <div className='w-full max-w-5xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-8 lg:gap-10 px-2 sm:px-3 md:px-4'>
        <div className='w-full sm:w-48 md:w-52 lg:w-56 flex-shrink-0'><Sidebar/></div>
        <div className='flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mt-4 sm:mt-6 md:mt-8 lg:mt-10'>
            {data.length?null:<p className="col-span-full text-center text-gray-500 py-8 text-sm sm:text-base">there is No ad to see</p>}
            {data.map((profile)=>(
              <div key={profile._id} className='w-full'><Card data={profile}/></div>
            ))}
        </div>
    </div>
  )
}