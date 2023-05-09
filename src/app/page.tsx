import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className={`${robotoMono.className} text-4xl font-bold`}>Jesse Huang <span className="text-gray-400">@ jessebotics.online</span></h1>
    </main>
  )
}
