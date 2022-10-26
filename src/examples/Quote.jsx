import { useLayoutEffect, useRef, useState } from "react"
import { useFetch } from "../hooks"

export const Quote = ({value}) => {


    
    const {author, quote} = !!value && value[0]

    const pRef = useRef()
    const [boxSize, setboxSize] = useState({width: 0, height: 0})

    useLayoutEffect(() => {
      const {height, width} = (pRef.current.getBoundingClientRect())
      setboxSize({width, height})
    }, [quote])

  return (
    <>
        <blockquote className="blockquote text-end" style={{display: 'flex'}}>
            <p ref={pRef} className="mb-1">{quote}</p>
            <footer className="blockquote-footer mt-1">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
    
  )
}
