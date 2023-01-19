import { useLayoutEffect, useState } from "react"

export const useWindowSize = (): boolean => {
    const [windowSize, setWindowSize] = useState(false)
    const updateWindowSize = () => {
        window.innerWidth <= 480 ? setWindowSize(false) : setWindowSize(true)
    }
    useLayoutEffect(() => {
        window.addEventListener('resize', updateWindowSize);
        updateWindowSize();
        return () => window.removeEventListener('resize', updateWindowSize);
    },[])
    return windowSize
}