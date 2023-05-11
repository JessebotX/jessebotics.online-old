"use client"

import { useState, useEffect } from 'react'
import { Roboto_Mono } from 'next/font/google'

const robotoMono = Roboto_Mono({ subsets: ['latin'] })

export default function IndexShellPrompt() {
  const [text, setText] = useState("")
  const [fullText, setFullText] = useState("hello")
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText[index])
        setIndex(index + 1)
      }, 250)

      setTimeout(() => {
        setShow(true)
      }, 350 * fullText.length)
    }
  }, [index]) 

  return (
    <div className={`${robotoMono.className}`}>
      $ {text}
    {show ? 
    <h1>Hello world</h1> : <></>}
    </div>
  )
}
