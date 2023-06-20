import { useLayoutEffect, useState } from "react"
const baseUrl = import.meta.env.VITE_API_BASE_URL

export const useWindowSize = (): boolean => {
  const [windowSize, setWindowSize] = useState(false)
  const updateWindowSize = () => {
    window.innerWidth <= 480 ? setWindowSize(false) : setWindowSize(true)
  }
  useLayoutEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
    return () => window.removeEventListener('resize', updateWindowSize);
  }, [])
  return windowSize
}

export const sendDataDb = async (data: any) => {
  const response = fetch(baseUrl, {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((response) => {
    return response.json()
  }).then((response) => {
    console.log(response)
    return response
  })
  return response
}