// template/BuyResidentialsPage.js
import Card from '@/module/Card'
import Sidebar from '@/module/Sidebar'

export default function BuyResidentialsPage({data}) {
  return (
    <div className='w-full md:max-w-5xl mx-auto flex gap-10'>
        <div><Sidebar/></div>
        <div className='flex flex-wrap mt-10'>
            {data.length?null:<p>there is No ad to see</p>}
            {data.map((profile)=>(<div key={profile._id}  className='w-64'><Card data={profile}/></div>))}
        </div>
    </div>
  )
}
