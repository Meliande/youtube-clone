import Image from 'next/image'
import { Inter } from 'next/font/google'
import { HomeIcon } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen bg-zinc-950 flex'>
      <aside className='flex flex-col'>
        <div className='flex bg-white items-center gap-2'>
          
          <HomeIcon/> Início
        </div>
        <div className='bg-zinc-700 w-40'/>

      </aside>
    </div>
  )
}
