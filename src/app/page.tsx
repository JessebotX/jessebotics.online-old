import { Roboto_Mono } from 'next/font/google'
import IndexShellPrompt from '@/components/index-shell-prompt'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1 className={`${robotoMono.className} text-4xl font-bold`}>
        Jesse Huang <span className="text-gray-400">@ jessebotics.online</span>
      </h1>
      <IndexShellPrompt />
    </main>
  )
}
