import Header from '@/components/Header'
import Map from '@/components/Map'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col justify-center items-center p-4'>
      <Header />
      <Map />
    </div>
  )
}
