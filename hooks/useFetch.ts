import { useEffect, useState } from 'react'

export const useFetch = (url: string) => {
	const [data, setData] = useState<any>(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState<null | string>(null)

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(url)
				const result = await response.json()
				setData(result)
			} catch (e) {
				setError('Something went wrong')
			} finally {
				setLoading(false)
			}
		}
		getData()
	}, [url])

	return { data, loading, error }
}
