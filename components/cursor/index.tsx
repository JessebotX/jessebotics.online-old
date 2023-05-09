import { useEffect } from "react"

export default function Cursor() {
  useEffect(() => {
    let cursor = document.querySelector("#main-cursor") as HTMLElement

    window.addEventListener("mousemove", (e) => {
      let x = e.pageX
      let y = e.pageY

      cursor.style.left = x + "px"
      cursor.style.top = y + "px"
    })
  }, [])
  return (
    <>
      <div id="main-cursor"
        className="absolute h-[10rem] w-[10rem] border-2 border-black rounded-full -translate-y-1/2 -translate-x-1/2 opacity-25"></div>
    </>
  )
}
