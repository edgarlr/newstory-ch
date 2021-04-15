import { fetchAPI } from 'lib/api'
import { useEffect, useState } from 'react'

const useFetch = (path: string) => {
  const [data, setData] = useState()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const data = await fetchAPI(path)
        setData(data)
      } catch (error) {
        setIsError(error.message)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [fetchAPI, path])

  return {
    data,
    isLoading,
    isError,
  } as const
}

export default useFetch
