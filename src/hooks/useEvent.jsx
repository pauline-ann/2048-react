import { useEffect } from "react"

const useEvent = (event, handler, passive = false) => {
    useEffect(() => {
        window.addEventListener(event, handler, passive)

        const cleanUp = () => {
            window.removeEventListener(event, handler, passive)
        }

        return cleanUp
    })
}

export default useEvent